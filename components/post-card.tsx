import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string | null
  category: string
  published_at: string | null
  created_at: string
  cover_image: string | null
}

export function PostCard({ post }: { post: Post }) {
  const date = post.published_at || post.created_at
  const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md">
      {post.cover_image && (
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={post.cover_image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {post.category}
        </span>
        <h3 className="mb-2 text-lg font-bold leading-snug text-foreground text-balance">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
        {post.excerpt && (
          <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center justify-between pt-2">
          <time className="flex items-center gap-1.5 text-xs text-muted-foreground" dateTime={date}>
            <Calendar className="h-3.5 w-3.5" />
            {formattedDate}
          </time>
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary/80"
          >
            Ler mais
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
