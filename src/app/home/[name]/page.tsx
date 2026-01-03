import { notFound } from "next/navigation"
import Comments from "./Comments"

interface PageProps {
  params: Promise<{ name: string }>
}

export default async function RecipePage({ params }: PageProps) {
  const resolvedParams = await params;
  const name = decodeURIComponent(resolvedParams.name);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Fetch Mocktail (includes the UUID 'id' needed for comments)
  const res = await fetch(`${baseUrl}/api/mocktails/${encodeURIComponent(name)}`, { cache: "no-store" });
  if (!res.ok) return notFound();
  const mocktail = await res.json();



  return (
    <div className="min-h-screen bg-[#050a0a] text-[#e0d7c6] px-6 pt-32 max-w-4xl mx-auto">
      <h1 className="text-6xl font-bold text-white mb-6 italic">{mocktail.name}</h1>

      <img
        src={mocktail.image}
        alt={mocktail.name}
        className="rounded-[2rem] border border-white/10 mb-10 w-full object-cover max-h-[500px]"
      />

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-yellow-600 mb-6 uppercase tracking-[0.3em] text-xs font-bold">The Essence</h3>
          <ul className="space-y-4">
            {mocktail.ingredients?.map((i: string, idx: number) => (
              <li key={idx} className="italic border-b border-white/5 pb-2">{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-yellow-600 mb-6 uppercase tracking-[0.3em] text-xs font-bold">The Ritual</h3>
          <p className="italic text-gray-400 leading-relaxed text-lg">{mocktail.method}</p>
        </div>
      </div>

      <div className="mt-20 pt-10 border-t border-white/10">
        <Comments
          mocktailName={name}
          recipeId={mocktail.id} // The UUID from your DB
        />
      </div>
    </div>
  )
}