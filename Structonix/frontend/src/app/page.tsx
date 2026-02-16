import { HomepageBanner } from "@/components/Content/HomepageBanner";
import { HomepageServices } from "@/components/Content/HomepageServices";
import { HomepageAboutUs } from "@/components/Content/HomepageAboutUs";
import { HomepageStructuralInnovation } from "@/components/Content/HomepageStructuralInnovation";
import { HomepageProjects } from "@/components/Content/HomepageProjects";
import { HomepageTestimonials } from "@/components/Content/HomepageTestimonials";
import { HomepagePartners } from "@/components/Content/HomepagePartners";

export default function Home() {
  return (
    <main>
      <HomepageBanner />
      <HomepageStructuralInnovation />
      <HomepageServices />
      <HomepageAboutUs />
      <HomepageProjects />
      <HomepageTestimonials />
      <HomepagePartners />
      {/*
        Add other sections here later (About, Services, etc.)
        For now, let's keep the Strapi connection check hidden or remove it if not needed.
      */}
    </main>
  );
}
