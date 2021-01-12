const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            image: './assets/images/socks_green.jpg',
            product: 'Socks',
            url: 'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3',
            inventory: 10,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1, colour: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2, colour: 'blue', image: './assets/images/socks_blue.jpg'}
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
        changeImg(img){
            this.image = img
        }
    }
})
