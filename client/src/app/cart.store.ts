import { Injectable } from "@angular/core";
import { Cart, Package } from "./models";
import { ComponentStore } from "@ngrx/component-store";


const INIT_STATE: Cart = {
    packages:[]
}

@Injectable()
export class CartStore extends ComponentStore<Cart>{

    constructor() {
        super(INIT_STATE)
    }

    readonly addToCart = this.updater<Package>(
        (cart:Cart, pack:Package) => {
            const newCart:Cart = {
                packages:[...cart.packages, pack]
            }
            return newCart
        }
    )
    readonly getCart = this.select(
        (cart:Cart) => cart.packages
    )

    readonly getItemNoInCart = this.select(
        (cart:Cart) => {
            return cart.packages.length
        }
    )
    


    
}