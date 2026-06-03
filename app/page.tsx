import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { LocationAnalysis } from "@/components/location-analysis"
import { AudienceScenarios } from "@/components/audience-scenarios"
import { CommunicationTasks } from "@/components/communication-tasks"
import { ConceptMoodboard } from "@/components/concept-moodboard"
import { ElementSystem } from "@/components/element-system"
import { BeforeAfter } from "@/components/before-after"
import { Conclusions } from "@/components/conclusions"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <LocationAnalysis />
      <AudienceScenarios />
      <CommunicationTasks />
      <ConceptMoodboard />
      <ElementSystem />
      <BeforeAfter />
      <Conclusions />
    </main>
  )
}
