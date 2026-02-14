import { AboutUsBanner } from "@/components/Content/AboutusComponents/AboutusBanner";
import { WhoWeAre } from "@/components/Content/AboutusComponents/WhoWeAre";
import { MissionVision } from "@/components/Content/AboutusComponents/MissionVision";
import { StructonixTextMask } from "@/components/Content/AboutusComponents/StructonixTextMask";
import { TeamSection } from "@/components/Content/AboutusComponents/TeamSection";
import { HomepagePartners } from "@/components/Content/HomepagePartners";

export default function AboutPage() {
    return (
        <div>
            <AboutUsBanner />
            <WhoWeAre />
            <MissionVision />
            <StructonixTextMask />
            <TeamSection />
            <HomepagePartners />
        </div>
    );
}
