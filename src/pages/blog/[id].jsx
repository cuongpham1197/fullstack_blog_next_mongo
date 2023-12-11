import React from "react";
import styles from "./pageId.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map((item) => (
        { params: { id: item.id.toString() } }
    ));
    return (
        {
            paths,
            fallback: false,
        }
    );
}

export async function getStaticProps({ params }) {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return {
        props: { data },
        revalidate: 1
    }
}


// export async function generateMetadata({ params }) {

//     const post = await getData(params.id)
//     return {
//         title: post.title,
//         description: post.desc,
//     };
// }

const BlogPost = ({ data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.desc}>
                        {data.desc}
                    </p>
                    <div className={styles.author}>
                        <Image
                            src={data.img}
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>{data.username}</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={data.img}
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    {data.content}
                </p>
            </div>
        </div>
    );
};

export default BlogPost;