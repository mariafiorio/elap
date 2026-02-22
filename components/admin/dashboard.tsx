"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Plus, Edit, Trash2, Eye, EyeOff, LogOut, LayoutDashboard } from "lucide-react"
import { useState } from "react"

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string | null
  category: string
  published: boolean
  featured: boolean
  created_at: string
  published_at: string | null
}

export function AdminDashboard({ posts, userEmail }: { posts: Post[]; userEmail: string }) {
  const router = useRouter()
  const [deleting, setDeleting] = useState<string | null>(null)

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/auth/login")
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este post?")) return
    setDeleting(id)
    const supabase = createClient()
    await supabase.from("posts").delete().eq("id", id)
    router.refresh()
    setDeleting(null)
  }

  const togglePublish = async (id: string, currentStatus: boolean) => {
    const supabase = createClient()
    await supabase
      .from("posts")
      .update({
        published: !currentStatus,
        published_at: !currentStatus ? new Date().toISOString() : null,
      })
      .eq("id", id)
    router.refresh()
  }

  const publishedCount = posts.filter((p) => p.published).length
  const draftCount = posts.filter((p) => !p.published).length

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <LayoutDashboard className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="text-lg font-bold text-foreground">Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:block">{userEmail}</span>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Ver Site
            </Link>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 lg:px-6">
        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">Total de Posts</p>
            <p className="mt-1 text-3xl font-bold text-foreground">{posts.length}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">Publicados</p>
            <p className="mt-1 text-3xl font-bold text-primary">{publishedCount}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">Rascunhos</p>
            <p className="mt-1 text-3xl font-bold text-muted-foreground">{draftCount}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Posts</h2>
          <Link
            href="/admin/novo"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Plus className="h-4 w-4" />
            Novo Post
          </Link>
        </div>

        {/* Posts List */}
        {posts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-muted/30 py-16 text-center">
            <p className="text-lg font-medium text-muted-foreground">Nenhum post criado ainda.</p>
            <p className="mt-1 text-sm text-muted-foreground">Crie seu primeiro post clicando no botao acima.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-foreground">{post.title}</h3>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        post.published
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {post.published ? "Publicado" : "Rascunho"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {post.category} &middot; {new Date(post.created_at).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => togglePublish(post.id, post.published)}
                    className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    title={post.published ? "Despublicar" : "Publicar"}
                  >
                    {post.published ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                    {post.published ? "Despublicar" : "Publicar"}
                  </button>
                  <Link
                    href={`/admin/editar/${post.id}`}
                    className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <Edit className="h-3.5 w-3.5" />
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    disabled={deleting === post.id}
                    className="flex items-center gap-1.5 rounded-md border border-destructive/30 px-3 py-1.5 text-xs font-medium text-destructive transition-colors hover:bg-destructive/10 disabled:opacity-50"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    {deleting === post.id ? "..." : "Excluir"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
