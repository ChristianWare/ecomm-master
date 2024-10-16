/* eslint-disable @next/next/no-img-element */
import { products } from "@wix/stores";
import styles from "./Product.module.css";
import Link from "next/link";
// import { media as wixMedia } from "@wix/sdk";

interface ProductProps {
  product: products.Product;
}

export default function Product({ product }: ProductProps) {
  const mainImage = product.media?.mainMedia?.image;

  // const resizedImageUrl = mainImage?.url
  //   ? wixMedia.getScaledToFillImageUrl(mainImage.url, 200, 200, {})
  //   : null;

  const imageUrl = mainImage?.url || "/placeholder.png";

  return (
    <article className={styles.container}>
      <Link href={`/products/${product.slug}`}>
        <div className={styles.imgContainer}>
          <img
            src={imageUrl || "/placeholder.png"}
            alt={mainImage?.altText || ""}
            className={styles.img}
          />
        </div>
        {product.name}
        <div dangerouslySetInnerHTML={{ __html: product.description || "" }} />
      </Link>
    </article>
  );
}
