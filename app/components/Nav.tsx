import { Link, NavLink } from "@remix-run/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Theme, useTheme } from "~/utils/theme-provider";

const navLinkList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export default function Nav() {
  const [theme, setTheme] = useTheme();

  function toggleTheme() {
    setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  }
  return (
    <nav className="flex items-center justify-between border-b border-b-primary-1 py-5">
      <Link to={"/"} className="text-2xl font-semibold">
        Surya<span className="text-primary-1">Dev</span>
      </Link>

      <div className="flex items-center text-gray-800 dark:text-gray-100">
        <ul className="hidden items-center sm:flex">
          {navLinkList.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "navlink before:scale-x-100" : "navlink"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="ml-5 rounded-full border border-primary-2 p-2"
          onClick={toggleTheme}
        >
          {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
}
