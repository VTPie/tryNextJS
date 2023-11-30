"use client";

import Image from "next/image";
import styles from "../page.module.css";
import logo from "../../../public/next.svg";

const CsvPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src={logo}
            alt="Next.js Logo"
            width={180}
            height={37}
          />
        </div>
      </main>
    </div>
  );
};
export default CsvPage;
