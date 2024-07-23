import React, { Component } from "react";
import { TabProps } from "./tabProps";
export declare class Tabs extends Component<TabProps, any> {
    private list;
    constructor({ props }: {
        props: Readonly<TabProps>;
    });
    innerRender(): void;
    innerOpenTab(id: string, prefix: string, eventKey?: string): void;
    render(): React.JSX.Element;
}
