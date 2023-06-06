import styles from "./Card.module.css";
import React from "react";

interface CardProps {
    title: string;
    icon: React.ReactElement;
    description: string;
    graphDescription: string;
    graphValueStart: number;
    graphValueEnd: number;
    graphColor: string;

}
export const Card: React.FC<CardProps> = ({title, icon, description, graphDescription, graphValueStart, graphValueEnd, graphColor}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.icon}>
                {icon}
            </div>
            <p className={styles.description}>{description}</p>
            <p className={styles.graphDescription}>{graphDescription}</p>
            <div className={styles.graphContainer}>
                <p className={styles.graphStart}>{0}</p>
                <p className={styles.graphEnd}>{graphValueEnd}</p>
                <div className={styles.graphValue} style={{
                        width: graphValueStart / graphValueEnd * 289,
                        backgroundColor: graphColor
                    }}>
                </div>
            </div>
        </div>
    );
};