import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  icons?: Metadata["icons"];
  noIndex?: boolean;
  keywords?: string[];
  author?: string;
  twitterHandle?: string;
  type?: "website" | "article" | "profile";
  locale?: string;
  alternates?: Record<string, string>;
  publishedTime?: string;
  modifiedTime?: string;
}

export const generateMetadata = ({
  title = `Pheedbac - AI-Powered Project Management & Team Collaboration`,
  description = `Vetra is an intelligent project management platform that transforms how teams work together. Leverage AI to automate workflows, enhance collaboration, and boost productivity. Experience smarter project management today.`,
  icons = [
    {
      rel: "icon",
      url: "/icons/icon-dark.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      url: "/icons/icon.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  noIndex = false,
  keywords = ["pheedbac", "beta testing", "performance tracking", "user feedback"],
  author = process.env.NEXT_PUBLIC_AUTHOR_NAME,
  type = "website",
}: MetadataProps = {}): Metadata => {
  const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://pheedbac.vercel.app");

  return {
    metadataBase,
    title: {
      template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
      default: title,
    },
    description,
    keywords,
    authors: [{ name: author }],
    creator: author,
    publisher: process.env.NEXT_PUBLIC_APP_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons,
  };
};
