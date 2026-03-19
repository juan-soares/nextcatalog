import { MediaSection } from "./components";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <MediaSection title="animes" href="/animes" />
    </div>
  );
}
