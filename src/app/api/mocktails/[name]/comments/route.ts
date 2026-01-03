import { supabaseAnon } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);

  const { data, error } = await supabaseAnon
    .from('comments')
    .select('*, recipes!inner(title)')
    .eq('recipes.title', decodedName)
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const { recipe_id, user_id, content } = await request.json();

    const { data, error } = await supabaseAnon
      .from('comments')
      .insert([{ recipe_id, user_id, content }])
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}