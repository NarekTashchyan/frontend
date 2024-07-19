import styles from "./page.module.css";
import { getAllLecturers } from "./lib/api";
export default function Home() {
  const lecturers = getAllLecturers()
  console.log(lecturers)
  return (
    <div className={styles.main}>
    </div>
  );
}
