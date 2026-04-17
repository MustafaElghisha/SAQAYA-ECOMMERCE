<template>
  <div class="explore">
    <div class="explore__header">
      <h1 class="explore__title">Explore Our Products</h1>
      <select class="explore__sort" v-model="selectedSort">
        <option class="explore__sort-option" value="HighestRating">
          Highest rating
        </option>
        <option class="explore__sort-option" value="PriceLowHigh">
          Price: Low to high
        </option>
        <option class="explore__sort-option" value="PriceHighLow">
          Price: High to Low
        </option>
      </select>
    </div>
    <ProductsList :products="products" />
    <span class="btn" @click="loadMore">Load more ...</span>
  </div>
</template>

<script>
import ProductsList from "@/components/Business/ProductsList.vue";
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("products/fetchProducts", {
      category: this.category,
      reset: true,
    });
  },
  data() {
    return {
      selectedSort: "HighestRating",
      sortBy: "rating",
      order: "desc",
    };
  },
  watch: {
    selectedSort(newVal) {
      if (newVal == "HighestRating") {
        this.sortBy = "rating";
        this.order = "desc";
      } else if (newVal == "PriceLowHigh") {
        this.sortBy = "price";
        this.order = "asc";
      } else if (newVal == "PriceHighLow") {
        this.sortBy = "price";
        this.order = "desc";
      }

      this.$store.dispatch("products/fetchProducts", {
        category: this.category,
        sortBy: this.sortBy,
        order: this.order,
        reset: true,
      });
    },
  },
  methods: {
    loadMore() {
      this.$store.dispatch("products/fetchProducts", {
        category: this.category,
        skip: this.products.length,
        sortBy: this.sortBy,
        order: this.order,
      });
    },
  },
  computed: {
    ...mapState("products", ["products"]),
    category() {
      return this.$route.params.category || null;
    },
  },
  components: {
    ProductsList,
  },
};
</script>

<style lang="css" scoped>
.explore {
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
  max-width: 75rem;
  padding-inline: 0.625rem;
  margin: 4.375rem auto;
}
.explore__title {
  font-weight: 600;
  font-size: var(--fs-3xl);
}

.explore__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.explore__sort {
  color: var(--clr-neutral-100);
  background-color: #423840;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  appearance: none;
  background-image: url("../../assets/icons/DropDown.svg");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  min-width: 12rem;
}

.btn {
  align-self: center;
}
</style>
