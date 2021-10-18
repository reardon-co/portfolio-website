// Step 1: Import React
import * as React from "react";
import PageLayout from "../components/PageLayout";
import HeroLayout from "../components/HeroLayout";
import data from "../documents/data.json";
import NavBar from "../components/NavBar";
import AboutLayout from "../components/AboutLayout";

const IndexPage = () => {
  return (
    <div>
      <NavBar />
      <PageLayout id={"page1"}>
        <HeroLayout
          introSummary={data.index.page1.HeroLayout.introSummary}
          flickerStart={data.index.page1.HeroLayout.FlickerText.start}
          flickerPhrases={data.index.page1.HeroLayout.FlickerText.phrases}
          flickerCharacters={data.index.page1.HeroLayout.FlickerText.characters}
        />
      </PageLayout>
      <PageLayout id={"page2"}>
        <AboutLayout aboutText={data.index.page2.AboutLayout.AboutText}/>
      </PageLayout>
      <PageLayout id={"page3"}>Page 3</PageLayout>
      <PageLayout id={"page4"}>Page 4</PageLayout>
      <PageLayout id={"page5"}>Page 5</PageLayout>
    </div>
  );
};

export default IndexPage;
