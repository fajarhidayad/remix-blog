import { Link, NavLink } from "@remix-run/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Theme, useTheme } from "~/utils/theme-provider";

export default function Nav() {
  const [theme, setTheme] = useTheme();

  function toggleTheme() {
    setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  }
  return (
    <nav className="border-b-primary-1 flex items-center justify-between border-b py-5">
      <Link to={"/"} className="text-2xl font-semibold">
        Surya<span className="text-primary-1">Dev</span>
      </Link>

      <div className="flex items-center text-gray-800 dark:text-gray-100">
        <ul className="hidden items-center sm:flex">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "navlink before:scale-x-100" : "navlink"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                isActive ? "navlink before:scale-x-100" : "navlink"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <button
          className="border-primary-2 ml-5 rounded-full border p-2"
          onClick={toggleTheme}
        >
          {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
}
