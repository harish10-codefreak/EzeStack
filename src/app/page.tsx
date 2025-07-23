import { ModernHeroWithGradients } from "@/components/blocks/heros/modern-hero-with-gradients";
import { ThreeColumnBentoGrid } from "@/components/blocks/bento-grids/three-column-bento-grid";
import { FeaturesWithStickyScroll } from "@/components/blocks/feature-sections/features-with-sticky-scroll";
import TeamGridSection from "@/components/blocks/team/team-grid-section";
import AboutSplitSection from "@/components/blocks/about/about-split-section";
import { TestimonialsMasonryGrid } from "@/components/blocks/testimonials/testimonials-masonry-grid";
import { ContactFormGridWithDetails } from "@/components/blocks/contact-forms/contact-form-grid-with-details";
import { FooterWithGrid } from "@/components/blocks/footers/footer-with-grid";

export default function Home() {
  return (
    <div className="bg-white">
      <ModernHeroWithGradients />
      <ThreeColumnBentoGrid />
      <FeaturesWithStickyScroll />
      <TeamGridSection />
      <AboutSplitSection />
      <TestimonialsMasonryGrid />
      <ContactFormGridWithDetails />
      <FooterWithGrid />
    </div>
  );
}