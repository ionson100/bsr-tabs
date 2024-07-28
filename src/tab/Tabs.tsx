import React, {Children, Component} from "react";
import {v4 as uuidv4} from 'uuid';
import {ItemTabProps, TabProps} from "./tabProps";
import {getButtonContent, openItem, PREFIX, setDisabled, setShow} from "./utils";


export class Tabs extends Component<TabProps, any> {


    private list?: Array<ItemTabProps>;
    private _id?:string;

    private readonly mRefDiv: React.RefObject<HTMLDivElement>;

    constructor({props}: { props: Readonly<TabProps> }) {
        super(props);
        this.mRefDiv = React.createRef()
        this.list = [];
        this._id = uuidv4();

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
            Children.map(this.props.children, (d) => {

                const marker=(d as any).props._tabs
                if(marker&&marker._tabs._id!=this._id){
                    let id = (d as any).props.id
                    if (!id) {
                        id = uuidv4()
                    }

                    this.list!.push({
                        width: (d as any).props.width,
                        icon: (d as any).props.icon,
                        title: (d as any).props.title,
                        select: (d as any).props.select,
                        id: id,
                        eventKey: (d as any).props.eventKey,
                        children: React.cloneElement(d as React.ReactElement<any>, {
                            id: id,
                            _tabs: this,
                        })
                    })
                }else {
                    d=null;
                }



            })
        }


    }

    innerOpenTab(id: string, prefix: string, eventKey?: string, callback?: () => void) {
        openItem(this.mRefDiv.current!, id, prefix, callback)
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
                            return <button style={style} key={index} className={eclass} id={PREFIX + item.id}
                                           onClick={() => {
                                               this.innerOpenTab(item.id!, PREFIX, item.eventKey)
                                           }}>{item.icon ? getButtonContent(item.icon, item.title) : item.title}</button>
                        })
                    }
                    <div className={'bottom_band_right'}/>
                </div>
                {
                    this.list!.map(item => {
                        const prefix = PREFIX;
                        if (item.select) {
                            return <div data-content-prefix={prefix} key={item.id} id={item.id}
                                        className="bsr-tab-content active" style={{display: "block"}}>
                                {item.children}
                            </div>
                        } else {
                            return <div data-content-prefix={prefix} key={item.id} id={item.id}
                                        className="bsr-tab-content">
                                {item.children}
                            </div>
                        }
                    })
                }


                {/*{*/}
                {/*    Children.map(this.props.children, child =>*/}
                {/*        <div className="Row">*/}
                {/*            {child}*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*}*/}

            </div>

        );
    }
}
