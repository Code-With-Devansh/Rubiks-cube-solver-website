import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rubik's Cube Solver Bot — Engineering Case Study",
  description:
    "A full-stack hardware + software system combining computer vision, Kociemba's two-phase algorithm, and custom mechanical translation to physically solve a Rubik's Cube using Arduino servo motors.",
  keywords: ["Rubik's Cube", "Arduino", "OpenCV", "Kociemba", "Robotics", "Computer Vision"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
