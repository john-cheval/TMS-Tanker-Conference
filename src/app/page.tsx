// import HomeSectionOne from "@/components/Home/Section1Alter";
// import HomeSectionTwo from "@/components/Home/Section2";
// import HomeSectionThree from "@/components/Home/Section3";
// import HomeSectionFour from "@/components/Home/Section4";
// import HomeSectionFive from "@/components/Home/Section5";
// import HomeSectionSix from "@/components/Home/Section6";
// import HomeSectionSeven from "@/components/Home/Section7";
// import HomeSectionEight from "@/components/Home/Section8";
// import HomeSectionNine from "@/components/Home/Section9";
// import Testimonials from "@/components/shared/Testimonials";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
// import generateMetadDataDetails from "@/lib/generateMetaData";
import HomeSectionOne from "@/components/Home/Section1";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(70, "", false);
}

const Home = async () => {
  const homePageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=70`
  );

  const conferenceYear =
    homePageContent?.gernalsettings?.current_year_coneference[0];

  const {
    COMMON_SETTINGS_VALUES_register_now,
    COMMON_SETTINGS_VALUES_become_a_sponsor,
  } = homePageContent?.gernalsettings?.general_settings;

  console.log(COMMON_SETTINGS_VALUES_become_a_sponsor, "become a sponsor");

  const { home_banner } = homePageContent?.data?.section_list;

  return (
    <>
      <HomeSectionOne
        {...home_banner}
        registerNow={COMMON_SETTINGS_VALUES_register_now}
        sponsorBtnData={COMMON_SETTINGS_VALUES_become_a_sponsor}
        callForPaperDate={conferenceYear?.Call_for_papers_date}
        earlyBirdsDate={conferenceYear?.Early_Bird_date}
        eventDate={conferenceYear?.end_date}
      />

      <div className="bg-white h-screen"></div>

      {/* <HomeSectionOne
        callForPaperDate={conferenceYear?.Call_for_papers_date}
        earlyBirdsDate={conferenceYear?.Early_Bird_date}
        eventDate={conferenceYear?.end_date}
        registerNow={COMMON_SETTINGS_VALUES_register_now}
        sponsorBtnData={COMMON_SETTINGS_VALUES_become_a_sponsor}
        {...homePageContent?.data?.section_list?.home_banner}
      />
      <HomeSectionTwo
        {...homePageContent?.data?.section_list?.about_the_conference}
      />
      <HomeSectionThree
        {...homePageContent?.data?.section_list?.highlights_from_past_edition}
      />
      <HomeSectionFour
        {...homePageContent?.data?.section_list?.agenda_featured_speakers}
      />
      <HomeSectionFive
        {...homePageContent?.data?.section_list?.conference_speakers}
      />
      <HomeSectionSix
        {...homePageContent?.data?.section_list?.agenda_featured_speakers_2}
      />
      <Testimonials
        {...homePageContent?.data?.section_list?.words_from_our_guests}
      />
      <HomeSectionSeven
        {...homePageContent?.data?.section_list?.why_sponsor_tms_ai_tech}
      />
      <HomeSectionEight
        {...homePageContent?.data?.section_list?.key_sponsorship_benefits}
      />
      <HomeSectionNine
        {...homePageContent?.data?.section_list?.key_sponsorship_benefits}
        sponsors={homePageContent?.data?.section_list?.sponsors}
        mediaParteners={homePageContent?.data?.section_list?.media_partners}
        assosiations={
          homePageContent?.data?.section_list?.supporting_associations
        }
      /> */}
    </>
  );
};

export default Home;
