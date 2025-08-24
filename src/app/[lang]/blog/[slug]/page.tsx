
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { Header } from '@/components/page/header';
import { Footer } from '@/components/page/footer';
import { getDictionary } from '@/lib/get-dictionary';
import { i18n, type Locale } from '@/i18n-config';
import { ShareButton } from '@/components/share-button';
import { Calendar, User } from 'lucide-react';

export async function generateStaticParams() {
  const posts = getAllPosts();
  const params = i18n.locales.flatMap((lang) => 
    posts.map((post) => ({
      slug: post.slug,
      lang,
    }))
  );
  return params;
}

export default async function BlogPostPage({ params }: { params: { slug: string, lang: Locale } }) {
  const post = getPostBySlug(params.slug);
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="flex flex-col min-h-screen">
      <Header dictionary={dictionary.Header} />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
            <div className="mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center justify-center gap-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>OneJoan</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                    </div>
                </div>
            </div>

          <div dangerouslySetInnerHTML={{ __html: post.content }} />

           <div className="mt-12 pt-8 border-t flex justify-center">
             <ShareButton title={post.title} />
          </div>

        </article>
      </main>
      <Footer />
    </div>
  );
}
