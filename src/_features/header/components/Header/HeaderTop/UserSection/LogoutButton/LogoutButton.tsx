"use client";

import { useState } from "react";
import styles from "./UserSection.module.css";
import { logout } from "@/src/_features/auth/actions";

export function LogoutButton() {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <button className={styles.logout} onClick={() => setShowConfirm(true)}>
        Sair
      </button>

      {showConfirm && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <p>Deseja realmente sair?</p>

            <div className={styles.popupButtons}>
              <button
                className={styles.cancel}
                onClick={() => setShowConfirm(false)}
              >
                Cancelar
              </button>

              <form action={logout}>
                <button className={styles.confirmLogout}>Sair</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
