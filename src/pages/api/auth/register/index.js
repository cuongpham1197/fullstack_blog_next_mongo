import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, password } = await req.body;
        await connect();
        const hashedPassword = await bcrypt.hash(password, 5)

        const newUser = new User(
            {
                name,
                email,
                password: hashedPassword
            })

        try {
            await newUser.save();
            res.status(201).json({ message: "User has been created" })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}
