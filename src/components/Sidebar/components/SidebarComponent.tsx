import React, {FC} from "react";
import styles from "../Sidebar.module.css";
import {NavLink} from "react-router-dom";

interface Props {
    to: string;
    children: React.ReactNode;
    text?: string;
    isOpen: boolean;
}
export const SidebarComponent: React.FC<Props> = ({to, children, text, isOpen}) => {
    return (
        <div className={styles.navContainer}>
            <NavLink to={to} style={{color: "rgba(0, 74, 63, 1)"}} className={styles.icon}>
                {children}
            </NavLink>
            <NavLink to={to} className={styles.navText}>{isOpen ? text : ""}</NavLink>
        </div>
    );
};