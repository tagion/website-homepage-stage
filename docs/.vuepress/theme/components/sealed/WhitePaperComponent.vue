<template>
	<div class="whitepaper">
		<b-container>
			<div class="whitepaper">
				<div class="whitepaper-left">
					<img src="/icons/whitepaper-icon.png" class="whitepaper-left-img"/>
				</div>

				<div class="whitepaper-right">
					<h2 class="whitepaper__text"> White Paper </h2>

					<p class="whitepaper__text paragraph1">
						DEX Protocol. Hashgraph Consensus. DART Database. Inclusive Governance.
					</p>

					<div class="whitepaper__download">
						<p class="whitepaper__download-text paragraph1">
							White Paper
						</p>
						<button
							href="https://github.com/tagion/resources/raw/master/technical-paper/tagion-technical-paper.pdf"
							@click="$analytics.triggerEvent({category: 'Exploration', action: 'WhitepaperDownload', fields: {placement: 'Landing'}})"
							reveal
						>
							Download
						</button>
					</div>
				</div>
			</div>
		</b-container>
	</div>
</template>

<script>
	export default {};
</script>

<style src="../../styles/whitepaper-component.scss" lang="scss"></style>