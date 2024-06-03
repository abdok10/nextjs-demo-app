import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await db.post.findMany();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
    return req.json();
  try {
    // const body = req.json();
    // const post = await db.post.create({
    //   data: {
    //     create: [
    //       { title: body.title }, 
    //       { content: body.content }, 
    //       { tagId: body.tagId }, 
    //     ],
    //   },
    // });
    // return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not create post" },
      { status: 500 }
    );
  }
}
