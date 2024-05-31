import { Link } from "@remix-run/react";
import { Theme, useTheme } from "~/utils/theme-provider";

export default function Nav() {
  const [theme, setTheme] = useTheme();

  function toggleTheme() {
    setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  }
  return (
    <nav className="flex items-center justify-between border-b py-5">
      <Link to={"/"} className="text-2xl font-semibold">
        Surya<span className="text-blue-500">Dev</span>
      </Link>

      <ul className="flex items-center">
        <li>
          <Link to={"/"} className="navlink">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/"} className="navlink">
            Projects
          </Link>
        </li>
        <li>
          <Link to={"/blog"} className="navlink">
            Blog
          </Link>
        </li>
        <li>
          <button onClick={toggleTheme}>
            {theme === Theme.DARK ? "light" : "dark"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
