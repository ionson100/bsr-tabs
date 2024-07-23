import React, {Children, Component} from "react";
import {v4 as uuidv4} from 'uuid';
import {ItemTabProps, TabProps} from "./tabProps";
import {getButtonContent, openItem} from "./utils";


const PREFIX='bt-'

export class Tabs extends Component<TabProps, any> {


    private list: Array<ItemTabProps> = [];

    constructor({props}: { props: Readonly<TabProps> }) {
        super(props);

    }

    innerRender() {

        Children.map(this.props.children, (d) => {

            let id=(d as any).props.id
            if(!id){
                id=uuidv4()
            }


            this.list.push({
                icon: (d as any).props.icon,
                title: (d as any).props.title,
                isOpen: (d as any).props.isOpen,
                id: id,
                eventKey:(d as any).props.eventKey,
                children: React.cloneElement(d as React.ReactElement<any>, {
                    id:id,
                    _prefix:this.props.buttonPrefix??PREFIX
                })
            })

        })

    }
    innerOpenTab(id:string,prefix:string,eventKey?:string){
        openItem(id,prefix)
        if(this.props.onSelect){
            this.props.onSelect(eventKey,id)
        }
    }



    render() {
        this.innerRender()
        return (

            <>

                <div className="bsr-tab">
                    <div className={'bottom_band_left'}/>
                    {

                        this.list.map((item,index) => {
                            const prefix=this.props.buttonPrefix??PREFIX;
                            if(item.isOpen){
                                return <button style={{display:"block"}} data-button-prefix={prefix} key={index} className="tablinks active" id={prefix+item.id} onClick={() => {
                                    this.innerOpenTab(item.id!,prefix,item.eventKey)
                                }}>{item.icon?getButtonContent(item.icon,item.title):item.title}</button>
                            }else{
                                return <button  style={{display:"block"}}  data-button-prefix={prefix} key={index} className="tablinks" id={prefix+item.id} onClick={() => {
                                    this.innerOpenTab(item.id!,prefix,item.eventKey)
                                }}>{item.icon?getButtonContent(item.icon,item.title):item.title}</button>
                            }

                        })
                    }
                    <div className={'bottom_band_right'}/>


                </div>
                {
                    this.list.map(item => {
                        const prefix=this.props.buttonPrefix??PREFIX;
                        if (item.isOpen) {
                            return <div data-content-prefix={prefix} key={item.id} id={item.id} className="bsr-tab-content active" style={{display:"block"}}>
                                {item.children}
                            </div>
                        } else {
                            return <div data-content-prefix={prefix} key={item.id} id={item.id} className="bsr-tab-content">
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

            </>

        );
    }
}
