import { db } from "@/db";
import { User } from "@/db/schema";
import { userSchema } from "@/user.schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user = await req.json();
  try {
    const { name, email, imageUrl } = userSchema.parse(user);

    const userRes = await db.select().from(User).where(eq(User.email, email));

    if (userRes.length) {
      return NextResponse.json({ user: userRes[0] });
    } else {
      const newUserRes = await db
        .insert(User)
        .values({ name, email, imageUrl })
        .returning({
          id: User.id,
          name: User.name,
          email: User.email,
          imageUrl: User.imageUrl,
          credits: User.credits,
        });
      return Response.json({ user: newUserRes[0] });
    }
  } catch (error) {
    console.error(error);
    return new Response("request failed", {
      status: 400,
      statusText: "some error check backend logs",
    });
  }
}
