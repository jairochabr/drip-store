import styles from "./Footer.module.css";

import { FooterMainInformations } from "../FooterMainInformations/FooterMainInformations";
import { FooterNavAndContact } from "../FooterNavAndContact/FooterNavAndContact";
import { FooterCopyright } from "../FooterCopyright/FooterCopyright";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containercontent}>
        <div className={styles.containerinformations}>
          <FooterMainInformations />
          <FooterNavAndContact />
        </div>
        <FooterCopyright />
      </div>
    </div>
  );
};
