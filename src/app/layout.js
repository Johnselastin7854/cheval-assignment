import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import Container from "./layout/Container";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex flex-col min-h-screen">
          <Navigation />
          <section className="flex-grow ">
            {/* <HeroSection /> */}
            <Container>{children}</Container>
          </section>
        </main>
      </body>
    </html>
  );
}
