<template>
  <router-link
    @click="$emit('click')"
    v-if="to"
    :to="to"
    v-bind="$attrs"
    class="brand-button"
    :class="{['brand-button--'+variant]: true}"
  >
    <div class="brand-button__wrapper">
      <div class="brand-button__icon"></div>
    </div>
		<div class="brand-button__text">
			<slot />
		</div>
  </router-link>

  <a
    v-else
    @click="$emit('click')"
    :href="href"
    v-bind="$attrs"
    class="brand-button"
    :class="{['brand-button--'+variant]: true}"
  >
    <div class="brand-button__wrapper">
      <div class="brand-button__icon"></div>
    </div>
		<div class="brand-button__text">
			<slot />
		</div>
  </a>
</template>

<script>
export default {
  props: ["variant", "reveal", "to", "href", "bottom"]
};
</script>

<style src="../../styles/brand-button-component.scss" lang="scss"></style>
