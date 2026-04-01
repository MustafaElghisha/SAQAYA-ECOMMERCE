<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__logo">
        <img src="../assets/icons/Logo.svg" alt="Website Logo" />
      </div>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">Home</li>
          <li class="header__nav-item">Contact</li>
          <li class="header__nav-item">About</li>
        </ul>
      </nav>

      <div class="header__search">
        <div class="header__search-wrapper">
          <input
            type="text"
            placeholder="What are you looking for?"
            class="header__search-input"
          />
          <img
            src="../assets/icons/Search.svg"
            alt="Search"
            class="header__search-icon"
          />
        </div>
        <div class="header__cart">
          <img
            src="../assets/icons/Cart.svg"
            alt="Cart"
            width="32"
            height="32"
          />
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  border-bottom: 1px solid rgba(0, 0, 0, 50%);
}
.header {
  max-width: 1200px;
  margin-inline: auto;
  padding: 16px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__nav-list {
  display: flex;
  align-items: center;
  column-gap: 48px;
}

.header__nav-item {
  color: #000000;
}

.header__search {
  display: flex;
  align-items: center;
  column-gap: 32px;
}

.header__search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.header__search-input {
  outline: none;
  border: none;
  min-width: 244px;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: #f5f5f5;
  font-size: 12px;
}
.header__search-icon {
  position: absolute;
  right: 12px;
}
</style>
