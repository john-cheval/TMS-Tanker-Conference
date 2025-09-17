import React from "react";

export type NavLinkType = {
  id: number;
  title: string;
  url: string;
};

export type sideBarPropsType = {
  id: number | string;
  title: string;
  url: string;
  children: boolean | NavLinkType[];
};

export type SideBarComponentProps = {
  sideBarLinksData: sideBarPropsType[];
};

export type buttonApIPropsType = {
  title: string;
  value: string;
};

export type SpeakersDataProps = {
  id?: number;
  judges_oeder?: number;
  award_id?: number;
  name?: string;
  slug?: string;
  post?: string;
  company?: string;
  description?: string | null;
  is_chairman?: string;
  image_url?: string;
  home_title?: string;
};
export type sectionTwoCardProps = {
  id: number;
  image_url: string;
  home_title?: string;
};

export type ImageGalleryTypes = {
  title?: string;
  image_url?: string;
};

export type YoutubeTestimonialsTypes = {
  title?: string;
  youtube_id?: string;
};

export type SponsorsPropsType = {
  award_id?: number;
  id?: number;
  name?: string;
  slug?: string;
  website_link?: string;
  company_name?: string;
  email?: string;
  contact_number?: string;
  country_code?: string;
  image_url?: string;
  description?: string | null;
};

export type benifitsType = {
  title: string;
  description: string;
  image_url?: string;
};
export type WhyAttendListType = {
  title?: string;
  description: string;
  image_url?: string;
};

export type SectionOnePropsTyps = {
  small_title?: string;
  small_title_2?: string;
  main_heading?: string;
  location_heading?: string;
  call_for_papers_heading?: string;
  eirly_bird_offer_heading?: string;
  banner_image?: string | null;
  callForPaperDate?: string;
  image_alt_tag?: string;
  earlyBirdsDate?: string;
  eventDate?: string;
  event_date_heading?: string;
  heading?: string;
  button_heading?: string;
  button_link?: string;
  session_heading?: string;
  description?: string;
  image?: string;
  button_text?: string;
  video?: string;
  short_description?: string;
  data?: SpeakersDataProps[] | sectionTwoCardProps[];
  image_gallery?: ImageGalleryTypes[];
  youtube_testimonials?: YoutubeTestimonialsTypes[];
  all_benefits?: benifitsType[];
  isOpppotunity?: boolean;
  image_2?: string;
  image_alt_tag_2?: string;
  description_2?: string;
  heading_2?: string;
  price_list?: any;
  table_heading_2?: string;
  table_heading?: string;
  register_heading?: string;
  register_price?: any;
};

// Tanker
export type ButtonLinksProps = {
  title: string;
  value: string;
};

export type SessionPropsType = {
  name: string;
  slug: string;
  post: string;
  company: string;
  description: string | null;
  is_home: string;
  home_title?: string;
  Time?: string;
  is_session?: string;
  image_url?: string;
};

export type ButtonPropsType = {
  children: React.ReactNode;
  hrefs?: string;
  isGradient?: boolean;
  isIcon?: boolean;
  isLink?: boolean;
  isBig?: boolean;
  gradient?: string;
  isSponsor?: boolean;
  isBigText?: boolean;
};
