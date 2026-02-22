import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection, GuideSection, AboutPreview } from "@/components/home-sections"
import { PostCard } from "@/components/post-card"
import { AdContainer } from "@/components/ad-container"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default async function HomePage() {
  const supabase = await createClient()

  const { data: posts } = await supabase
    .from("posts")
    .select("id, title, slug, excerpt, category, published_at, created_at, cover_image")
    .eq("published", true)
    .order("published_at", { ascending: false })
    .limit(6)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <AdContainer className="mx-auto my-8 max-w-4xl px-4" slot="home-top" />

        {/* Latest Posts */}
        <section className="px-4 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl lg:px-6">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
                  Ultimos Posts
                </h2>
                <p className="text-muted-foreground">
                  Artigos, dicas e experiencias sobre bolsas no Canada.
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:flex"
              >
                Ver todos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {posts && posts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-border bg-muted/30 py-16 text-center">
                <p className="text-lg font-medium text-muted-foreground">
                  Em breve novos conteudos!
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Estamos preparando artigos incriveis sobre o ELAP.
                </p>
              </div>
            )}

            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                Ver todos os posts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <AdContainer className="mx-auto mb-8 max-w-4xl px-4" slot="home-mid" />

        <GuideSection />

        <AboutPreview />

        <AdContainer className="mx-auto my-8 max-w-4xl px-4" slot="home-bottom" />
      </main>
      <Footer />
    </div>
  )
}
