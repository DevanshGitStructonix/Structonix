import dynamic from 'next/dynamic';
import { HomepageBanner } from "@/components/Content/HomepageBanner";
import { HomepageAboutUs } from "@/components/Content/HomepageAboutUs";

// Dynamic imports for below-the-fold heavy components to reduce initial bundle size
const HomepageServices = dynamic(() => import("@/components/Content/HomepageServices").then(mod => mod.HomepageServices));
const HomepageProjects = dynamic(() => import("@/components/Content/HomepageProjects").then(mod => mod.HomepageProjects));
const HomepageTestimonials = dynamic(() => import("@/components/Content/HomepageTestimonials").then(mod => mod.HomepageTestimonials));
const HomepagePartners = dynamic(() => import("@/components/Content/HomepagePartners").then(mod => mod.HomepagePartners));

export default function Home() {
  return (
    <main>
      <HomepageBanner />
      <HomepageAboutUs />
      <HomepageServices />
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
