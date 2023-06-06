import styles from '../Header.module.css';
import React from "react";
import {FiHelpCircle} from "react-icons/fi";
import {GoSearch} from "react-icons/go";

export const HeaderHelp = () => {
    return (
        <div className={styles.headerHelpContainer}>
            <div className={styles.inputContainer}>
                <input className={styles.headerSearch} placeholder={'Поиск'}></input>
                <GoSearch className={styles.headerSearchButton} color={'#1f493e'}/>
            </div>
            <button className={styles.headerHelp}>
                <FiHelpCircle color={'#1f493e'}/>
            </button>
        </div>
    );
};