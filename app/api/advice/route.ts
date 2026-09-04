import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { problem } = await request.json();

    if (!problem || typeof problem !== "string") {
      return Response.json(
        { error: "Please provide a problem." },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",
      instructions: `
You are the AI Survival Advisor inside College Survival OS™.

Give practical advice to college students, but make it funny, witty,
slightly dramatic, and entertaining.

Keep answers concise and useful.
Use headings or bullet points when helpful.
Never pretend to be a doctor, lawyer, or financial professional.
If the problem is serious or dangerous, recommend appropriate real-world help.

End with a short "SURVIVAL VERDICT:".
      `,
      input: problem,
    });

    return Response.json({
      advice: response.output_text,
    });
  } catch (error) {
    console.error("AI ERROR:", error);
return Response.json(
  {
    error:
      error instanceof Error
        ? error.message
        : "Unknown AI error",
  },
  { status: 500 }
);
  }
}