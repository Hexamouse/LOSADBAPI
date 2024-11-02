// app/api/heroes/route.js
import heroes from '../../../data/heroes'; // Pastikan path ini benar

export async function GET() {
  return new Response(JSON.stringify(heroes), {
    headers: { 'Content-Type': 'application/json' },
  });
}
