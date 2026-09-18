import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";
import SimulatorModal from "../sections/SimulatorModal";
import { navLinks } from "../../data/content";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

function Header() {
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!mobileNavOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMobileNavOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileNavOpen]);

  const openSimulator = () => {
    setMobileNavOpen(false);
    setSimulatorOpen(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          to="/"
          className={styles.logo}
          aria-label="Ir para a página inicial"
        >
          <img src={logo} alt="" className={styles.logoImg} />
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <Button
            variant="dark"
            as="button"
            type="button"
            onClick={openSimulator}
            className={styles.desktopSimularButton}
          >
            Calcular Crédito
          </Button>

          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setMobileNavOpen((open) => !open)}
            aria-label={mobileNavOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileNavOpen}
          >
            <FontAwesomeIcon icon={mobileNavOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {mobileNavOpen && (
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileNavOpen(false)}
                className={`${styles.mobileNavLink} ${isActive ? styles.navLinkActive : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            variant="dark"
            as="button"
            type="button"
            onClick={openSimulator}
            className={styles.mobileSimularButton}
          >
            Calcular Crédito
          </Button>
        </nav>
      )}

      {simulatorOpen && <SimulatorModal onClose={() => setSimulatorOpen(false)} />}
    </header>
  );
}

export default Header;
