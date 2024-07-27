import React, { Component } from "react";
import { ItemTabProps } from "./tabProps";
export declare class Tab extends Component<ItemTabProps, any> {
    constructor({ props }: {
        props: Readonly<ItemTabProps>;
    });
    SelectTab(callback?: () => void): void;
    SetShow(value: boolean, callback?: () => void): void;
    SetDisabled(value: boolean, callback?: () => void): void;
    render(): React.JSX.Element[] | null | undefined;
}
