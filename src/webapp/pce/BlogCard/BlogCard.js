import React from "react";
import styles from "./BlogCard.module.scss";
import { Link } from "react-router-dom";
import { Button } from "components/elements";
import CardImage from "../CardImage/CardImage";

export default ({ post, layout = "grid" }) => {
  return (
    <CardImage image={post.image} layout={layout}>
      <div className={styles.card}>
        <h3>
          <Link to={"/blog/" + post.id}>{post.title}</Link>
        </h3>
        <div className={styles.extra}>
          
        </div>
        <p>{post.short}</p>

        <div className={styles.btn}>
          <Button to={"/blog/" + post.id} hoverType="solid-gray-tb">
            Read More
          </Button>
        </div>
      </div>
    </CardImage>
  );
};