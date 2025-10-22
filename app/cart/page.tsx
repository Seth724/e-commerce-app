"use client"

import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { CartItem } from "@/components/cart-item"
import styles from "./cart.module.css"

export default function CartPage() {
  const { items, getTotalPrice, clearCart } = useCart()
  const totalPrice = getTotalPrice()

  if (items.length === 0) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.emptyCart}>
            <h2 className={styles.emptyTitle}>Your cart is empty</h2>
            <p className={styles.emptyText}>Start shopping to add items to your cart</p>
            <Link href="/">
              <button className={styles.continueButton}>Continue Shopping</button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Shopping Cart</h1>

        <div className={styles.content}>
          <div className={styles.itemsColumn}>
            <div className={styles.itemsList}>
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className={styles.summaryColumn}>
            <div className={styles.summary}>
              <h3 className={styles.summaryTitle}>Order Summary</h3>

              <div className={styles.summaryRow}>
                <span className={styles.label}>Subtotal:</span>
                <span className={styles.value}>${totalPrice.toFixed(2)}</span>
              </div>

              <div className={styles.summaryRow}>
                <span className={styles.label}>Shipping:</span>
                <span className={styles.value}>Free</span>
              </div>

              <div className={styles.summaryRow}>
                <span className={styles.label}>Tax:</span>
                <span className={styles.value}>${(totalPrice * 0.1).toFixed(2)}</span>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>Total:</span>
                <span className={styles.totalValue}>${(totalPrice * 1.1).toFixed(2)}</span>
              </div>

              <button className={styles.checkoutButton}>Proceed to Checkout</button>

              <Link href="/">
                <button className={styles.continueButton}>Continue Shopping</button>
              </Link>

              <button onClick={clearCart} className={styles.clearButton}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
