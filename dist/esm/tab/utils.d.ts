import React, { ReactElement } from "react";
export declare const PREFIX = "bt-";
export declare function openItem(idParent: string, div: HTMLDivElement, id: string, prefix: string, callback?: () => void): void;
export declare function getButtonContent(icon: any, name?: string | ReactElement): React.JSX.Element;
export declare function setShow(id: string, prefix: string, value: boolean, callback?: () => void): void;
export declare function setDisabled(id: string, prefix: string, value: boolean, callback?: () => void): void;
