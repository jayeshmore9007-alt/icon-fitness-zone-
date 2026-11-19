import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Kiosk } from "./pages/Kiosk";
import { Admin } from "./pages/Admin";
import { routes } from "./routes";

function currentPath(): string {
  const path = window.location.hash.replace(/^#/, "") || "/";
  return routes.some((r) => r.path === path) ? path : "/";
}

export default function App() {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const onChange = () => {
      setPath(currentPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  useEffect(() => {
    const route = routes.find((r) => r.path === path);
    document.title = `${route ? route.title + " · " : ""}Icon Fitness Zone`;
  }, [path]);

  return (
    <>
      <Header />
      {path === "/kiosk" ? <Kiosk /> : path === "/admin" ? <Admin /> : <Home />}
    </>
  );
}
