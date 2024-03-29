export interface Bouquet {
    bouquetId: string
    type: string
    name: string
    mushrooms: string[]
    flowers: string[]
    description: string
    wrap: string
    image: string
    basePrice: number
}

export interface Package {
    packageId: string
    bouquetId: string

    name: string
    size: string
    quantity: number
    totalPrice: number

    senderName: string
    senderNumber: string

    recipientName: string
    recipientNumber: string
    deliveryAddress: string

    occasion: string
    message: string
}


export interface Order {
    username: string
    email: string
    comments: string
    cart: Package[]
  }