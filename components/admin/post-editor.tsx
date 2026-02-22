"use client"

import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowLeft, Save, Eye } from "lucide-react"
import Link from "next/link"

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  cover_image: string | null
  category: string
  tags: string[]
  published: boolean
  featured: boolean
  author_name: string
}

export function PostEditor({ post }: { post?: Post }) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [title, setTitle] = useState(post?.title || "")
  const [slug, setSlug] = useState(post?.slug || "")
  const [excerpt, setExcerpt] = useState(post?.excerpt || "")
  const [content, setContent] = useState(post?.content || "")
  const [coverImage, setCoverImage] = useState(post?.cover_image || "")
  const [category, setCategory] = useState(post?.category || "blog")
  const [tagsInput, setTagsInput] = useState(post?.tags?.join(", ") || "")
  const [published, setPublished] = useState(post?.published || false)
  const [featured, setFeatured] = useState(post?.featured || false)
  const [authorName, setAuthorName] = useState(post?.author_name || "Admin")

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  const handleTitleChange = (value: string) => {
    setTitle(value)
    if (!post) {
      setSlug(generateSlug(value))
    }
  }

  const handleSave = async (shouldPublish?: boolean) => {
    setSaving(true)
    setError(null)

    const supabase = createClient()
    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)

    const isPublishing = shouldPublish !== undefined ? shouldPublish : published

    const data = {
      title,
      slug,
      excerpt: excerpt || null,
      content,
      cover_image: coverImage || null,
      category,
      tags,
      published: isPublishing,
      featured,
      author_name: authorName,
      updated_at: new Date().toISOString(),
      ...(isPublishing && !post?.published ? { published_at: new Date().toISOString() } : {}),
    }

    let result
    if (post) {
      result = await supabase.from("posts").update(data).eq("id", post.id)
    } else {
      result = await supabase.from("posts").insert(data)
    }

    if (result.error) {
      setError(result.error.message)
      setSaving(false)
      return
    }

    router.push("/admin")
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <Link
            href="/admin"
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-2">
            {post && post.published && (
              <Link
                href={`/blog/${post.slug}`}
                target="_blank"
                className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary"
              >
                <Eye className="h-3.5 w-3.5" />
                Ver Post
              </Link>
            )}
            <button
              onClick={() => handleSave(false)}
              disabled={saving || !title || !content}
              className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary disabled:opacity-50"
            >
              Salvar Rascunho
            </button>
            <button
              onClick={() => handleSave(true)}
              disabled={saving || !title || !content}
              className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              {saving ? "Salvando..." : "Publicar"}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        {error && (
          <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-6">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">Titulo</label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="rounded-lg border border-input bg-card px-4 py-3 text-lg font-semibold text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Titulo do post"
            />
          </div>

          {/* Slug */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">Slug (URL)</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="titulo-do-post"
            />
          </div>

          {/* Excerpt */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">Resumo</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              className="resize-none rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Breve descricao do post para listagem e SEO"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              Conteudo (HTML)
            </label>
            <p className="text-xs text-muted-foreground">
              {'Use tags HTML como <h2>, <p>, <ul>, <li>, <strong>, <a> para formatar o conteudo.'}
            </p>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={20}
              className="resize-y rounded-lg border border-input bg-card px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder={'<h2>Introducao</h2>\n<p>Seu conteudo aqui...</p>'}
            />
          </div>

          {/* Grid: Category, Author, Cover Image */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">Categoria</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="blog">Blog</option>
                <option value="guia">Guia</option>
                <option value="dicas">Dicas</option>
                <option value="experiencia">Experiencia</option>
                <option value="recursos">Recursos</option>
                <option value="vida-no-canada">Vida no Canada</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">Autor</label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Nome do autor"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">Imagem de Capa (URL)</label>
            <input
              type="url"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="https://exemplo.com/imagem.jpg"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">Tags (separadas por virgula)</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="ELAP, Canada, bolsa, intercambio"
            />
          </div>

          {/* Options */}
          <div className="flex flex-wrap gap-6 rounded-xl border border-border bg-card p-5">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="h-4 w-4 rounded border-input accent-primary"
              />
              <span className="text-sm text-foreground">Publicado</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="h-4 w-4 rounded border-input accent-primary"
              />
              <span className="text-sm text-foreground">Destaque</span>
            </label>
          </div>
        </div>
      </main>
    </div>
  )
}
