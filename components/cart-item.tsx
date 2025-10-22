"use client"

import { useCart } from "@/lib/cart-context"
import type { CartItem as CartItemType } from "@/lib/cart-context"
import styles from "./cart-item.module.css"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className={styles.item}>
      <img src={item.image || "/placeholder.svg"} alt={item.name} className={styles.image} />

      <div className={styles.details}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
      </div>

      <div className={styles.controls}>
        <div className={styles.quantityControl}>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className={styles.quantityButton}>
            −
          </button>
          <span className={styles.quantity}>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className={styles.quantityButton}>
            +
          </button>
        </div>

        <span className={styles.subtotal}>${(item.price * item.quantity).toFixed(2)}</span>

        <button onClick={() => removeItem(item.id)} className={styles.removeButton}>
          Remove
        </button>
      </div>
    </div>
  )
}
