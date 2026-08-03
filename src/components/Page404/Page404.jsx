import styles from "./Page404.module.css";

const Page404 = () => {
    return (
        <div className={styles.page404}>
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <p>Lo sentimos, la página que buscas no existe.</p>
        </div>
    );
};

export default Page404;
