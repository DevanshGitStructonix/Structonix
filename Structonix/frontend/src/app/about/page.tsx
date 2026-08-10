import { AboutUsBanner } from "@/components/Content/AboutusComponents/AboutusBanner";
import { AboutSecondaryNav } from "@/components/Content/AboutusComponents/AboutSecondaryNav";
import { WhoWeAre } from "@/components/Content/AboutusComponents/WhoWeAre";
import { PebProcess } from "@/components/Content/AboutusComponents/PebProcess";
import { MissionVision } from "@/components/Content/AboutusComponents/MissionVision";
import { StructonixTextMask } from "@/components/Content/AboutusComponents/StructonixTextMask";
import { KeyStrengths } from "@/components/Content/AboutusComponents/KeyStrengths";
import { HomepagePartners } from "@/components/Content/HomepagePartners";

export default function AboutPage() {
    return (
        <div>
            <AboutUsBanner />
            <AboutSecondaryNav />
            <WhoWeAre />
            <PebProcess />
            <MissionVision />
            <StructonixTextMask />
            <KeyStrengths />
            <HomepagePartners />
        </div>
    );
}
