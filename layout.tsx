import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soundpath – Beats profesionales en 24h",
  description: "Soná ya. Soná bien. Soná lejos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}