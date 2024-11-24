export async function GET(req: Request) {
    const data = {id:1, name: "John"}
    return Response.json(data);
}