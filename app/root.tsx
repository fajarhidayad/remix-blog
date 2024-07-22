import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import stylesheet from "~/styles/tailwind.css?url";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {
  NonFlashOfWrongThemeEls,
  Theme,
  ThemeProvider,
  useTheme,
} from "./utils/theme-provider";
import clsx from "clsx";
import { getThemeSession } from "./utils/theme.server";
import MobileNav from "./components/MobileNav";

export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
};

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: stylesheet,
  },
];

export function App() {
  const data = useLoaderData<LoaderData>();

  const [theme] = useTheme();
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
      </head>
      <body className="bg-light text-gray-800 dark:bg-dark dark:text-gray-100">
        <div className="container relative mx-auto flex min-h-screen max-w-4xl flex-col">
          <Nav />
          <MobileNav />
          <main className="py-5">
            <Outlet />
          </main>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
