"use client"

import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import styles from "./navbar.module.css"

export function NavBar() {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandText}>TechHub</span>
        </Link>

        <div className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Shop
          </Link>
          <Link href="/cart" className={styles.cartLink}>
            <span className={styles.cartIcon}>🛒</span>
            Cart
            {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
          </Link>
        </div>
      </div>
    </nav>
  )
}
