import { getWixClient } from "@/lib/wix-client.base";
import styles from "./Nav.module.css";

async function getCart() {
  const wixClient = getWixClient();
  try {
    return await wixClient.currentCart.getCurrentCart();
  } catch (error) {
    if (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (error as any).details.applicationError.code === "OWNED_CART_NOT_FOUND"
    ) {
      return null;
    } else {
      throw error;
    }
  }
}

export default async function Navbar() {
  const cart = await getCart();

  const totalQuantity =
    cart?.lineItems.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0;

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div>Logo</div>
        <div>{totalQuantity} Items in your cart</div>
      </nav>
    </header>
  );
}
