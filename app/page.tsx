import {HeroSection, SnippetSection, FeatureSection, AccessSection} from "@/components/shared/section/";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      <HeroSection />
      <SnippetSection />
      <FeatureSection />
      <AccessSection />
    </div>

  );
}
