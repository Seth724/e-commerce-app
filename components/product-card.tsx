"use client"

import Image from "next/image"
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

    if (typeof window !== "undefined" && window && 'showToast' in window) {
      ;(window as { showToast: (message: string, type: string) => void }).showToast(`${product.name} added to cart!`, "success")
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={product.image || "/placeholder.svg"} 
          alt={product.name} 
          className={styles.image}
          width={300}
          height={300}
        />
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
