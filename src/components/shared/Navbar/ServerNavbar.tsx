import React from "react";
import Navbar from "@/components/shared/Navbar";

type Props = {
  mainLinks: any;
  sidebarLinks: any;
};

const ServerNavbar = ({ mainLinks, sidebarLinks }: Props) => {
  // Step 1: Create a single, flat array of all navigation links
  const allSeoLinks: any[] = [];

  Object.values(mainLinks).forEach((link: any) => {
    allSeoLinks.push(link);
    if (link.submenu) {
      Object.values(link.submenu).forEach((subItem: any) => {
        allSeoLinks.push(subItem);
      });
    }
  });

  Object.values(sidebarLinks).forEach((link: any) => {
    allSeoLinks.push(link);
    if (link.submenu) {
      Object.values(link.submenu).forEach((subItem: any) => {
        allSeoLinks.push(subItem);
      });
    }
  });

  return (
    <>
      {/* Static HTML for SEO */}
      <nav
        aria-hidden="true"
        style={{ display: "none", visibility: "hidden" }}
        className="seo-nav hidden lg:flex items-center text-sm font-medium space-x-6 md:space-x-8 lg:space-x-10 uppercase"
      >
        {allSeoLinks?.map((item: any, index) => (
          <a
            key={item.id || item.link || index}
            href={item?.link}
            className="seo-nav-link"
          >
            {item?.name}
          </a>
        ))}
      </nav>

      {/* Client-side enhanced navbar */}
      <Navbar mainMenuLinks={mainLinks} sideBarLinksDatas={sidebarLinks} />
    </>
  );
};

export default ServerNavbar;
