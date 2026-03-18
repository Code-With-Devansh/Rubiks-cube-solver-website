import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AchievementSection from "@/components/AchievementSection";
import ProblemSection from "@/components/ProblemSection";
import SystemOverview from "@/components/SystemOverview";
import ArchitectureSection from "@/components/ArchitectureSection";
import AlgorithmDeepDive from "@/components/AlgorithmDeepDive";
import HardwareSection from "@/components/HardwareSection";
import DemoSection from "@/components/DemoSection";
import GallerySection from "@/components/GallerySection";
import ContributionSection from "@/components/ContributionSection";
import GitHubSection from "@/components/GitHubSection";
import FutureScopeSection from "@/components/FutureScopeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-slate-200">
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Achievement banner */}
      <AchievementSection />

      {/* Thin divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e2a38] to-transparent" />
      </div>

      {/* Problem Statement */}
      <ProblemSection />

      {/* System Pipeline Overview */}
      <SystemOverview />

      {/* Architecture - 3 cards */}
      <ArchitectureSection />

      {/* Algorithm Deep Dive */}
      <AlgorithmDeepDive />

      {/* Hardware */}
      <HardwareSection />

      {/* Demo Videos */}
      <DemoSection />

      {/* Gallery */}
      <GallerySection />

      {/* My Contribution */}
      <ContributionSection />

      {/* GitHub */}
      <GitHubSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
