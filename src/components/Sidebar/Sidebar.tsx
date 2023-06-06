import styles from './Sidebar.module.css';
import React, {useState} from "react";
import {SidebarComponent} from "./components/SidebarComponent";
import {RxDashboard, RxDrawingPin, RxFileText} from "react-icons/rx";
import {FaUserFriends} from "react-icons/fa";
import {BsBox2} from "react-icons/bs";
import {IoNotificationsOutline, IoSettingsOutline} from "react-icons/io5";
import {BiArrowFromRight} from "react-icons/bi";

type SidebarComponent = {
    to: string;
    children: React.ReactElement;
    text: string;
}

export const Sidebar = () => {

    const [menuState, setMenuState] = useState<boolean>(true);

    function changeMenuState() {
        setMenuState(!menuState);
    }

    const sidebarContent:SidebarComponent[] = [
        {
            to: '/',
            children: <RxDashboard/>,
            text: 'Главная',
        },
        {
            to: '/study',
            children: <RxDrawingPin/>,
            text: 'Учеба',
        },
        {
            to: '/tickets',
            children: <RxFileText/>,
            text: 'Билеты',
        },
        {
            to: '/friends',
            children: <FaUserFriends/>,
            text: 'Одногруппники',
        },
        {
            to: '/posts',
            children: <BsBox2/>,
            text: 'Публикации',
        },
    ]

    return (
        <div className={styles.container} style={{width: !menuState ? 108 : 366}}>
        <div className={styles.body} style={{width: !menuState ? 108 : 300}}>
            <BiArrowFromRight
                style={{color: "rgba(0, 74, 63, 1)"}}
                className={menuState ? styles.hideMenu : styles.showMenu}
                onClick={changeMenuState}
            />
            <nav className={styles.menu}>
                {
                    sidebarContent.map((e, index) =>
                    {
                        return <SidebarComponent to={e.to} children={e.children} key={index} text={e.text} isOpen={menuState}/>
                    })
                }
            </nav>
            <div className={styles.userPanel}>
                <button className={styles.addButton}>+</button>
                <SidebarComponent to={'/'} isOpen={menuState}>
                    <IoNotificationsOutline/>
                </SidebarComponent>
                <SidebarComponent to={'/'} isOpen={menuState}>
                    <IoSettingsOutline/>
                </SidebarComponent>
                <div className={styles.TEMPuser}>
                </div>
            </div>
        </div>
        </div>
    );
};