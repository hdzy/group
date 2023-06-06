import styles from "../Header.module.css";

type Props = {
    pageName: string,
    date: string,
};
export const HeaderInfo = ({pageName, date}: Props) => {
    return (
        <div className={styles.infoContainer}>
            <h1 className={styles.pageName}>{pageName}</h1>
            <h2 className={styles.date}>{date}</h2>
        </div>
    );
};