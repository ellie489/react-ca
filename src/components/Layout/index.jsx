import React from 'react';
import Footer from "../Footer";
import Header from "../Header";
import styles from "./index.module.css";

const Layout = ({ children }) => {
    return (
        <div className={styles.pageWrapper}>
            <Header />
            <main className={styles.pageBody}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
