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

    const title = data?.meta_title || "TMS AI Conference";
    const description = data?.meta_description || "TMS AI Conference";
    const image =
      data?.meta_image ||
      "https://chevaldemo.xyz/demo/white-label/wp-content/uploads/2025/06/white-Label.jpg";

    return {
      title,
      description,
      alternates: {
        canonical: `https://tms-ai-conference.vercel.app/${path}`,
      },
      openGraph: {
        title,
        description,

        url: `https://tms-ai-conference.vercel.app/${path}`,
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
      title: "White Label Media",
      description: "White Label Media",
      openGraph: {
        title: "White Label Media",
        description: "White Label Media",
        images: [
          {
            url: "https://chevaldemo.xyz/demo/white-label/wp-content/uploads/2025/06/white-Label.jpg",
            width: 1200,
            height: 630,
            alt: "White Label Media",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        images: [
          "https://chevaldemo.xyz/demo/white-label/wp-content/uploads/2025/06/white-Label.jpg",
        ],
      },
    };
  }
}

export default generateMetadDataDetails;
