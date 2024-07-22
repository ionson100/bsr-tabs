import React, {useRef} from 'react';
import { FiArrowLeftCircle } from "react-icons/fi";
import './App.css';
import {Tabs} from "./tab/Tabs";
import {Tab} from "./tab/Tab";
import "../src/tab/index.css"

function App() {
    const mRefItem=useRef<InstanceType< typeof Tab>>(null)
    const mRefItem2=useRef<InstanceType< typeof Tab>>(null)
    const mRefItem3=useRef<InstanceType< typeof Tab>>(null)
    return (
        <>
            <div style={{width: 500}}>
                <Tabs buttonPrefix={'bb-45-'} onSelect={(id,key)=>{
                    console.log(id+"*********"+key)
                }}>
                    <Tab
                        eventKey={"tab1"}
                        id={'sdsdsd'}
                        title={"tab1"}
                        isOpen={true}
                        icon={<FiArrowLeftCircle size={20}/>}>
                        <div>Tab1</div>
                    </Tab>
                    <Tab
                        eventKey={'tab2'}
                        id={"sd43434"}
                        ref={mRefItem} title={"tab2"}>
                        <div>Tab2</div>
                    </Tab>
                </Tabs>
                <br/>
                <button onClick={() => {
                    mRefItem.current!.OpenItem()
                }}>open
                </button>

            </div>
            <div style={{width: 500, paddingTop: 20}}>
                <Tabs buttonPrefix={'bb-'} onSelect={(id, key) => {
                    console.log(id + "*********" + key)
                }}>
                    <Tab eventKey={'simple'} title={<div>Simple</div>} isOpen={true}
                         icon={<FiArrowLeftCircle size={20}/>}>
                        <div>Tab3</div>
                    </Tab>
                    <Tab eventKey={'tab4'} ref={mRefItem2} title={"tab4"}>
                        <div><p>Возможно, Ленин использовал фразу А. П. Чехова из произведения
                            «Моя жизнь (рассказ провинциала)» гл. VI, первая публикация которого
                            была в приложении к «Ниве» в 1896 г.</p>
                            <blockquote>
                                Учиться нам нужно, учиться и учиться, а с глубокими
                                общественными течениями погодим: мы ещё не доросли
                                до них и, по совести, ничего в них не понимаем.
                            </blockquote>
                        </div>
                    </Tab>
                    <Tab ref={mRefItem3} eventKey={'icon'} icon={<FiArrowLeftCircle size={20}/>}>
                        <div>Tab44</div>
                    </Tab>
                </Tabs>
                <br/>
                <button onClick={() => {
                    mRefItem2.current!.OpenItem()
                }}>open
                </button>

                <button onClick={() => {
                    mRefItem3.current!.SetShow(true)
                }}>show
                </button>
                <button onClick={() => {
                    mRefItem3.current!.SetShow(false)
                }}>notShow
                </button>

                <button onClick={() => {
                    mRefItem3.current!.SetDisabled(true)
                }}>disabled
                </button>

                <button onClick={() => {
                    mRefItem3.current!.SetDisabled(false)
                }}>disabled
                </button>

            </div>
        </>


    );
}

export default App;
