import "./App.css";
import { ExperienceSection } from "./components/ExperienceSection/ExperienceSection";
import { FormSection } from "./components/FormSection/FormSection";
import { Header } from "./components/Header/Header";
import { InfoSection } from "./components/InfoSection/InfoSection";
import { SkillsSection } from "./components/SkillsSection/SkillsSection";
import { philosophyInfo } from "./data/philosophyData";
import { instagramInfo } from "./data/instagramData";
import { PhotographySection } from "./components/PhotographySection/PhotographySection";

function App() {
  return (
    <>
      <Header />
      <ExperienceSection />
      <InfoSection
        title={philosophyInfo.title}
        text={philosophyInfo.text}
        img={philosophyInfo.img}
        textInfo={philosophyInfo.textInfo}
        bgColor={philosophyInfo.bgColor}
      />
      <SkillsSection />
      <InfoSection
        title={instagramInfo.title}
        text={instagramInfo.text}
        img={instagramInfo.img}
        textInfo={instagramInfo.textInfo}
        bgColor={instagramInfo.bgColor}
      />
      <PhotographySection />
      <FormSection />

    </>
  );
}

export default App;
