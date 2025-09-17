import React from "react";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import HomeSectionOne from "@/components/Home/Section1";
import generateMetadDataDetails from "@/lib/generateMetaData";
import HomeSectionTwo from "@/components/Home/Section2";
import HomeSectionThree from "@/components/Home/Section3";
import HomeSectionFour from "@/components/Home/Section4";
import HomeSectionFive from "@/components/Home/Section5";
import HomeSectionSix from "@/components/Home/Section6";
import HomeSectionSeven from "@/components/Home/Section7";
import HomeSectionEight from "@/components/Home/Section8";
import HomeSectionNine from "@/components/Home/Section9";

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

  const {
    home_banner,
    about_the_conference,
    highlights_from_past_edition,
    agenda_featured_speakers,
    conference_speakers,
    agenda_featured_speakers_2,
    words_from_our_guests,
    why_sponsor_tms_ai_tech,
    sponsors,
    supporting_associations,
    media_partners,
  } = homePageContent?.data?.section_list;

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
      <HomeSectionTwo {...about_the_conference} />
      <HomeSectionThree
        {...highlights_from_past_edition}
        registerNow={COMMON_SETTINGS_VALUES_register_now}
      />
      <HomeSectionFour {...agenda_featured_speakers} />
      <HomeSectionFive {...conference_speakers} />
      <HomeSectionSix {...agenda_featured_speakers_2} />
      <HomeSectionSeven {...words_from_our_guests} />
      <HomeSectionEight {...why_sponsor_tms_ai_tech} />
      <HomeSectionNine
        sponsorsData={sponsors}
        suppotiveData={supporting_associations}
        mediaPartnersData={media_partners}
      />
    </>
  );
};

export default Home;
