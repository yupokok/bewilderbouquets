export interface Bouquet {

    bouquetId: string
    name: string
    type: string
    basePrice: number
    description: string
    flowers: string[]
    mushrooms: string[]
    wrap: string
    image: string
}

export interface BouquetOrder {
        bouquetOrderId:string
        bouquetId: string
        name: string
        wrap: string
        image: string
        size: string
        finalPrice: number
    }

export interface Package {
    bouquetOrderId: string
    
    senderName: string
    senderNumber: string

    recipientName: string
    recipientNumber: string
    deliveryAddress: string

    occasion: string
    message: string
    finalPrice: number
}

export interface Cart{
    packages: Package[]
}


export interface Order {
    username: string
    email: string
    comments: string
    cart: Cart
  }