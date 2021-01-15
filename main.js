const app = Vue.createApp({
    // same as, data: function()
    data() {
        return {
            cart: 0,
            brand: 'Vue Mastery',
            product: 'Socks',
            activeVariant: 0,
            url: 'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3',
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1, colour: 'green', image: './assets/images/socks_green.jpg', inventory: 50},
                {id: 2, colour: 'blue', image: './assets/images/socks_blue.jpg', inventory: 0}
            ],
            sizes: [36, 38, 42]
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        decrementCart(){
            if(this.cart > 0){
                this.cart -= 1
            }
        },
        updateVariant(i){
            this.activeVariant = i
        }
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`
        },
        sale(){
            if(this.onSale){
                return `${this.title} is on sale`
            }
            return ''
        },
        img() {
            return this.variants[this.activeVariant].image
        },
        inventory(){
            return this.variants[this.activeVariant].inventory
        }
    }
})
