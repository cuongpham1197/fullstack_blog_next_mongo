import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";


export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return { props: { data } }
}

const Blog = ({ data }) => {
    return (
        <div className={styles.mainContainer}>
            {data.map((item) => (
                <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={item.img}
                            alt=""
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.body}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Blog;