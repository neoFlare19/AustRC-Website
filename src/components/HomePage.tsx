import { HeroSection } from './HeroSection';
import { EventsSection } from './EventsSection';
import { EducationalProgramsSection } from './EducationalProgramsSection';
import { ResearchProjectsHomepageSection } from './ResearchProjectsHomepageSection';
import { TestimonialsSection } from './TestimonialsSection';
import { CollaborationsSection } from './CollaborationsSection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <EventsSection />
      <EducationalProgramsSection />
      <ResearchProjectsHomepageSection />
      <TestimonialsSection />
      <CollaborationsSection />
    </main>
  );
}