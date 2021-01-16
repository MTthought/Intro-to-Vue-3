app.component('product-display', {
    props: {
      premium: {
        type: Boolean,
        required: true
      },
      cart: {
        type: Number,
        required: true
      }
    },
    template: /*html*/`<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="img" :alt="product" :class="{ 'out-of-stock-img': inventory === 0 }">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <!-- <p v-show="onSale">On sale</p> -->
        <p>{{ sale }}</p>
        <p v-if="inventory > 10">In stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
        <p v-else>Out of stock</p>
        <p>Shipping: {{ shipping }}</p>
        <product-details :details="details"></product-details>
        <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.colour }"></div>
        <ul>
          <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
        </ul>
        <!-- <a :href="url">link</a> -->
        <button class="button" @click="addToCart" :disabled="inventory === 0" :class="{ disabledButton: inventory === 0 }">Add to cart</button>
        <button class="button" @click="decrementCart" :disabled="cart.length === 0" :class="{ disabledButton: cart.length === 0 || inventory === 0 }">Remove item</button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
    data() {
        return {
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
            sizes: [36, 38, 42],
            reviews: []
        }
    },
    methods: {
        updateVariant(i){
            this.activeVariant = i
        },
        addToCart(){
          this.$emit('add-to-cart', this.variants[this.activeVariant].id)
        },
        decrementCart(){
          this.$emit('decrement-cart', this.variants[this.activeVariant].id)
        },
        addReview(review){
          this.reviews.push(review)
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
        },
        shipping(){
          if(this.premium){
            return 'free'
          }
          return 2.99
        }
    }
})