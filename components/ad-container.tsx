export function AdContainer({ className = "", slot = "auto" }: { className?: string; slot?: string }) {
  return (
    <aside
      className={`flex min-h-[100px] items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 ${className}`}
      aria-label="Espaco para anuncio"
      data-ad-slot={slot}
    >
      <p className="text-xs text-muted-foreground">Anuncio</p>
    </aside>
  )
}
