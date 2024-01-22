import type {Metadata} from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "todo",
  description: "Todo-List with Typescript ",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4 ">
        <header className="m-auto text-xl font-bold leading-[4rem]">
          Todo-list with Typescript
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} todo
        </footer>
      </body>
    </html>
  );
}
