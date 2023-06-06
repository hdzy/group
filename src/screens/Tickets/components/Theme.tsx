import styles from "../Tickets.module.css";

export const Theme = ({theme}: {theme: string}) => {
    return (
        <p className={styles.themeEl}>
            {theme}
        </p>
    );
};