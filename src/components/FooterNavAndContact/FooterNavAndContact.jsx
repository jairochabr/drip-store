import styles from "./FooterNavAndContact.module.css";

export const FooterNavAndContact = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Informação</h1>
        <a href="#" className={styles.link}>Segurança</a>
        <a href="#" className={styles.link}>Wishlist</a>
        <a href="#" className={styles.link}>Blog</a>
        <a href="#" className={styles.link}>Trabalhe conosco</a>
        <a href="#" className={styles.link}>Meus Pedidos</a>
      </div>
      <div>
        <h1 className={styles.title}>Categorias</h1>
        <a href="#" className={styles.link}>Categorias</a>
        <a href="#" className={styles.link}>Calças</a>
        <a href="#" className={styles.link}>Bonés</a>
        <a href="#" className={styles.link}>Headphones</a>
        <a href="#" className={styles.link}>Tênis</a>
      </div>
      <div>
        <h1 className={styles.title}>Contato</h1>
        <h2 className={`${styles.contact} ${styles.contactFirst}`}>
          Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
        </h2>
        <h2 className={styles.contact}>(85) 3051-3411</h2>
      </div>
    </div>
  );
};
