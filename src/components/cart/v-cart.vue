<template>
  <div class="v-cart">
    <router-link
        :to="{name: 'catalog'}"
    >
      <div class="v-catalog__link-to-cart">Back to catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p
      v-if="!cart_data.length"
    >
      There are no products in cart...</p>
    <v-cart-item
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @decrement="decrement(index)"
      @increment="increment(index)"
    />
    <div class="v-cart__total">
      <p class="total__name">Total: </p>
      <p>{{ cartTotalCost }} руб</p>
    </div>
  </div>
</template>

<script>
import vCartItem from './v-cart-item';
import { mapActions } from 'vuex';
export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  methods: {
    ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);

    },
    decrement( index ) {
      this.DECREMENT_CART_ITEM( index );
    },
    increment( index ) {
      this.INCREMENT_CART_ITEM( index );
    }
  },
  data() {
    return {}
  },
  computed: {
    cartTotalCost() {
      let result = [0];

      for (let item of this.cart_data ) {
        result.push( item.price * item.quantity );
      }

      result = result.reduce( (sum, el) => {
        return sum + el;
      })

      return result;
    }
  }
}
</script>

<style lang="scss">
  .v-cart {
    margin-bottom: 100px;
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: $padding * 2 $padding * 3;
      display: flex;
      justify-content: center;
      background: $green-bg;
      color: #fff;
      font-size: 20px;
    }
    .total__name {
      margin-right: $margin * 2;
    }
  }
</style>