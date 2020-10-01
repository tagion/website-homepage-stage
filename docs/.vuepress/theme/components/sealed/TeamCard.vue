<template>
  <a
    :href="link"
    target="_blank"
    rel="nofollow noopener noreferrer"
    class="team-table__card"
  >
    <div class="team-table__card-bio">
      <div class="team-table__card-avatar">
        <img
          loading="lazy"
          class="lazy"
          :data-src="image"
        />
      </div>
      <div class="team-table__card-header">
				<div class="team-table__card-name">{{name}}</div>
				<div class="team-table__card-position">{{title}}</div>
				<div class="team-table__card-about">
					<div v-html="aboutFormatted"></div>
				</div>
				<div class="team-table__card-read-more">LinkedIn</div>
			</div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["name", "title", "link", "image", "about"],
  computed: {
    aboutFormatted: function() {
      return this.about.replace(/(?:\r\n|\r|\n)/g, "<br>");
    }
  }
};
</script>