import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Farmer’s Wife | Farm Shop, Café & Campsite",
  description: "A countryside stop on the Harare–Chirundu road in Karoi, Zimbabwe.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}