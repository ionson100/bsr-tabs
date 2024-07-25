import React, {Children, Component} from "react";

import {ItemTabProps} from "./tabProps";
import {openItem, setDisabled, setShow} from "./utils";

export class Tab extends Component<ItemTabProps, any> {


    constructor({props}: { props: Readonly<ItemTabProps> }) {
        super(props);


    }

    public SelectTab() {

        openItem(this.props.id!, this.props._prefix!)
    }
    public SetShow(value:boolean){
        setShow(this.props.id!, this.props._prefix!,value)
    }

    public SetDisabled(value:boolean){
        setDisabled(this.props.id!, this.props._prefix!,value)
    }


    render() {
        return (
            Children.map(this.props.children, child =>
                <div className="Row" data-prefix={this.props._prefix}>
                    {child}
                </div>
            )
        );
    }
}
