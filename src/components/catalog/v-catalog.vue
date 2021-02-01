<template>
  <div class="v-catalog">
    <router-link
      :to="{name: 'cart', params: {cart_data: CART}}"
    >
      <div class="v-catalog__link-to-cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>

  </div>
</template>

<script>
import vCatalogItem from '@/components/catalog/v-catalog-item';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  props: {},
  data() {
    return {
    }

  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API', // is used to access this method from 'store'
      // _key_ can be changed to more convenient name.
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    }
  },

  mounted() {
    console.log('v-catalog mounted');
    this.GET_PRODUCTS_FROM_API()
    .then( (response) => {
      if ( response.data ) {
        console.log('data right');
        // hide _loader_ animation here
      }
    });

  }
}
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link-to-cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border: solid 1px;
  }
  }
</style>