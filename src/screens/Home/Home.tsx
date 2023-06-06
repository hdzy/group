import { Card } from "../../components/Card/Card";
import { AiOutlineFire } from "react-icons/ai";
import styles from "./Home.module.css";
import { GiNewShoot } from "react-icons/gi";
import {BiNews} from "react-icons/bi";
import React from "react";
import {TbGrave} from "react-icons/tb";

export const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardsContainer}>
                <Card
                    icon={<AiOutlineFire color={'#de5632'}/>}
                    title={'Ближайший дедлайн'}
                    description={'5 дней'}
                    graphDescription={'Теория Вероятности'}
                    graphValueStart={95}
                    graphValueEnd={100}
                    graphColor={'#ff1e1e'}
                />
                <Card
                    icon={<GiNewShoot color={'#1a570a'}/>}
                    title={'Последняя публикация'}
                    description={'Test Value'}
                    graphDescription={'Test Name'}
                    graphValueStart={15}
                    graphValueEnd={100}
                    graphColor={'#7dbe72'}
                />
                <Card
                    icon={<BiNews color={'#000000'}/>}
                    title={'Последний оффтоп'}
                    description={'Хан чмо'}
                    graphDescription={'joji'}
                    graphValueStart={60}
                    graphValueEnd={100}
                    graphColor={'#1c5ba2'}
                />
                <Card
                    icon={<TbGrave color={'#000000'}/>}
                    title={'До сессии'}
                    description={'25 дней'}
                    graphDescription={'Английский язык'}
                    graphValueStart={15}
                    graphValueEnd={100}
                    graphColor={'#bd1a96'}
                />
            </div>
        </div>
    );
};