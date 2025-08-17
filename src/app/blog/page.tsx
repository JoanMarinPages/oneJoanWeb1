
import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Header } from '@/components/page/header';
import { Footer } from '@/components/page/footer';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} legacyBehavior>
              <a className="block">
                <Card className="h-full hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

