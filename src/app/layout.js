import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { FetchDataFromStrapi } from "../../actions/getDataFromStarpi";
import { navbarQuery } from "@/lib/queries/homePageQueries";
import { navbarRoute } from "@/lib/constants/path";

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

export default async function RootLayout({ children }) {
  const data = await FetchDataFromStrapi(navbarQuery, navbarRoute);
  if (!data) return null;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex flex-col min-h-screen">
          <Navigation navData={data} />
          <section className="flex-grow ">{children}</section>
        </main>
      </body>
    </html>
  );
}
