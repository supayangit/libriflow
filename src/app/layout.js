import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/shared/Header";
import ThemeProvider from "@/app/components/ThemeProvider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Libriflow",
  description: "Developed by Supayan C",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[color:var(--background)] text-[color:var(--foreground)] transition-colors duration-300">
        <ThemeProvider>
          <Header />
          {children}
          <ToastContainer position="top-right" autoClose={2000} />
        </ThemeProvider>
      </body>
    </html>
  );
}
