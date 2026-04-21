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
    <ProductsList :products="productsStore.products" />
    <span class="btn" @click="loadMore">Load more ...</span>
  </div>
</template>

<script setup>
import ProductsList from "@/components/Business/ProductsList.vue";
import { useProductsStore } from "@/stores/products";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const productsStore = useProductsStore();
const route = useRoute();

onMounted(() => {
  productsStore.fetchProducts({
    category: category.value,
    reset: true,
  });
});

const selectedSort = ref("HighestRating");
const sortBy = ref("rating");
const order = ref("desc");

const category = computed(() => {
  return route.params.category || null;
});

watch(selectedSort, async (newVal) => {
  if (newVal == "HighestRating") {
    sortBy.value = "rating";
    order.value = "desc";
  } else if (newVal == "PriceLowHigh") {
    sortBy.value = "price";
    order.value = "asc";
  } else if (newVal == "PriceHighLow") {
    sortBy.value = "price";
    order.value = "desc";
  }

  productsStore.fetchProducts({
    category: category.value,
    sortBy: sortBy.value,
    order: order.value,
    reset: true,
  });
});

function loadMore() {
  productsStore.fetchProducts({
    category: category.value,
    skip: productsStore.products.length,
    sortBy: sortBy.value,
    order: order.value,
  });
}
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
