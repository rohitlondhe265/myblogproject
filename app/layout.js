import Header from "@/components/Header";
import "./globals.css";
import NextAuthProvider from "./NextAuthProvider";
import ThemeProvider from "./ThemeProvider";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL(`${process.env.BASE_URL}`),
  title: {
    default: "Career Pages | HomePage",
    template: `%s | Career Pages`,
  },
  description: "This is the description of Career Pages",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: `${process.env.SEARCH_CONSOLE_ID}`,
  },
  generator: "Next.js",
  applicationName: "Career Pages",
  keywords: ["Next.js", "React", "JavaScript"],
  publisher: "Career Pages",
  openGraph: {
    title: "Career Pages",
    description: "The React Framework for the Web",
    url: "/",
    siteName: "blog-client-phi.vercel.app",
    images: "/hero.png",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADSENCE_ID}`}
          crossorigin="anonymous"
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${process.env.GTM_ID});
    `}
        </Script>
      </head>

      <body suppressHydrationWarning>
        <NextAuthProvider>
          <ThemeProvider>
            <div className="bg-skin-fill text-base min-h-screen">
              <div className="container mx-auto space-y-3 md:space-y-6">
                <Header />
                <main className="p-2">{children}</main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
