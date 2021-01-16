app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: /*html*/ `<div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} star{{ review.rating > 1 ? 's' : ''}}
        <br/>
        "{{ review.review }}"
        <br/>
        User {{ review.recommend ? 'recommmends' : "doesn't recommend" }} this product
        </li>
      </ul>
    </div>`
})