import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import { useState } from 'react';

const Tab = () => {
    const [activetab, setActivetab] = useState("");

    const handleTabs = (numTab) => {
        if (activetab !== numTab) {
            setActivetab(numTab)
        }
    }
    return (
        <>
            <Nav tabs>
                <NavItem>
                    <NavLink className={(activetab === "1" ? "activetab baseTab" : "baseTab")} onClick={() => handleTabs("1")}>
                        Tab 1
                    </NavLink>
                </NavItem>

                <NavItem >
                    <NavLink className={(activetab === "2" ? "activetab baseTab" : "baseTab")} onClick={() => handleTabs("2")}>
                        Tab 2
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(activetab === "3" ? "activetab baseTab" : "baseTab")} onClick={() => handleTabs("3")}>
                        Tab 3
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activetab}>
                <TabPane tabId="1">
                    <div>
                        <br />
                        <h1>Tab 1 content is showing here</h1>
                    </div>
                </TabPane>

                <TabPane tabId="2">
                    <div>
                        <br />
                        <h1>Tab 2 content is showing here</h1>
                    </div>
                </TabPane>

                <TabPane tabId="3">
                    <div>
                        <br />
                        <h1>Tab 3 content is showing here</h1>
                    </div>
                </TabPane>
            </TabContent>
        </>
    )
}

export default Tab
