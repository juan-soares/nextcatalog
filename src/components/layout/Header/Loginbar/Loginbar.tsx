import styles from "./Loginbar.module.css";
import { UserInfo, LoginButton } from "./";

export function Loginbar() {
  const isAuthenticated = true;

  return (
    <div className={styles.loginBar}>
      {isAuthenticated ? <UserInfo /> : <LoginButton />}
    </div>
  );
}
