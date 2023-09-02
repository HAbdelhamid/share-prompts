import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//GET
export const GET = async (req) => {
  const { tag, username } = req.query;
  try {
    await connectToDB();
    const prompt = await collection.find(query).toArray();
    if (!prompt) return new Response("prompt not found", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("failed to fetch all prompts", { status: 500 });
  }
};
