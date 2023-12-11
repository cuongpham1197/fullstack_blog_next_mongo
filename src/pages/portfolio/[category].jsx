import React from "react";
import styles from "./pageCategory.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

export async function getStaticPaths() {
    const path = Object.keys(items);
    const paths = path.map((item) => (
        { params: { category: item } }
    ))
    return (
        {
            paths,
            fallback: false,
        }
    );
}

export async function getStaticProps({ params }) {
    const { category } = params;
    const data = items[category];
    return {
        props: { data, category },
    }
}

const Category = ({ data, category }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{category}</h1>

            {data.map((item) => (
                <div className={styles.item} key={item.id}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                        <Button text="See More" url="#" />
                    </div>
                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.img}
                            fill={true}
                            src={item.image}
                            alt=""
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Category;