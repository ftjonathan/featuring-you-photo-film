import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://featuringyouphotoandfilm.com"),
  title: { default: "Featuring You Photo + Film", template: "%s | Featuring You" },
  description: "Artful photo and film for intimate wedding days, elopements, and destination celebrations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
