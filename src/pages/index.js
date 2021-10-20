// Step 1: Import React
import * as React from "react";
import NavigationBar from "../components/molecules/NavigationBar";
import HomeLayout from "../components/organisms/HomeLayout";
import AboutLayout from "../components/organisms/AboutLayout";
import WorkLayout from "../components/organisms/WorkLayout";

const idToLabelList = [
  { page1: "Home" },
  { page2: "About" },
  { page3: "Work" },
  { page4: "Contact" },
];

const techList = [
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Gatsby",
  "Python",
  "Swift",
  "C",
];

const workTiles = [
  {
    company: "Fidelity Invesments",
    title: "Systems Engineer",
    actionables: [
      "Designed and developed PDF generator using Java with HTML and CSS to convert financial data into readable charts, tables, and text for various business units",
      "Prototyped a survey-style application to replace a call script to save clients up to 2 hours each call",
      "Observed several business meetings for insight on application design outside of a programming perspective",
      "Adjusted dynamically from a team setting to a self-sufficient, independent work style from project to project",
    ],
  },
  {
    company: "Code4Community",
    title: "Full Stack Developer",
    actionables: [
      "Developed a community-based blogging prototype that includes liking and commenting functionality",
      "Generated a single-page application using React with TypeScript to ensure the site flowed cleanly",
      "Constructed a database in PostgreSQL to efficiently store user and post data, such as comments and like counts",
      "Corresponded with team members and mentors through Microsoft Teams to accelerate learning and collaboration"
    ]
  },
  {
    company: "Northeastern University",
    title: "Computer Science and Business Administration",
    actionables: [
      "Computer Systems",
      "Database Design",
      "Algorithms and Data",
      "Object Oriented Design",
      "Discrete Structures",
      "Fundamentals of Computer Science 1 & 2",
      "Financial Management",
      "Managerial Accounting",
      "Management Information System",
      "Financial Accounting",
      "Calculus for Business",
      "Business Statistics",
      "Macroecomics",
      "Microeconomics",
      "Fundamentals of Business"
    ]
  },
  {
    company: "Supply New England",
    title: "Management Trainee",
    actionables: [
      "Boosted Facebook and Instagram interactions by over 300% via regular engagements and updates",
      "Reinvented the promotions webpage using HTML and CSS to create a modern, aesthetically pleasing page",
      "Oversaw product movement through a central warehouse with Epicor Eclipse to reduce inventory errors to near 0",
      "Maintained a relationship with over 50 customers while distributing product to maximize profits"
    ]
  },
];

const projectTiles = [
  {
    name: "This Website",
    keyLanguages: "JavaScript, Gatsby, styled-components",
    link: "https://github.com/reardon-co/portfolio-website"
  },
  {
    name: "Blog Genetics",
    keyLanguages: "JavaScript, HTML, CSS",
    link: "https://github.com/reardon-co/blob-genetics"
  },
  {
    name: "Shiny Text",
    keyLanguages: "JavaScript, HTML, CSS",
    link: "https://github.com/reardon-co/shiny-text"
  },
  {
    name: "Pyramid Solitaire",
    keyLanguages: "Java",
    link: "https://github.com/reardon-co/Pyramid-Solitaire"
  }
];

const IndexPage = () => {
  return (
    <div>
      <NavigationBar idToLabelList={idToLabelList}></NavigationBar>

      <HomeLayout id={"page1"}></HomeLayout>
      <AboutLayout id={"page2"} techList={techList}></AboutLayout>
      <WorkLayout id={"page3"} workTiles={workTiles} projectTiles={projectTiles}></WorkLayout>
      <div id={"page4"}>page 4</div>
    </div>

    /*
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
    */
  );
};

export default IndexPage;
