import { useState } from "react";
import styles from "./Nav.module.css";

export const Nav = () => {
  const [active, setActive] = useState("");

  const handleNavClick = (item) => {
    setActive(item);
  };

  return (
    <div className={styles.container}>
      {["Home", "Produtos", "Categorias", "Meus Pedidos"].map((item) => (
        <h2
          key={item}
          className={`${styles.navText} ${
            active === item ? styles.active : ""
          }`}
          onClick={() => handleNavClick(item)}
        >
          {item}
        </h2>
      ))}
    </div>
  );
};
