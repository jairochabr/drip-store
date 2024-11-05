import styles from "./FooterMainInformations.module.css";

import imglogo from "../../assets/HomeFotos/logowhite.png";

import icon1 from "../../assets/Icons/iconfacebook.png";
import icon2 from "../../assets/Icons/iconisntagram.png";
import icon3 from "../../assets/Icons/icontwitter.png";

export const FooterMainInformations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <img src={imglogo} alt="Logo" className={styles.img} />
        <h1 className={styles.title}>Digital Store</h1>
      </div>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </p>
      <div className={styles.listicons}>
        <img src={icon1} alt="facebook" />
        <img src={icon2} alt="instagram" />
        <img src={icon3} alt="twitter" />
      </div>
    </div>
  );
};
