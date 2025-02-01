import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/marketing/navbar";
import { cn } from "@/lib";
import { generateMetadata } from "@/utils";
import { base, heading } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import { subheading } from "@/constants/fonts";

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
          <Navbar />
          {children}
          <Toaster richColors theme="dark" position="top-right" />
        </ClerkProvider>
      </body>
    </html>
  );
}
