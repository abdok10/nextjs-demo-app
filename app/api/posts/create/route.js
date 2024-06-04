import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, content, tagId } = await req.json();
    const newPost = await db.post.create({
      data: {
        title,
        content,
        tagId: parseInt(tagId),
      },
    });
    return NextResponse.json(newPost, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "could not create post" },
      { status: 500 }
    );
  }
}
