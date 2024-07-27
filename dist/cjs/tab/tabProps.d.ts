import React, { ReactElement } from "react";
import { Tabs } from "./Tabs";
export type TabProps = {
    children: React.ReactNode;
    onSelect?: (eventKey?: string, id?: string) => void;
};
export type ItemTabProps = {
    eventKey?: string;
    title?: string | ReactElement;
    icon?: ReactElement;
    select?: boolean;
    children: React.ReactNode;
    id?: string;
    _tabs?: Tabs;
    width?: number;
};
