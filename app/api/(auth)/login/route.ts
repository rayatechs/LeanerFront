export async function POST(request: Request) {
  const newUser = { id: Date.now() };
 
  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}