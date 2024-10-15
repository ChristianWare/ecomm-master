import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <LayoutWrapper>
        <h1>My Ecomm Masterclass</h1>
      </LayoutWrapper>
    </div>
  );
}
