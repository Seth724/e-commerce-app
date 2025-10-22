# TechHub - Modern E-Commerce Application

A fully-functional e-commerce app built with **Next.js 16**, **React 19**, and **Context API**. Features a beautiful dark theme, responsive design, and smooth user interactions.

## 🎯 Key Features

### ✨ Price Range Filter
- Dual range sliders for min/max price filtering
- Real-time product filtering
- "View All Products" button to reset
- Automatically calculates max price from inventory

### 🔔 Toast Notifications
- Success notifications when items are added to cart
- Auto-dismisses after 3 seconds
- Smooth slide-in animation
- Non-intrusive design

### 📱 Responsive Grid Layout
- **Desktop:** 4 columns
- **Tablet:** 3 columns  
- **Mobile:** 2 columns
- Efficient use of screen space
- Professional appearance

### 🛒 Complete Shopping Cart
- Add/remove items
- Adjust quantities
- Real-time cart badge
- Order summary with tax calculation
- Clear cart functionality

### 🎨 Beautiful UI
- Dark theme with cyan accents
- Smooth hover effects
- Professional typography
- Consistent design system

## 🚀 Quick Start

### Installation
\`\`\`bash
# Clone or download the project
cd ecommerce-app

# Install dependencies (if needed)
npm install

# Run development server
npm run dev

# Open http://localhost:3000
\`\`\`

### Deploy to Vercel
\`\`\`bash
# Click "Publish" in v0 interface
# Or push to GitHub and connect to Vercel
\`\`\`

## 📁 Project Structure

\`\`\`
app/
├── page.tsx              # Products page with filter
├── layout.tsx            # Root layout
├── cart/page.tsx         # Shopping cart page
└── globals.css           # Global styles

components/
├── product-card.tsx      # Product display
├── navbar.tsx            # Navigation
├── price-filter.tsx      # Price range filter
├── cart-item.tsx         # Cart item component
└── toast-notification.tsx # Notifications

lib/
├── cart-context.tsx      # State management
└── products.ts           # Product data
\`\`\`

## 🎓 Learning Resources

### Understanding the Code

**State Management (No Zustand!):**
- Uses React Context API for simplicity
- `lib/cart-context.tsx` - Cart state provider
- `useCart()` hook - Access cart anywhere

**Responsive Design:**
- CSS Grid with `auto-fill` and `minmax()`
- Mobile-first approach
- Breakpoints at 768px, 1024px, 480px

**Performance:**
- `useMemo` for filtered products
- Lazy component rendering
- Optimized CSS with variables

**Styling:**
- CSS Modules for component isolation
- CSS variables for theming
- Dark theme with cyan accents

## 🎨 Color System

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #00d4ff | Buttons, links, accents |
| Background | #0f1419 | Main background |
| Card | #1a1f26 | Card backgrounds |
| Text | #ffffff | Primary text |
| Success | #10b981 | Checkout button |
| Danger | #ef4444 | Delete/remove |

## 📊 Product Data

12 sample products included:
- Premium Wireless Headphones ($199.99)
- Smartwatch Pro ($299.99)
- Portable Charger ($49.99)
- USB-C Cable ($19.99)
- Wireless Mouse ($79.99)
- Mechanical Keyboard ($149.99)
- Phone Stand ($29.99)
- Screen Protector ($14.99)
- Laptop Stand ($89.99)
- Webcam HD ($129.99)
- Desk Lamp ($59.99)
- Bluetooth Speaker ($99.99)

## 🔧 How Features Work

### Price Filter
\`\`\`tsx
// User moves slider → state updates → products re-filter
const filteredProducts = useMemo(() => {
  return products.filter(p => p.price >= minPrice && p.price <= maxPrice)
}, [minPrice, maxPrice])
\`\`\`

### Toast Notifications
\`\`\`tsx
// Add to cart → trigger notification
(window as any).showToast(`${product.name} added to cart!`, "success")
\`\`\`

### Cart Management
\`\`\`tsx
// Add item or increase quantity
const addItem = (item) => {
  const existing = state.items.find(i => i.id === item.id)
  if (existing) return { ...existing, quantity: existing.quantity + 1 }
  return { ...item, quantity: 1 }
}
\`\`\`

## 📱 Responsive Breakpoints

\`\`\`css
/* Desktop: 4 columns */
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

/* Tablet (max-width: 1024px): 3 columns */
grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

/* Mobile (max-width: 768px): 2 columns */
grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

/* Extra small (max-width: 480px): 2 columns */
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
\`\`\`

## 🎯 User Workflows

### Shopping
1. Browse products on home page
2. Use price filter to narrow down options
3. Click "Add to Cart" on desired items
4. See green notification confirming addition
5. Cart badge updates with count

### Checkout
1. Click "Cart" in navbar
2. Review items and quantities
3. Adjust quantities or remove items
4. See order summary with total
5. Click "Proceed to Checkout"

### Filtering
1. Scroll to "Filter by Price"
2. Drag sliders to set budget
3. Products update instantly
4. Click "View All Products" to reset

## 🚀 Performance Features

- **Optimized Rendering:** useMemo prevents unnecessary re-renders
- **CSS Grid:** Efficient layout without JavaScript
- **CSS Variables:** Fast theme switching
- **Lazy Loading:** Images load on demand
- **Minimal Dependencies:** No heavy libraries

## 📈 Future Enhancements

- [ ] Search functionality
- [ ] Product categories
- [ ] User accounts (Supabase)
- [ ] Payment integration (Stripe)
- [ ] Product reviews
- [ ] Wishlist feature
- [ ] Order history
- [ ] Inventory tracking

## 🤝 Contributing

Feel free to customize:
- Add more products in `lib/products.ts`
- Modify colors in `app/globals.css`
- Adjust layout in `.module.css` files
- Add new features in `components/`

## 📝 License

Open source - use freely for learning and projects!

## 🎓 What You'll Learn

- Next.js 16 with App Router
- React 19 hooks and Context API
- CSS Grid and responsive design
- State management without Redux
- Component composition
- CSS Modules
- Dark theme implementation

---

**Built with ❤️ using Next.js, React, and modern web technologies**
