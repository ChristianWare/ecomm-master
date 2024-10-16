import { getProductBySlug } from "@/wix-api/products";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";
import styles from "./page.module.css";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const product = await getProductBySlug(slug);

  if (!product?._id) notFound();

  return (
    <main className={styles.container}>
      <ProductDetails product={product} />
      {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
    </main>
  );
}
