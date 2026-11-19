import { useEffect, useState } from "react";
import "./Header.css";

function currentPath(): string {
  const p = window.location.hash.replace(/^#/, "");
  return p === "" ? "/" : p;
}

export function Header() {
  const [path, setPath] = useState(currentPath());

  useEffect(() => {
    const onChange = () => setPath(currentPath());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#/" aria-label="Icon Fitness Zone, Startseite">
          <img className="site-header__logo" src="src/assets/logo.svg" alt="" />
        </a>
        <nav className="site-header__nav" aria-label="Hauptnavigation">
          <a
            className="site-header__link"
            href="#/"
            aria-current={path === "/" ? "page" : undefined}
          >
            Start
          </a>
          <a
            className="site-header__link"
            href="#/kiosk"
            aria-current={path === "/kiosk" ? "page" : undefined}
          >
            Kiosk
          </a>
          <a
            className="site-header__link"
            href="#/admin"
            aria-current={path === "/admin" ? "page" : undefined}
          >
            Verwaltung
          </a>
        </nav>
      </div>
    </header>
  );
}
