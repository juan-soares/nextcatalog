import styles from "@/app/home.module.css";
import { getAllRecords } from "./_lib/db/records";

export default async function Home() {
  const records = await getAllRecords();

  return <div className={styles.home}></div>;
}
