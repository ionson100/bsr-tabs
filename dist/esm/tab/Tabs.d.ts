import React, { Component } from "react";
import { TabProps } from "./tabProps";
export declare class Tabs extends Component<TabProps, any> {
    private list;
    _id?: string;
    private readonly mRefDiv;
    constructor({ props }: {
        props: Readonly<TabProps>;
    });
    SetVisibilitiesTabById(id: string, value: boolean, callback?: () => void): void;
    SetDisabledTabById(id: string, value: boolean, callback?: () => void): void;
    SelectTabById(id: string, callback?: () => void): void;
    innerRender(): void;
    innerOpenTab(id: string, prefix: string, eventKey?: string, callback?: () => void): void;
    render(): React.JSX.Element;
}
