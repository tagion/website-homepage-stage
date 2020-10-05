<template>
	<div class="hero">
		<b-container>
			<h2> Why Tagion? </h2>

			<p class="paragraph1">
				The world has too many financial (and physical) borders. Tagion was born to break down those borders
				and enable seamlessly peer-to-peer money transfers. Cheap, fair, and fast for anyone anywhere.
			</p>

			<div class="hero-cards">

				<div class="hero-cards-first-row">
					<div class="hero-cards-left">
						<div class="hero-cards__card">
							<img src="/icons/decentralized-icon.png" />
							<h4> Decentralized Exchange </h4>
							<p class="paragraph2">
								Pay with anything anywhere. DEX is an open protocol that enables a trustless exchange of any digital currency that supports HTLC (Hash Time Locked Contract).
							</p>
						</div>
					</div>

					<div class="hero-cards-right">
						<div class="hero-cards__card">
							<img src="/icons/supply-icon.png" />
							<h4> Elastic Money Supply </h4>
							<p class="paragraph2">
								To scale properly, the money supply must match demand. Tagion does not have a hard cap, but makes use of elastic supply, which aims to create a stable price level.
							</p>
						</div>
					</div>
				</div>

				<div class="hero-cards-second-row">
					<div class="hero-cards-left">
						<div class="hero-cards__card">
							<img src="/icons/governance-icon.png" />
							<h4> Inclusive Governance </h4>
							<p class="paragraph2">
								Tagion and its resources are governed as a Common. All have equal right to participate, but it is the contribution which gives reward and power.
							</p>
						</div>
					</div>

					<div class="hero-cards-right">
						<div class="hero-cards__card">
							<img src="/icons/technology-icon.png" />
							<h4> Scalable Core Technology </h4>
							<p class="paragraph2">
								Tagion builds on a modular and scalable core. Each module can be changed and optimised. The main modules comprise of the distributed database, scripting engine, Hashgraph and gossip mechanism.
							</p>
						</div>
					</div>
				</div>

			</div>
		</b-container>
	</div>
</template>

<script>
	import NewsletterForm from "@theme/components/sealed/NewsletterForm";
	export default {};
</script>

<style src="../../styles/hero-component.scss" lang="scss"></style>