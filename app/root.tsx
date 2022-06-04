import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Outlet } from "@remix-run/react";

import globalLargeUrl from "~/styles/global-large.css";
import globalMediumUrl from "~/styles/global-medium.css";
import globalUrl from "~/styles/global.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalLargeUrl,
      media: "screen and (min-width: 1024px)",
    },
    {
      rel: "stylesheet",
      href: globalMediumUrl,
      media: "print, (min-width: 640px)",
    },
    { rel: "stylesheet", href: globalUrl },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <Links />
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
