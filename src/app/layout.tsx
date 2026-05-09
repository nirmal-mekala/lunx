import type { Metadata } from "next";
import "./globals.css";
import { PreloadResources } from "./preload-resources";

export const metadata: Metadata = {
  title: "Lunx",
  description: "",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="hidden">
        <div id="page" class="full-width">
          <main>
            <PreloadResources />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
