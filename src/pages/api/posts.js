// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post";

export default async function GET(req, res) {
  try {
    await connect();
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json('Database error')
  }
}