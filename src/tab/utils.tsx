import React, {ReactElement} from "react";


export function openItem(id: string,prefix:string,callback?:()=>void) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent =document.querySelectorAll('[data-content-prefix="'+prefix+'"]'); //document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        (tabcontent[i] as HTMLDivElement).style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll('[data-button-prefix="'+prefix+'"]');//document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    const doc = document.getElementById(id);
    doc!.style.display = "block";
    doc!.className += " active"
    const docBt = document.getElementById(prefix+id);
    docBt!.className += " active"
    if(callback) callback();


}
export function getButtonContent(icon:any,name?: string|ReactElement) {
    return(
        <div className={'tab-button-image'}>
            <div className={'tab-button-image-left'}>{icon}</div>
            <div className={'tab-button-image-right'}>{name}</div>
        </div>
    )
}
export function setShow(id:string,prefix:string,value:boolean){
    const doc = document.getElementById(id);

    const docBt = document.getElementById(prefix+id);

    if(value){

        doc!.style.visibility = "visible";
        docBt!.style.display="block"
    }else{
        doc!.style.visibility = "hidden";
        docBt!.style.display="none"
    }

}

export function setDisabled(id:string,prefix:string,value:boolean){

    const docBt = document.getElementById(prefix+id);
    (docBt as HTMLButtonElement).disabled = value

}
