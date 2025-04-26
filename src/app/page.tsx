import ArticlesListSection from "@/features/user/articles/articles.list.section";
import HeroSection from "@/features/user/hero/hero.section";

export default function Home() {
  return (
    <div className="space-y-5">
      <HeroSection />
      <ArticlesListSection />
    </div>
  );
}
