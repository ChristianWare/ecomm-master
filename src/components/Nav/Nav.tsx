import styles from "./Nav.module.css";
import { getCart } from "@/wix-api/cart";



export default async function Navbar() {
  const cart = await getCart(); // pulled in cart from custom cart api

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
