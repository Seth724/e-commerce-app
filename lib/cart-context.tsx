"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

// Create the cart context
const CartContext = createContext<CartContextType | undefined>(undefined)

// Cart provider component - wraps the app to provide cart state
export function CartProvider({ children }: { children: ReactNode }) {
  // State to store all items in the cart
  const [items, setItems] = useState<CartItem[]>([])

  // Add item to cart or increase quantity if already exists
  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        // Item already in cart - increase quantity
        return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
      }
      // New item - add to cart with quantity 1
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  // Remove item from cart completely
  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== id))
  }

  // Update quantity of an item
  const updateQuantity = (id: number, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((i) => (i.id === id ? { ...i, quantity: Math.max(0, quantity) } : i)).filter((i) => i.quantity > 0),
    )
  }

  // Clear all items from cart
  const clearCart = () => {
    setItems([])
  }

  // Calculate total price of all items
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  // Calculate total number of items
  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const value: CartContextType = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Custom hook to use cart context - makes it easy to access cart anywhere
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
