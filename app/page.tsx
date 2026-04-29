import styles from "./styles.module.css";
import { Container } from "@/components/Container";
import { HiddenUntilScroll } from "@/components/HiddenUntilScroll";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { AppShowcase } from "@/components/AppShowcase";
import { CallToAction } from "@/components/CallToAction";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Hero } from "@/components/Hero";
import { projects } from "@/content/projects";
import { apps } from "@/content/apps";
import { processSteps } from "@/content/process";
import { copy } from "@/content/copy";

const Home = () => {
  return (
    <Container>
      <div className={styles.whiteContainer}>
        <Hero
          tagline={copy.hero.tagline}
          headline={copy.hero.headline}
          cta={copy.hero.cta}
          href={copy.hero.href}
          checklist={copy.hero.checklist}
        />
        <About heading={copy.about.heading} body={copy.about.body} />
        <div className={styles.grid}>
          <HiddenUntilScroll>
            <Services services={copy.services} />
          </HiddenUntilScroll>
          <HiddenUntilScroll>
            <ProjectShowcase
              heading={copy.work.heading}
              subheading={copy.work.subheading}
              projects={projects}
            />
          </HiddenUntilScroll>
          <HiddenUntilScroll>
            <AppShowcase
              heading={copy.apps.heading}
              subheading={copy.apps.subheading}
              apps={apps}
            />
          </HiddenUntilScroll>
          <HiddenUntilScroll>
            <Process heading={copy.process.heading} steps={processSteps} />
          </HiddenUntilScroll>
          <HiddenUntilScroll>
            <CallToAction
              heading={copy.cta.heading}
              body={copy.cta.body}
              buttonLabel={copy.cta.buttonLabel}
              href={copy.cta.href}
            />
          </HiddenUntilScroll>
        </div>
      </div>
    </Container>
  );
};

export default Home;
