import { HomepageBanner } from "@/components/Content/HomepageBanner";

export default function Home() {
  return (
    <main>
      <HomepageBanner />
      {/* 
        Add other sections here later (About, Services, etc.) 
        For now, let's keep the Strapi connection check hidden or remove it if not needed.
      */}
    </main>
  );
}
