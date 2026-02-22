import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { PostEditor } from "@/components/admin/post-editor"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin - Novo Post",
  robots: { index: false, follow: false },
}

export default async function NewPostPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect("/auth/login")

  return <PostEditor />
}
