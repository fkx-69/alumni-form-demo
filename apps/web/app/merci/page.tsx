import Link from "next/link"

import { Button } from "@workspace/ui/components/button"

export default function MerciPage() {
  return (
    <main className="min-h-svh p-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        <h1 className="text-2xl font-semibold">Merci</h1>
        <p className="text-sm leading-6 text-muted-foreground">
          Votre fiche demo a bien ete soumise. Aucune donnee n&apos;est
          conservee dans cette demo.
        </p>
        <div>
          <Button asChild variant="outline">
            <Link href="/">Retour au formulaire</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
