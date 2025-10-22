"use client"

import type React from "react"

import { useState } from "react"
import styles from "./price-filter.module.css"

interface PriceFilterProps {
  onFilterChange: (minPrice: number, maxPrice: number) => void
  maxPrice: number
}

export function PriceFilter({ onFilterChange, maxPrice }: PriceFilterProps) {
  // State to track min and max price values
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice_state, setMaxPrice] = useState(maxPrice)

  // Handle min price change
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setMinPrice(value)
    onFilterChange(value, maxPrice_state)
  }

  // Handle max price change
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setMaxPrice(value)
    onFilterChange(minPrice, value)
  }

  // Reset filter to show all products
  const handleViewAll = () => {
    setMinPrice(0)
    setMaxPrice(maxPrice)
    onFilterChange(0, maxPrice)
  }

  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.title}>Filter by Price</h3>

      {/* Price range display */}
      <div className={styles.priceDisplay}>
        <span className={styles.priceLabel}>
          ${minPrice.toFixed(0)} - ${maxPrice_state.toFixed(0)}
        </span>
      </div>

      {/* Min price slider */}
      <div className={styles.sliderGroup}>
        <label className={styles.label}>Min Price: ${minPrice.toFixed(0)}</label>
        <input
          type="range"
          min="0"
          max={maxPrice}
          value={minPrice}
          onChange={handleMinChange}
          className={styles.slider}
        />
      </div>

      {/* Max price slider */}
      <div className={styles.sliderGroup}>
        <label className={styles.label}>Max Price: ${maxPrice_state.toFixed(0)}</label>
        <input
          type="range"
          min="0"
          max={maxPrice}
          value={maxPrice_state}
          onChange={handleMaxChange}
          className={styles.slider}
        />
      </div>

      {/* View All button */}
      <button onClick={handleViewAll} className={styles.viewAllButton}>
        View All Products
      </button>
    </div>
  )
}
