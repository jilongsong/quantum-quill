import Header from "./components/header";
import Hero from "./components/hero";
import RecommendedSection from "./components/recommended-section";
import FloatingMusicPlayer from "@/components/floating-music-player";
export default function Dashboard() {
  return (
    <div className="min-h-screen pb-5 bg-background">
    <Header />
    <main className="container mx-auto p-4">
      <Hero />
      <RecommendedSection />
      {/* <HotSection />
      <ChartsSection /> */}
    </main>
    <FloatingMusicPlayer></FloatingMusicPlayer>
  </div>
  );
}
