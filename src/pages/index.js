// Step 1: Import React
import * as React from "react";
import PageLayout from "../components/PageLayout"
import LeftSegment from "../components/LeftSegment";
import RightSegment from "../components/RightSegment";
import HeroLayout from "../components/HeroLayout";

const data = {
  page1: {
    HeroLayout: {
      introSummary: "I am a third year student at Northeastern University, scheduled to graduate in May of 2023. I am currently in search of web, mobile, and game development experiences and opporunities."
    }
  }
}

const IndexPage = () => {
  return (
    <div>
      <LeftSegment />
      <RightSegment />

      <PageLayout>
        <HeroLayout introSummary={ data.page1.HeroLayout.introSummary }/>
      </PageLayout>
      <PageLayout>Page 2</PageLayout>
    </div>
  );
};

export default IndexPage;
