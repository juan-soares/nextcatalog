import styles from "./Loginbar.module.css";
import { UserInfo, LoginButton } from "./";

export function Loginbar() {
  const isAuthenticated = false;

  return (
    <div className={styles.loginBar}>
      {isAuthenticated ? <UserInfo /> : <LoginButton />}
    </div>
  );
}
