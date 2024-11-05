import { HeaderShoppingCart } from "../HeaderShoppingCart/HeaderShoppingCart"
import { HeaderSearchInput } from "../HeaderSearchInput/HeaderSearchInput"

import styles from "./Header.module.css"

import iconmenu from "../../assets/Icons/Menu.svg"
import logo from "../../assets/HomeFotos/LogoDg.png"

import { Nav } from "../Nav/Nav"

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.menu}>
          <img src={iconmenu} alt="Menu"/>
        </div>
        <div style={{ cursor: "pointer" }}>
          <img src={logo} alt="Logo"className={styles.imgLogo}/>
          <span className={styles.title}>Digital Store</span>
        </div>
        <div className={styles.containerSearchAndRegister}>
          <HeaderSearchInput />
          <a href="#" className={styles.linkRegister}>Cadastre-se</a>
          <button type="submit" className={styles.buttonLogin}>Entrar</button>
        </div>
        <HeaderShoppingCart notificationCount={Math.floor(Math.random() * 4)} />
      </div>
      <Nav />
    </div>
  );
};
