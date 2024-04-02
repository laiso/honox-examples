import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import { Style } from "hono/css";
import styles from "../styles/tailwind.css?url";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link href={styles} rel="stylesheet" />
        <Style />
        <Script src="/app/client.ts" async />
      </head>
      <body>{children}</body>
    </html>
  );
});
