import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GMB Competitor Spy – Track Competitor Google Business Changes",
  description: "Monitor competitor Google My Business profiles. Get instant alerts when they update hours, photos, reviews, or info. Stay one step ahead."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d070d8d2-8796-4c19-a950-431c58036603"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
