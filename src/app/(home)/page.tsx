import styles from "./HomePage.module.css";
import { IMediaSection } from "./HomePage.type";
import { MediaSection } from "./components";

export default function HomePage() {
  const mediaSection: IMediaSection[] = [];

  return (
    <div className={styles.homePage}>
      {mediaSection.map((mediaSection) => (
        <MediaSection key={mediaSection.title} {...mediaSection} />
      ))}
    </div>
  );
}
