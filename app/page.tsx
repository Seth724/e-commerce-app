"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { PriceFilter } from "@/components/price-filter"
import { ToastContainer } from "@/components/toast-notification"
import { products } from "@/lib/products"
import styles from "./page.module.css"

export default function Home() {
  // State to track min and max price for filtering
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(999)

  // Calculate the maximum price from all products
  const maxProductPrice = Math.max(...products.map((p) => p.price))

  // Filter products based on selected price range
  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice)
  }, [minPrice, maxPrice])

  // Handle price filter change
  const handleFilterChange = (min: number, max: number) => {
    setMinPrice(min)
    setMaxPrice(max)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Header section */}
        <div className={styles.header}>
          <h1 className={styles.title}>Our Products</h1>
          <p className={styles.subtitle}>Discover our premium collection of tech accessories</p>
        </div>

        {/* Price filter component */}
        <PriceFilter onFilterChange={handleFilterChange} maxPrice={maxProductPrice} />

        {/* Products count display */}
        <div className={styles.productCount}>
          Showing {filteredProducts.length} of {products.length} products
        </div>

        {/* Products grid - displays products in rows */}
        <div className={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className={styles.gridItem}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className={styles.noProducts}>
              <p>No products found in this price range. Try adjusting your filter!</p>
            </div>
          )}
        </div>
      </div>

      {/* Toast notification container */}
      <ToastContainer />
    </main>
  )
}
