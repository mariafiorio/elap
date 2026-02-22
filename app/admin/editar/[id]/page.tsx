import { createClient } from "@/lib/supabase/server"
import { redirect, notFound } from "next/navigation"
import { PostEditor } from "@/components/admin/post-editor"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin - Editar Post",
  robots: { index: false, follow: false },
}

interface Props {
  params: Promise<{ id: string }>
}

export default async function EditPostPage({ params }: Props) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect("/auth/login")

  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single()

  if (!post) notFound()

  return <PostEditor post={post} />
}
