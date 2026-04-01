import Link from "next/link";
import styles from "./AttributesNav.module.css";
import { AttributeLink } from "./AttributesNav.types";

interface Props {
  attributeLinks: AttributeLink[];
}

export default function AttributesNav({ attributeLinks }: Props) {
  return (
    <nav className={styles.attributesNav}>
      <ul>
        {attributeLinks.map(({ id, href, label }) => (
          <li key={id}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
