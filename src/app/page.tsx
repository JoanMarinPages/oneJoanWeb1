import { Header } from '@/components/page/header';
import { Hero } from '@/components/page/hero';
import { Services } from '@/components/page/services';
import { Portfolio } from '@/components/page/portfolio';
import { AiTool } from '@/components/page/ai-tool';
import { Footer } from '@/components/page/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <AiTool />
      </main>
      <Footer />
    </div>
  );
}
