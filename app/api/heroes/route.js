import heroes from '../../../data/heroes'; 

export async function GET() {
  return new Response(JSON.stringify(heroes), {
    headers: { 'Content-Type': 'application/json' },
  });
}
