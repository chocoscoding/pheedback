import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { cn } from "@/lib";
import { generateMetadata } from "@/utils";
import { Toaster } from "@/components/ui/sonner";
import { Inter, DM_Sans, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";

const heading = localFont({
  src: [
    {
      path: "/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-heading",
});

const base = Inter({
  subsets: ["latin"],
  variable: "--font-base",
});

const subheading = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-subheading",
});

export const metadata = generateMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-heading overflow-x-hidden !scrollbar-hide",
          base.variable,
          heading.variable,
          subheading.variable
        )}>
        <ClerkProvider>
          {children}
          <Toaster richColors theme="dark" position="top-right" />
        </ClerkProvider>
      </body>
    </html>
  );
}
