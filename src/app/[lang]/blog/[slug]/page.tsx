
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { Header } from '@/components/page/header';
import { Footer } from '@/components/page/footer';
import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/i18n-config';

export async function generateStaticParams({ params: { lang } }: { params: { lang: Locale } }) {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
    lang,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string, lang: Locale } }) {
  const post = getPostBySlug(params.slug);
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="flex flex-col min-h-screen">
      <Header dictionary={dictionary.Header} />
      <main className="flex-1 container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-muted-foreground mb-8">{new Date(post.date).toLocaleDateString()}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
