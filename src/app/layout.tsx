import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ServerNavbar from "@/components/shared/Navbar/ServerNavbar";
import Footer from "@/components/shared/Footer";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import Providers from "@/Providers/ToastProviders";

export const metadata: Metadata = {
  title:
    "TMS AI Conference 2025: AI in Materials & Manufacturing | TMS Specialty Congress",
  description:
    "Join the TMS AI Conference (AIM 2025), a key event within the TMS Specialty Congress in Anaheim, CA. Explore the latest in AI, machine learning, and manufacturing processes with global experts in materials science.",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuLinks] = await Promise.all([fetchData(`${baseUrl}/getmenu`)]);

  const {
    INSTAGRAM,
    TWITTER,
    FACEBOOK,
    LINKEDIN,
    YOUTUBE,
    COMMON_SETTINGS_VALUES_join_newsletter,
    COMMON_SETTINGS_VALUES_register_now,
    COMMON_SETTINGS_VALUES_become_a_sponsor,
  } = menuLinks?.general_settings;
  const socialMediaLinks = [
    INSTAGRAM,
    TWITTER,
    FACEBOOK,
    LINKEDIN,
    YOUTUBE,
  ].filter(Boolean);

  const mainMenuLinks = menuLinks?.[1];
  const sideBarlinks = menuLinks?.[4];
  return (
    <html lang="en" className="h-full " suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased flex flex-col min-h-full `}
      >
        <ServerNavbar mainLinks={mainMenuLinks} sidebarLinks={sideBarlinks} />
        <main className="flex-grow">
          <Providers>{children}</Providers>
        </main>
        <Footer
          footerMainLinks={menuLinks[2]}
          footerBottom={menuLinks[3]}
          socialLinks={socialMediaLinks}
          footer_heading1={COMMON_SETTINGS_VALUES_join_newsletter?.title}
          footer_heading2={COMMON_SETTINGS_VALUES_join_newsletter?.value}
          newsLetterHeading={
            COMMON_SETTINGS_VALUES_join_newsletter?.description
          }
          registerNow={COMMON_SETTINGS_VALUES_register_now}
          sponsorBtnData={COMMON_SETTINGS_VALUES_become_a_sponsor}
        />
      </body>
    </html>
  );
}
