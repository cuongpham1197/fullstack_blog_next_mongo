import connect from "@/utils/db";
import Post from "@/models/Post";


export default async function handler(req, res) {
    if (req.method === "GET") {
        const id = req.query.id;
        try {
            await connect();

            const post = await Post.findById(id);

            res.status(200).json({ post });
        } catch (err) {
            res.status(500).json("Error")
        }
    }

    if (req.method === "DELETE") {
        const id = req.query.id;
        try {
            await connect();

            await Post.findByIdAndDelete(id);

            res.status(200).json({ message: "Topic Deleted" })
        } catch (err) {
            res.status(500).json("Error")
        }
    }
}