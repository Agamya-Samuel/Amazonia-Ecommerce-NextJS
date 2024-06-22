import { carts, orderItems, orders, products } from '@/db/schema'
import {
  cartItemSchema,
  paymentResultSchema,
  shippingAddressSchema,
} from '@/lib/validator'
import { InferSelectModel } from 'drizzle-orm'
import { z } from 'zod'

// PRODUCTS
export type Product = InferSelectModel<typeof products>

// CART
export type Cart = InferSelectModel<typeof carts>
export type CartItem = z.infer<typeof cartItemSchema>

export type ShippingAddress = z.infer<typeof shippingAddressSchema>
export type PaymentResult = z.infer<typeof paymentResultSchema>

// ORDERS

export type Order = InferSelectModel<typeof orders> & {
  orderItems: OrderItem[]
  user: { name: string | null; email: string }
}
export type OrderItem = InferSelectModel<typeof orderItems>
