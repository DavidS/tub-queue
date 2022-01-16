import type { NextPage } from "next";
import styles from "../styles/Layout.module.css";

const Layout: NextPage = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
