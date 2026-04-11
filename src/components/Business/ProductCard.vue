<template>
  <li class="product-card__item">
    <div class="product-card__product">
      <img
        src="../../assets/images/HAVIT HV-G92 Gamepad.png"
        alt="HAVIT HV-G92 Gamepad"
        class="product-card__product-image"
      />
      <img
        src="../../assets/icons/heart.svg"
        alt="heart"
        width="24"
        height="24"
        class="product-card__product-fav"
      />
      <img
        src="../../assets/icons/Quick View.svg"
        alt="view"
        width="24"
        height="24"
        class="product-card__product-view"
      />
    </div>
    <h3 class="product-card__product-title">HAVIT HV-G92 Gamepad</h3>
    <div class="product-card__pricing">
      <span class="product-card__current-price">$120</span>
      <span class="product-card__original-price">$160</span>
    </div>
    <div class="product-card__rating">
      <span class="product-card__stars">
        <img
          src="../../assets/icons/Five star.svg"
          alt="Rating stars"
          class="product-card__star-icon"
        />
      </span>
      <span class="product-card__review-count">(88)</span>
    </div>
  </li>
</template>

<style lang="css" scoped>
.product-card__product {
  background-color: #fafafa;
  padding: 2.5rem;
  position: relative;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
}
.product-card__product-fav {
  top: 0.75rem;
  right: 0.75rem;
}
.product-card__product-view {
  top: 3.375rem;
  right: 0.75rem;
}
.product-card__product-fav,
.product-card__product-view {
  width: 2.25rem;
  height: 2.25rem;
  position: absolute;
  padding: 0.375rem;
  background-color: white;
  border-radius: 50%;
}
.product-card__product-title,
.product-card__original-price,
.product-card__current-price {
  font-weight: 500;
}
.product-card__pricing {
  padding-block: 0.5rem;
  display: flex;
  gap: 0.75rem;
}
.product-card__rating {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.product-card__review-count {
  font-weight: 600;
  font-size: var(--fs-sm);
  color: rgba(0, 0, 0, 0.5);
}
.product-card__current-price {
  color: var(--clr-primary-500);
}
.product-card__original-price {
  color: rgba(0, 0, 0, 0.5);
  text-decoration-line: line-through;
}
</style>
