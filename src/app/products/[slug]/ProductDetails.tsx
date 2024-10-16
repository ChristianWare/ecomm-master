"use client";

import WixImage from "@/components/WixImage/WixImage";
import styles from "./ProductDetails.module.css";
import { products } from "@wix/stores";
import ProductOptions from "./ProductOptions";

interface ProductDetailsProps {
  product: products.Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className={styles.container}>
      <WixImage
        mediaIdentifier={product.media?.mainMedia?.image?.url}
        alt={product.media?.mainMedia?.image?.altText}
        width={1000}
        height={1000}
      />
      <div className={styles.details}>
        <h1>{product.name}</h1>
        {product.brand && (
          <div>
            <b>Brand:</b>
            {product.brand}
          </div>
        )}
        <br />
        {product.ribbon && (
          <div>
            <b>Ribbon:</b>
            {product.ribbon}
          </div>
        )}
        <br />
        {product.description && (
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        )}
        <br />
        <ProductOptions product={product} />
      </div>
    </div>
  );
}
