import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Главная
      </NavLink>

      <NavLink
        to="/authors"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Авторы
      </NavLink>

      <NavLink
        to="/books"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Книги
      </NavLink>
      <NavLink
      to="/filtration"
      className={styles.link}
      activeClassName={styles.activeLink}
      >
        Фильтрация
      

      </ NavLink>
      <NavLink
      to="/create"
      className={styles.link}
      activeClassName={styles.activeLink}
      >
        Создать книгу
      </NavLink>
    </nav>
  );
}
