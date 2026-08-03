import styles from "./Page404.module.css";

const Page404 = () => {
    return (
        <div className={styles.page404}>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img 
                        src="./404page.svg" 
                        alt="Página no encontrada" 
                        className={styles.image}
                    />
                </div>
                <h1 className={styles.title}>404</h1>
                <h2 className={styles.subtitle}>Página no encontrada</h2>
                <p className={styles.description}>
                    Lo sentimos, la página que buscas no existe o ha sido movida.
                </p>
            </div>
        </div>
    );
};

export default Page404;