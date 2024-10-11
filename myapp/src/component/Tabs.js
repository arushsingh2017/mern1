import React, { useState, useEffect } from 'react'

export default function Tabs({ tab }) {
    const [openTab, setOpenTab] = useState(["tab1"]);
    useEffect(() => {
        gettabdata();
    }, [])

    const gettabdata = async () => {
        let tabitem = await fetch('http://localhost:4400/tablist');
        tabitem = await tabitem.json();
        setOpenTab(tabitem);

    }

    return (
        <div>
            <h4>Tabs Data list</h4>
            {
                openTab.map((item, i) => {
                    return (<li>
                        <a href={item.name} onClick={()=>setOpenTab(item.name)}>
                            {item.name}
                        </a>x
                    </li>)
                })
            }

            {/* {
                tab.map((tabItem, index) => {
                    return (<li>
                        <a href={tabItem.link} onClick={() => setOpenTab(tabItem.name)}> {tabItem.name}</a>
                    </li>)
                })
            } */}
            <h3>Content</h3>
            {
                openTab.map((items) => {
                    return (<div className={openTab.name=== openTab ? "d-block" : "d-none"}>
                        {items.content}</div>)
                })
            }
            {/* {tab.map((tab) => (
                <div
                    key={tab.name}
                    className={
                        tab.name === openTab ? "d-block" : "d-none"
                    }
                >
                    {tab.content}
                </div>
            ))} */}
        </div>
    )
}
