import Header from "@/components/Header";
import "./globals.css";
import NextAuthProvider from "./NextAuthProvider";
import ThemeProvider from "./ThemeProvider";
import Footer from "@/components/Footer";
import Script from "next/script";
import ToastProvider from "./ToastProvider";
import GoogleAnalytics from "./GoogleAnalytics";

const homepageKeywords = [
  "Chemical Engineering",
  "Technology Trends",
  "Career Opportunities",
  "Innovation in Engineering",
  "Sustainable Practices",
  "Chemical Processes",
  "Engineering Insights",
  "STEM Careers",
  "Chemical Industry Updates",
  "Science and Engineering",
  "Career Guidance",
  "Industrial Chemistry",
  "Future of Technology",
  "Engineering Education",
  "Emerging Technologies",
  "Chemical Innovations",
  "Sustainable Engineering",
  "Science Careers",
  "Engineering News",
  "Professional Development",
];

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
        {process.env.NODE_ENV === "production" && (
          <Script
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADSENCE_ID}`}
            crossorigin="anonymous"
          ></Script>
        )}
      </head>

      <body suppressHydrationWarning>
        <GoogleAnalytics />
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
        <ToastProvider />
      </body>
    </html>
  );
}
