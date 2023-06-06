import styles from "./Header.module.css";
import {HeaderInfo} from "./components/HeaderInfo";
import {useEffect, useState} from "react";
import {HeaderHelp} from "./components/HeaderHelp";


export const Header = () => {
    const [pageName, setPageName] = useState<string>("Главная");
    const [date, setDate] = useState<string>("Понедельник 20 Сентября, 2022")
    function setCurrentDate() {
        const currentDate: Date= new Date();
        setDate(`
        ${['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'][currentDate.getDay()]}
        ${currentDate.getDate()} 
        ${['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'][currentDate.getMonth()]}, ${currentDate.getFullYear()} 
        `);
    }

    useEffect(() => {
        setCurrentDate();
        console.log('effect');
        }
        , []);

    return (
        <div className={styles.container}>
            <HeaderInfo date={date} pageName={pageName}/>
            <HeaderHelp/>
        </div>
    );
};