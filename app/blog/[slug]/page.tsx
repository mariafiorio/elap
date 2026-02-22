import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdContainer } from "@/components/ad-container"
import Link from "next/link"
import { Calendar, ArrowLeft, User, Tag } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: post } = await supabase
    .from("posts")
    .select("title, excerpt")
    .eq("slug", slug)
    .eq("published", true)
    .single()

  if (!post) return { title: "Post nao encontrado" }

  return {
    title: post.title,
    description: post.excerpt || undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      type: "article",
      locale: "pt_BR",
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single()

  if (!post) notFound()

  const date = post.published_at || post.created_at
  const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article className="px-4 py-10">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao blog
            </Link>

            <header className="mb-8">
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
              <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground text-pretty">
                  {post.excerpt}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author_name}
                </span>
                <time className="flex items-center gap-1.5" dateTime={date}>
                  <Calendar className="h-4 w-4" />
                  {formattedDate}
                </time>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {post.cover_image && (
              <div className="mb-10 overflow-hidden rounded-xl">
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            )}

            <AdContainer className="mb-10" slot="post-top" />

            <div
              className="prose prose-lg max-w-none text-foreground prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground prose-p:leading-relaxed prose-p:text-foreground/85 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-li:text-foreground/85"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <AdContainer className="mt-10" slot="post-bottom" />

            <div className="mt-12 border-t border-border pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para o blog
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
