import styles from './HeaderSearchInput.module.css';
import { CiSearch } from "react-icons/ci";

export const HeaderSearchInput = () => {

  return (
    <div className={styles.container}>
        <input
          type="text"
          placeholder="Pesquisar produto..."
          className={styles.searchInput}
        />
        <button
          className={styles.searchButton}
        >
        </button>
        <div className={styles.searchIcon}>
          <CiSearch color={"var(--dark-gray-3)"} fontSize={20}/>
        </div>
    </div>
  );
};