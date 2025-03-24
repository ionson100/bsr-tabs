import React, {Children, Component} from "react";
import {v4 as uuidv4} from 'uuid';
import {ItemTabProps, TabProps} from "./tabProps";
import {getButtonContent, openItem, PREFIX, setDisabled, setShow} from "./utils";


export class Tabs extends Component<TabProps, any> {


    private list: Array<ItemTabProps>;
    _id?:string;


    private readonly mRefDiv: React.RefObject<HTMLDivElement | null>;

    constructor({props}: { props: Readonly<TabProps> }) {
        super(props);
        this.mRefDiv = React.createRef()
        this.list = [];
        this._id=uuidv4()
    }


    public SetVisibilitiesTabById(id: string, value: boolean, callback?: () => void) {
        setShow(id, PREFIX, value, callback)
    }

    public SetDisabledTabById(id: string, value: boolean, callback?: () => void) {
        setDisabled(id, PREFIX, value, callback)
    }

    public SelectTabById(id: string, callback?: () => void) {
        const button = document.getElementById(PREFIX + id) as HTMLButtonElement;
        if (button) {
            button.click();
            if (callback) {
                callback()
            }
        }
    }

    innerRender() {

        if (Children) {
            this.list=[];
            Children.map(this.props.children, (d) => {

                const element=d as React.ReactElement<any>

                let id = element.props.id
                if (!id) {
                    id = uuidv4()
                }

                this.list!.push({
                    width: element.props.width,
                    icon: element.props.icon,
                    title: element.props.title,
                    select: element.props.select,
                    id: id,
                    eventKey: element.props.eventKey,
                    children: React.cloneElement(d as React.ReactElement<any>, {
                        id: id,
                        _tabs: this,
                    })
                })


            })
        }


    }

    innerOpenTab(id: string, prefix: string, eventKey?: string, callback?: () => void) {
        openItem(this._id!,this.mRefDiv.current!, id, prefix, callback)
        if (this.props.onSelect) {
            this.props.onSelect(eventKey, id)
        }
    }


    render() {
        this.innerRender()
        return (

            <div ref={this.mRefDiv} className={this.props.className} style={this.props.style} id={this.props.id}>

                <div className="bsr-tab">
                    <div className={'bottom_band_left'}/>
                    {

                        this.list!.map((item, index) => {
                            let style = {
                                display: "block",
                                minWidth: item.width
                            }
                            let eclass = 'tab-link'
                            if (item.select) {
                                eclass = 'tab-link active'
                            }
                            return <button data-parent-tabs={this._id} style={style} key={index} className={eclass} id={PREFIX + item.id}
                                           onClick={() => {
                                               this.innerOpenTab(item.id!, PREFIX, item.eventKey)
                                           }}>{item.icon ? getButtonContent(item.icon, item.title) : item.title}</button>
                        })
                    }
                    <div className={'bottom_band_right'}/>
                </div>
                {
                    this.list!.map(item => {

                        if (item.select) {
                            return <div data-parent-tabs={this._id} key={item.id} id={item.id}
                                        className="bsr-tab-content active" style={{display: "block"}}>
                                {item.children}
                            </div>
                        } else {
                            return <div data-parent-tabs={this._id}  key={item.id} id={item.id}
                                        className="bsr-tab-content">
                                {item.children}
                            </div>
                        }
                    })
                }
            </div>

        );
    }
}
