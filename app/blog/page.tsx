import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PostCard } from "@/components/post-card"
import { AdContainer } from "@/components/ad-container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos, dicas e experiencias sobre o programa ELAP e bolsas para estudar no Canada.",
}

export default async function BlogPage() {
  const supabase = await createClient()

  const { data: posts } = await supabase
    .from("posts")
    .select("id, title, slug, excerpt, category, published_at, created_at, cover_image")
    .eq("published", true)
    .order("published_at", { ascending: false })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary px-4 py-14">
          <div className="mx-auto max-w-6xl lg:px-6">
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground">Blog</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Artigos, guias e dicas sobre o programa ELAP, processo de candidatura e vida no Canada.
            </p>
          </div>
        </section>

        <AdContainer className="mx-auto my-8 max-w-4xl px-4" slot="blog-top" />

        <section className="px-4 py-10">
          <div className="mx-auto max-w-6xl lg:px-6">
            {posts && posts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, i) => (
                  <div key={post.id}>
                    <PostCard post={post} />
                    {i === 2 && (
                      <AdContainer className="mt-6 sm:hidden" slot="blog-inline" />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-border bg-muted/30 py-20 text-center">
                <p className="text-lg font-medium text-muted-foreground">
                  Nenhum post publicado ainda.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Volte em breve para novos conteudos!
                </p>
              </div>
            )}
          </div>
        </section>

        <AdContainer className="mx-auto mb-8 max-w-4xl px-4" slot="blog-bottom" />
      </main>
      <Footer />
    </div>
  )
}
