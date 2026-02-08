import { HomepageBanner } from "@/components/Content/HomepageBanner";
import { HomepageServices } from "@/components/Content/HomepageServices";
import { HomepageAboutUs } from "@/components/Content/HomepageAboutUs";
import { HomepagePartners } from "@/components/Content/HomepagePartners";

export default function Home() {
  return (
    <main>
      <HomepageBanner />
      <HomepageServices />
      <HomepageAboutUs />
      <HomepagePartners />
      {/*
        Add other sections here later (About, Services, etc.)
        For now, let's keep the Strapi connection check hidden or remove it if not needed.
      */}
    </main>
  );
}
