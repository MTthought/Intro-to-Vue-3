const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3',
            inventory: 10,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1, colour: 'green'},
                {id: 2, colour: 'blue'}
            ],
            sizes: [36, 38, 42]
        }
    }
})
