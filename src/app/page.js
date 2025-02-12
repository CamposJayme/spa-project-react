import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.home_banner}>
        <div className={styles.home_container}>
          <h1>Sorvete Artesanal</h1>
        </div>
      </section>
    </main>
  );
}
