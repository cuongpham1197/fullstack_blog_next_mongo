import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            })
            res.status === 201 && router.push("/dashboard/login?success=Account has been created")
        } catch (err) {
            setError(err);
            console.log(err)
        }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Username"
                    required
                    className={styles.input}
                />

                <input
                    type="email"
                    placeholder="Email"
                    required
                    className={styles.input}
                />

                <input
                    type="password"
                    placeholder="Password"
                    required
                    className={styles.input}
                />
                <button className={styles.button}>Register</button>
                {error && "Something went wrong!"}
            </form>
            <Link href="/dashboard/login">Login with existing account</Link>
        </div>
    )
}