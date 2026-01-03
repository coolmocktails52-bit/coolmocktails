"use client"

import { useState, useEffect } from "react"
import { MessageSquare } from "lucide-react"
import { useUser } from "@/app/context/UserContext"
import SignInToComment from "./SignInToComment"

interface Comment {
  id: string; 
  content: string;
  created_at: string;
  user_id: string;
}

interface Props {
  mocktailName: string; 
  recipeId: string;    
}

export default function Comments({ mocktailName, recipeId }: Props) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useUser();

  // --- FETCH ON MOUNT ---
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/mocktails/${encodeURIComponent(mocktailName)}/comments`, { 
          cache: "no-store" 
        });
        if (res.ok) {
          const data = await res.json();
          setComments(data);
        }
      } catch (error) {
        console.error("Failed to load comments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [mocktailName]); // Re-run if the mocktail changes

  // --- HANDLE POST ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user?.id || !recipeId || !newComment.trim()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/mocktails/${encodeURIComponent(mocktailName)}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipe_id: recipeId,
          user_id: user.id,
          content: newComment,
        }),
      });

      if (res.ok) {
        const saved = await res.json();
        setComments((prev) => [saved, ...prev]);
        setNewComment("");
      } else {
        const errorData = await res.json();
        console.error("Server Error:", errorData);
      }
    } catch (err) {
      console.error("Post error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-20">
      <h3 className="flex items-center gap-2 text-white mb-6 uppercase tracking-widest text-sm font-bold">
        <MessageSquare size={18} className="text-yellow-600" /> Community Reflections
      </h3>

      {user?.isAuthenticated ? (
        <form onSubmit={handleSubmit} className="mb-10 bg-white/5 p-6 rounded-2xl border border-white/10">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your experience with this blend..."
            className="w-full bg-transparent border-b border-white/10 text-white mb-6 focus:border-yellow-600 outline-none transition-colors resize-none py-2"
            rows={3}
          />
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-gray-500 uppercase">Posting as {user.username || "Alchemist"}</span>
            <button 
              disabled={isSubmitting}
              className="bg-yellow-600 text-black px-8 py-2 rounded-full text-xs font-bold hover:bg-yellow-500 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Infusing..." : "Post Comment"}
            </button>
          </div>
        </form>
      ) : (
        <SignInToComment />
      )}

      <div className="space-y-8">
        {isLoading ? (
          <div className="text-gray-600 italic text-sm">Loading reflections...</div>
        ) : comments && comments.length > 0 ? (
          comments.map((c) => (
            <div key={c.id} className="border-l-2 border-yellow-600/20 pl-6 group">
              <p className="text-gray-300 italic mb-2 group-hover:text-white transition-colors">
                "{c.content}"
              </p>
              <p className="text-[10px] text-yellow-600/50 uppercase tracking-widest">
                {new Date(c.created_at).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <div className="text-gray-600 italic text-sm">No reflections yet. Be the first to write.</div>
        )}
      </div>
    </section>
  )
}