export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    image: "/wireless-headphones.png",
    description: "High-quality sound with noise cancellation",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smartwatch Pro",
    price: 299.99,
    image: "/modern-smartwatch.png",
    description: "Advanced fitness tracking and notifications",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Portable Charger",
    price: 49.99,
    image: "/portable-charger-lifestyle.png",
    description: "20000mAh fast charging power bank",
    category: "Accessories",
  },
  {
    id: 4,
    name: "USB-C Cable",
    price: 19.99,
    image: "/usb-cable.png",
    description: "Durable 2-meter charging cable",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 79.99,
    image: "/wireless-mouse.png",
    description: "Ergonomic design with precision tracking",
    category: "Electronics",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 149.99,
    image: "/mechanical-keyboard.png",
    description: "RGB backlit with custom switches",
    category: "Electronics",
  },
  {
    id: 7,
    name: "Phone Stand",
    price: 29.99,
    image: "/phone-stand.jpg",
    description: "Adjustable aluminum stand for all phones",
    category: "Accessories",
  },
  {
    id: 8,
    name: "Screen Protector",
    price: 14.99,
    image: "/screen-protector.png",
    description: "Tempered glass for maximum protection",
    category: "Accessories",
  },
  {
    id: 9,
    name: "Laptop Stand",
    price: 89.99,
    image: "/laptop-stand.png",
    description: "Ergonomic cooling stand for laptops",
    category: "Accessories",
  },
  {
    id: 10,
    name: "Webcam HD",
    price: 129.99,
    image: "/classic-webcam.png",
    description: "1080p HD with auto-focus and microphone",
    category: "Electronics",
  },
  {
    id: 11,
    name: "Desk Lamp",
    price: 59.99,
    image: "/modern-desk-lamp.png",
    description: "LED lamp with adjustable brightness",
    category: "Accessories",
  },
  {
    id: 12,
    name: "Bluetooth Speaker",
    price: 99.99,
    image: "/bluetooth-speaker.jpg",
    description: "Portable speaker with 12-hour battery",
    category: "Electronics",
  },
]
