/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useLocation, useNavigate } from "@remix-run/react";
import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import { BriefcaseBusinessIcon, HomeIcon, NewspaperIcon } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

export default function MobileNav() {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();
  let timeoutId: NodeJS.Timeout | null = null;

  function onScrollAnimate() {
    setIsVisible(false);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScrollAnimate);
    return () => {
      window.removeEventListener("scroll", onScrollAnimate);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ scale: 1 });
    } else {
      controls.start({ scale: 0 });
    }
  }, [isVisible, controls]);

  return (
    <motion.ul
      initial={{ scale: 0 }}
      animate={controls}
      transition={{ duration: 0.3 }}
      className="fixed bottom-5 left-1/4 z-10 flex w-fit -translate-x-1/2 items-center space-x-5 rounded-full border-2 border-primary-1 bg-white px-6 py-1 dark:bg-slate-700 sm:hidden"
    >
      <NavLink href="/projects">
        <BriefcaseBusinessIcon />
      </NavLink>
      <CenterNavLink href="/">
        <HomeIcon />
      </CenterNavLink>
      <NavLink href="/blog">
        <NewspaperIcon />
      </NavLink>
    </motion.ul>
  );
}

const NavLink = (props: { href: string; children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const active = location.pathname === props.href;

  return (
    <li
      className={clsx({
        "rounded-full p-3 text-primary-1": true,
        "bg-slate-100 dark:bg-slate-500": active,
      })}
      onClick={() => navigate({ pathname: props.href })}
    >
      {props.children}
    </li>
  );
};

const CenterNavLink = (props: { href: string; children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const active = location.pathname === props.href;

  return (
    <li
      className={clsx({
        "rounded-full p-3 text-primary-1": true,
        "bg-slate-100 dark:bg-slate-500": active,
      })}
      onClick={() => navigate({ pathname: props.href })}
    >
      {props.children}
    </li>
  );
};
