
import { Header } from '@/components/page/header';
import { Hero } from '@/components/page/hero';
import { RealEstate } from '@/components/page/real-estate';
import { Industrial } from '@/components/page/industrial';
import { Contact } from '@/components/page/contact';
import { Footer } from '@/components/page/footer';
import { Services } from '@/components/page/services';
import { About } from '@/components/page/about';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="space-y-20 md:space-y-32">
            <Services />
            <About />
            <RealEstate />
            <Industrial />
            <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
