import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./page.module.css";
import { delay } from "@/lib/utils";
import { Suspense } from "react";
import { getWixClient } from "@/lib/wix-client.base";
import Product from "@/components/Product/Product";
import Skeleton from "@/components/Skeleton/Skeleton";

export default function Home() {
  return (
    <main className={styles.page}>
      <LayoutWrapper>
        <h1>My Ecomm Masterclass</h1>
        <Suspense fallback={<LoadingSkeleton />}>
          <FeaturedProducts />
        </Suspense>
      </LayoutWrapper>
    </main>
  );
}

async function FeaturedProducts() {
  await delay(1000);

  const wixClient = getWixClient();

  const { collection } =
    await wixClient.collections.getCollectionBySlug("featured-products");

  if (!collection?._id) {
    return null;
  }

  const featuredProducts = await wixClient.products
    .queryProducts()
    .hasSome("collectionIds", [collection._id])
    .descending("lastUpdated")
    .find();

  if (!featuredProducts.items.length) {
    return null;
  }

  return (
    <div>
      {/* Render "Featured Products" only after loading */}
      <br />
      <br />
      <br />
      <h2>Featured Products</h2>
      <br />
      <div className={styles.container}>
        {featuredProducts.items.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <br />
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className={styles.container}>
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  );
}
