import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/pageRoutes';
import styles from './NotFoundScreen.module.css';

export function NotFoundScreen() {
  return (
    <div className={`page page--gray ${styles.pageContainer}`}>
      <main className="page__main page__main--index page__main--index-empty">
        <div className="container">
          <section className={styles.wrapper}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.text}>Page not found</p>
            <Link to={AppRoute.Main} className={styles.link}>
              Return to Home
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
