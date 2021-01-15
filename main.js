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
        decrementCart(){
            if(this.cart.length > 0){
                this.cart.pop()
            }
        }
    }
})
