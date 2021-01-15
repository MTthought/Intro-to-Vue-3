const app = Vue.createApp({
    // same as, data: function()
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        addToCart(productId){
            this.cart.push(productId)
        },
        decrementCart(productId){
            const index = this.cart.indexOf(productId)
            if(index > -1){
                this.cart.splice(index, 1)
            }
        }
    }
})
