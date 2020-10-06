<template>
	<b-container class="intro">
		<div class="intro-content">
			<div class="intro-content-left">
				<h1 class="intro-content-left-quote">
					Open Monetary and Banking System
				</h1>

				<p class="intro-content-left-summary paragraph1">
					Tagion is a decentralised and permissionless monetary and banking system run and owned by its users. Its genuinely
					fair and democratic governance model builds on the ideas and design principles of Nobel Memorial Prize winner in
					Economic Sciences, Elinor Ostrom. Tagion is self-sustainable and seen as a common resource that lets developers
					create new financial markets with a few clicks.
				</p>
			</div>

			<div class="intro-content-right">
				<div class="intro-content-right__video-wrapper">
					<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/2xPvrTZDAp8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
		</div>

		<div class="intro-buttons">
			<div class="intro-buttons-left">
				<a href="https://forum.tagion.org/t/new-members-intro-corner/30" target="_blank" class="btn btn_redirect">
					Discuss on Forum
				</a>
				<a href="https://t.me/tagionChat" target="_blank" class="btn btn_redirect">
					Chat in Telegram
				</a>
				<a href="#content" v-smooth-scroll class="btn btn_scroll">
					AlphaOne Release
				</a>
			</div>

			<div class="intro-buttons-newsletter">
				<newsletter-form class="mt-4" />
			</div>
		</div>
	</b-container>
</template>

<script>
	import NewsletterForm from "@theme/components/sealed/NewsletterForm";

	export default {
		components: {
			NewsletterForm,
		},
		// methods: {
		// 	scrollToAlphaOne() {
		// 		this.$scrollTo(this.$refs["alphaone"]);
		// 	},
		// },
	};
</script>

<style src="../../styles/intro-component.scss" lang="scss"></style>
