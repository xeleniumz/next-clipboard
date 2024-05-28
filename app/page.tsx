import {HeroSection, SnippetSection, FeatureSection, AccessSection, SuperChargeSection} from "@/components/shared/section/";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      <HeroSection />
      <SnippetSection />
      <FeatureSection />
      <AccessSection />
      <SuperChargeSection />
    </div>

  );
}
