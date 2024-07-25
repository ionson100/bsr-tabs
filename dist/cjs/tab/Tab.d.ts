import React, { Component } from "react";
import { ItemTabProps } from "./tabProps";
export declare class Tab extends Component<ItemTabProps, any> {
    constructor({ props }: {
        props: Readonly<ItemTabProps>;
    });
    SelectTab(): void;
    SetShow(value: boolean): void;
    SetDisabled(value: boolean): void;
    render(): React.JSX.Element[] | null | undefined;
}
