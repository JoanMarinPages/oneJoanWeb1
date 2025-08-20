
import { Header } from '@/components/page/header';
import { Hero } from '@/components/page/hero';
import { RealEstate } from '@/components/page/real-estate';
import { Industrial } from '@/components/page/industrial';
import { Contact } from '@/components/page/contact';
import { Footer } from '@/components/page/footer';
import { Services } from '@/components/page/services';
import { Ecommerce } from '@/components/page/ecommerce';
import { AnimatedSection } from '@/components/page/animated-section';
import { MachineLearning } from '@/components/page/machine-learning';
import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/i18n-config';


export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header dictionary={dictionary.Header} />
      <main className="flex-1">
        <Hero />
        <AnimatedSection delay={0.2}>
          <Services />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <RealEstate backgroundVideoUrl="/assets/ondesVideo/social_yow_one_httpss.mj.runi52OdJstLhY_--ar_12869_--video_1_d5e997a6-1fa4-4a07-b786-86cf65bd9476_2.mp4" />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <Industrial backgroundVideoUrl="/assets/ondesVideo/social_yow_one_httpss.mj.runkqY7g-97hV4_--ar_12869_--video_1_48f32b7d-5daf-4bfe-b468-4628943ac79a_1.mp4" />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <MachineLearning backgroundVideoUrl="/assets/ondesVideo/social_yow_one_httpss.mj.runHb7pva_IXRU_--ar_12869_--video_1_d1590073-1217-4c55-ab72-085a3085ba55_0.mp4" />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <Ecommerce backgroundVideoUrl="/assets/ondesVideo/social_yow_one_httpss.mj.runHb7pva_IXRU_--ar_12869_--video_1_d1590073-1217-4c55-ab72-085a3085ba55_0.mp4" />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <Contact backgroundVideoUrl="/assets/ondesVideo/social_yow_one_httpss.mj.runvGCn32u5cHM_--ar_12869_--video_1_db1350cf-9e75-4647-af40-dfcd3d87446b_3.mp4" />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
