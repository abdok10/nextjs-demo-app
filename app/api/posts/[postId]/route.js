import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    const { params } = await context;
    console.log(params);
    await db.post.delete({
      where: { id: parseInt(params.postId) },
    });
    return new Response(null, { status: 204 });
  } catch (err) {
    return NextResponse.json(
      { message: "could not delete post" },
      { status: 500 }
    );
  }
}

export async function PATCH(req, context) {
  try {
    const { params } = await context;
    const { title, content, tagId } = await req.json();
    await db.post.update({
      where: { id: parseInt(params.postId) },
      data: {
        title,
        content,
        tagId: parseInt(tagId),
      },
    });
    return NextResponse.json({ message: "update success" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "could not update post" }, { status: 500 });
  }
}
export async function GET(req, context) {
  try {
    const { params } = await context;
    const post = await db.post.findUnique({
      where: { id: parseInt(params.postId) },
      include: { tag: true },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "could not get the post" }, { status: 500 });
  }
}
