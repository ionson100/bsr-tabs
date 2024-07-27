import React, {Children, Component} from "react";

import {ItemTabProps} from "./tabProps";
import {setDisabled, setShow,PREFIX} from "./utils";

export class Tab extends Component<ItemTabProps, any> {


    constructor({props}: { props: Readonly<ItemTabProps> }) {
        super(props);


    }

    public SelectTab(callback?:()=>void) {
        this.props._tabs?.innerOpenTab(this.props.id!,PREFIX,this.props.eventKey,callback)
    }

    public SetShow(value:boolean,callback?:()=>void) {
        setShow(this.props.id!, PREFIX,value,callback)
    }

    public SetDisabled(value:boolean,callback?:()=>void) {
        setDisabled(this.props.id!, PREFIX,value,callback)
    }


    render() {
        return (
            Children.map(this.props.children, child =>
                <>
                    {child}
                </>
            )
        );
    }
}
