import React, { ReactElement } from "react";
export type TabProps = {
    children: React.ReactNode;
    buttonPrefix?: string;
    onSelect?: (eventKey?: string, id?: string) => void;
};
export type ItemTabProps = {
    eventKey?: string;
    title?: string | ReactElement;
    icon?: ReactElement;
    isOpen?: boolean;
    children: React.ReactNode;
    id?: string;
    _prefix?: string;
    width?: number;
};
