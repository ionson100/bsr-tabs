import React, { ReactElement, Component } from 'react';

type TabProps = {
    children: React.ReactNode;
    buttonPrefix?: string;
    onSelect?: (eventKey?: string, id?: string) => void;
};
type ItemTabProps = {
    eventKey?: string;
    title?: string | ReactElement;
    icon?: ReactElement;
    isOpen?: boolean;
    children: React.ReactNode;
    id?: string;
    _prefix?: string;
    width?: number;
};

declare class Tab extends Component<ItemTabProps, any> {
    constructor({ props }: {
        props: Readonly<ItemTabProps>;
    });
    OpenItem(): void;
    SetShow(value: boolean): void;
    SetDisabled(value: boolean): void;
    render(): React.JSX.Element[] | null | undefined;
}

declare class Tabs extends Component<TabProps, any> {
    private list;
    constructor({ props }: {
        props: Readonly<TabProps>;
    });
    innerRender(): void;
    innerOpenTab(id: string, prefix: string, eventKey?: string): void;
    render(): React.JSX.Element;
}

export { type ItemTabProps, Tab, type TabProps, Tabs };
