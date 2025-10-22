"use client"

import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/products.ts"
import styles from "./product-card.module.css"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  // Handle add to cart with toast notification
  const handleAddToCart = () => {
    // Add item to cart
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })

    if (typeof window !== "undefined" && (window as any).showToast) {
      ;(window as any).showToast(`${product.name} added to cart!`, "success")
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image || "/placeholder.svg"} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <button onClick={handleAddToCart} className={styles.button}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
