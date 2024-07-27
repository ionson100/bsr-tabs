import React, {ReactElement} from "react";

export const PREFIX = 'bt-'

export function openItem(div: HTMLDivElement, id: string, prefix: string, callback?: () => void) {

    let i;
    const tabcontent = div.getElementsByClassName("bsr-tab-content");
    for (i = 0; i < tabcontent.length; i++) {

        (tabcontent[i] as HTMLDivElement).style.display = "none";
    }
    const tablinks = div.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    for (i = 0; i < tabcontent.length; i++) {
        if (tabcontent[i].id === id) {
            (tabcontent[i] as HTMLElement).style.display = "block";
            (tabcontent[i] as HTMLElement).className += " active"
        }
    }
    for (i = 0; i < tablinks.length; i++) {
        if (tablinks[i].id === (prefix + id)) {
            (tablinks[i] as HTMLElement).className += " active"
        }
    }

    if (callback) callback();


}

export function getButtonContent(icon: any, name?: string | ReactElement) {
    return (
        <div className={'tab-button-image'}>
            <div className={'tab-button-image-left'}>{icon}</div>
            <div className={'tab-button-image-right'}>{name}</div>
        </div>
    )
}

export function setShow(id: string, prefix: string, value: boolean, callback?: () => void) {
    const doc = document.getElementById(id);

    const docBt = document.getElementById(prefix + id);

    if (value) {

        doc!.style.visibility = "visible";
        docBt!.style.display = "block"
    } else {
        doc!.style.visibility = "hidden";
        docBt!.style.display = "none"
    }
    if (callback) {
        callback()
    }

}

export function setDisabled(id: string, prefix: string, value: boolean, callback?: () => void) {

    const docBt = document.getElementById(prefix + id);
    (docBt as HTMLButtonElement).disabled = value
    if (callback) {
        callback()
    }


}
