import React, { Component, ReactElement } from 'react';

declare class Tabs extends Component<TabProps, any> {
    private list;
    private readonly mRefDiv;
    constructor({ props }: {
        props: Readonly<TabProps>;
    });
    SetShowTabById(id: string, value: boolean, callback?: () => void): void;
    SetDisabledTabById(id: string, value: boolean, callback?: () => void): void;
    SelectTabById(id: string, callback?: () => void): void;
    innerRender(): void;
    innerOpenTab(id: string, prefix: string, eventKey?: string, callback?: () => void): void;
    render(): React.JSX.Element;
}

type TabProps = {
    children: React.ReactNode;
    onSelect?: (eventKey?: string, id?: string) => void;
};
type ItemTabProps = {
    eventKey?: string;
    title?: string | ReactElement;
    icon?: ReactElement;
    select?: boolean;
    children: React.ReactNode;
    id?: string;
    _tabs?: Tabs;
    width?: number;
};

declare class Tab extends Component<ItemTabProps, any> {
    constructor({ props }: {
        props: Readonly<ItemTabProps>;
    });
    SelectTab(callback?: () => void): void;
    SetShow(value: boolean, callback?: () => void): void;
    SetDisabled(value: boolean, callback?: () => void): void;
    render(): React.JSX.Element[] | null | undefined;
}

export { type ItemTabProps, Tab, type TabProps, Tabs };
