"use client"

import { useState, useEffect } from "react"
import styles from "./toast-notification.module.css"

interface ToastProps {
  message: string
  type?: "success" | "error" | "info"
  duration?: number
}

export function Toast({ message, type = "success", duration = 3000 }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Auto-hide toast after duration
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!isVisible) return null

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.content}>
        {type === "success" && <span className={styles.icon}>✓</span>}
        {type === "error" && <span className={styles.icon}>✕</span>}
        {type === "info" && <span className={styles.icon}>ℹ</span>}
        <span className={styles.message}>{message}</span>
      </div>
    </div>
  )
}

// Toast container to manage multiple toasts
export function ToastContainer() {
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type: "success" | "error" | "info" }>>([])

  // Expose global function to add toasts
  useEffect(() => {
    ;(window as { showToast?: (message: string, type: "success" | "error" | "info") => void }).showToast = (message: string, type: "success" | "error" | "info" = "success") => {
      const id = Date.now().toString()
      setToasts((prev) => [...prev, { id, message, type }])

      // Auto-remove after 3 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, 3000)
    }
  }, [])

  return (
    <div className={styles.container}>
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} type={toast.type} />
      ))}
    </div>
  )
}
