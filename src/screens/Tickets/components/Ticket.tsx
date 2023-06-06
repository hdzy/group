import styles from '../Tickets.module.css';
import {Theme} from "./Theme";
import {IoIosArrowDown} from "react-icons/io";
import {useState} from "react";

type Ticket = {
    title: string;
    info: string;
    themes: string[];
    createdAt: string;
    term: string;
    createdBy: string;
}
export const Ticket = ({title, info, themes, term, createdAt, createdBy}:Ticket) => {

    const [isActive, setActive] = useState<boolean>(false);


    return (
        <div
            className={styles.ticketFullContainer}
            style={{height: isActive ? 300 : 50}}
            onClick={() => setActive(!isActive)}
        >
            <div className={styles.ticketContainer}>
            <div className={styles.ticketColumnLeft}>
                <h2 className={styles.title}>{title}</h2>
                <h3 className={styles.term} >{term}</h3>
            </div>
            <IoIosArrowDown
                className={styles.openIcon}
                style={{transform: `rotate(${isActive ? 180 : 360}deg)`,
                        transition: 'transform 0.7s ease-in-out'
            }}/>
        </div>
        </div>
    );
};