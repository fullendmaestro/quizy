import { NextResponse } from "next/server";
import { auth } from "@/app/(auth)/auth";
import { getQuizzesByUserId } from "@/lib/db/queries";

export async function GET() {
  const session = await auth();

  if (!session || !session.user) {
    return Response.json("Unauthorized!", { status: 401 });
  }

  // biome-ignore lint: Forbidden non-null assertion.
  const quizzes = await getQuizzesByUserId(session.user.id!);
  return NextResponse.json(quizzes);
}
