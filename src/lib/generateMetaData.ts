import { baseUrl } from "./api";

async function generateMetadDataDetails(
  id: number | string,
  path: string,
  slug = false,
  innerUrl = "cms"
) {
  try {
    const res = await fetch(
      `${baseUrl}/getmasterdetails?master_name=${innerUrl}&${
        slug ? "slug" : "id"
      }=${id}`
    );
    const data = await res.json();

    const title = data?.meta_title || "TMS Tanker Conference";
    const description = data?.meta_description || "TMS Tanker Conference";
    const image =
      data?.meta_image ||
      "";

    return {
      title,
      description,
      alternates: {
        canonical: `https://tms-tanker-conference.vercel.app/${path}`,
      },
      openGraph: {
        title,
        description,

        url: `https://tms-tanker-conference.vercel.app/${path}`,
        type: "website",
        images: [{ url: image, width: 1200, height: 630, alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    return {
      title: "TMS Tanker Conference",
      description: "TMS Tanker Conference",
      openGraph: {
        title: "TMS Tanker Conference",
        description: "TMS Tanker Conference",
        images: [
          {
            url: "",
            width: 1200,
            height: 630,
            alt: "TMS Tanker Conference",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        images: [
          "",
        ],
      },
    };
  }
}

export default generateMetadDataDetails;
