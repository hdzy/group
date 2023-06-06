import styles from './Tickets.module.css';
import {Ticket} from "./components/Ticket";

export const Tickets = () => {
    return (
        <div className={styles.ticketsContainer}>
            <Ticket title={'Теория вероятности'} createdAt={'23.05.2021'} createdBy={'hdzylovesyou'} info={'test value test value test value test value test value test value test value test value test value'} term={'2 семестр'} themes={['тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'последняя']}/>
            <Ticket title={'Теория вероятности'} createdAt={'23.05.2021'} createdBy={'hdzylovesyou'} info={'test value test value test value test value test value test value test value test value test value'} term={'2 семестр'} themes={['тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'последняя']}/>
            <Ticket title={'Теория вероятности'} createdAt={'23.05.2021'} createdBy={'hdzylovesyou'} info={'test value test value test value test value test value test value test value test value test value'} term={'2 семестр'} themes={['тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'последняя']}/>
            <Ticket title={'Теория вероятности'} createdAt={'23.05.2021'} createdBy={'hdzylovesyou'} info={'test value test value test value test value test value test value test value test value test value'} term={'2 семестр'} themes={['тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'последняя']}/>
            <Ticket title={'Теория вероятности'} createdAt={'23.05.2021'} createdBy={'hdzylovesyou'} info={'test value test value test value test value test value test value test value test value test value'} term={'2 семестр'} themes={['тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'тестовая тема', 'последняя']}/>
        </div>
    );
};