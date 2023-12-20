import connect from "@/utils/db"
import Post from "@/models/Post";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // const url = new URL(req.url);
    // const username = url.searchParams.get("username")
    const username = req.query.username;
    try {
      await connect();
      const posts = await Post.find(username && { username });
      res.status(200).json({ posts });
    } catch (err) {
      res.status(500).json('Database error')
    }
  }
  if (req.method === "POST") {
    const body = await req.body;
    // const newPost = new Post(body);

    try {
      await connect();

      // await newPost.save();
      await Topic.create(body);
      res.status(201).json({ message: "post created" });
    } catch (err) {
      res.status(500).json("Error")
    }
  }
}