/* eslint-disable @next/next/no-img-element */
import { products } from "@wix/stores";
import styles from "./Product.module.css";
import Link from "next/link";
import WixImage from "../WixImage/WixImage";
import { formatCurrency } from "@/lib/utils";
import DiscountBadge from "../DiscountBadge/DiscountBadge";

interface ProductProps {
  product: products.Product;
}

export default function Product({ product }: ProductProps) {
  const mainImage = product.media?.mainMedia?.image;

  return (
    <article className={styles.container}>
      <Link href={`/products/${product.slug}`}>
        <div className={styles.imgContainer}>
          <WixImage
            width={700}
            height={700}
            mediaIdentifier={mainImage?.url}
            alt={mainImage?.altText}
            className={styles.img}
          />
        </div>
        <br />
        <h3>{product.name}</h3>
        <br />
        <div dangerouslySetInnerHTML={{ __html: product.description || "" }} />
        <br />
        {product.ribbon && <p className={styles.ribbon}>{product.ribbon}</p>}
        {product.discount && <DiscountBadge data={product.discount} />}
        <br />
        <p>{getFormattedPrice(product)}</p>
      </Link>
    </article>
  );
}

function getFormattedPrice(product: products.Product) {
  const minPrice = product.priceRange?.minValue;
  const maxPrice = product.priceRange?.maxValue;

  if (minPrice && maxPrice && minPrice !== maxPrice) {
    return `from ${formatCurrency(minPrice, product.priceData?.currency)}`;
  } else {
    return (
      product.priceData?.formatted?.discountedPrice ||
      product.priceData?.formatted?.price ||
      "n/a"
    );
  }
}
