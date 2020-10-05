<template>
	<div
		class="lcontainer-wrapper lcontainer-wrapper--alphanet"
		ref="alphaone"
	>
		<b-container class="lcontainer lcontainer--video">
			<reveal class="lcontainer__headline lcontainer__headline--small">
				<reveal
					child
					direction="up"
					opacity
				>
					<h2> AlphaOne Network Release </h2>
					<reveal
						child
						direction="up"
						opacity
						:delay="200"
					>
						<p>Tagion has released its first public network, called AlphaOne Network. This creates the first opportunity for the community and developers to test the network's functionalities.
						</p>
					</reveal>
					<reveal
						child
						direction="right"
						opacity
						:delay="500"
						class="mt-4"
					>
						<brand-button
							target="_blank"
							href="https://github.com/tagion/alpha_one"
							@click="$analytics.triggerEvent({category: 'Exploration', action: 'Alphanet', fields: {placement: 'Landing'}})"
							reveal
						>Read More on GitHub</brand-button>
					</reveal>
				</reveal>
			</reveal>
			<reveal>
				<div class="hero__cards feature-cards feature-cards--six">

					<div class="feature-card">
						<reveal
							child
							opacity
							direction="left"
							:delay="100"
						>
							<div class="feature-card__internal">
								<img src="/icons/alphanet/alphanet-icon-api.svg" />
								<h4>Network API & Discovery Protocol</h4>
								<p>We are testing the Node discovery in a distributed setup, and the transaction API. The discussion around the API is open, critique, and new ideas are welcome.</p>
							</div>
						</reveal>
					</div>

					<div class="feature-card">
						<reveal
							child
							opacity
							direction="left"
							:delay="200"
						>
							<div class="feature-card__internal">
								<img src="/icons/alphanet/alphanet-icon-crowd.svg" />
								<h4>Proof of Community</h4>
								<p>We are testing the Node selection algorithm and trust system models and experimenting with parameters that affect trust scores.</p>
							</div>
						</reveal>
					</div>

					<div class="feature-card">
						<reveal
							child
							opacity
							direction="left"
							:delay="300"
						>
							<div class="feature-card__internal">
								<img src="/icons/alphanet/alphanet-icon-exchange.svg" />
								<h4>Basic DEX Algorithms</h4>
								<p>DEX development entering the active stage. We are starting to integrate with other chains via Lightning algorithms.</p>
							</div>
						</reveal>
					</div>

					<div class="feature-card">
						<reveal
							child
							opacity
							direction="left"
							:delay="400"
						>
							<div class="feature-card__internal">
								<img src="/icons/alphanet/alphanet-icon-balance.svg" />
								<h4>Network Stability & Capacity </h4>
								<p>A distributed network suggests a variety of hardware, working simultaneously. We are actively testing the stability and how we can ensure minimal hardware requirements are met.</p>
							</div>
						</reveal>
					</div>

					<div class="feature-card">
						<reveal
							child
							opacity
							direction="left"
							:delay="400"
						>
							<div class="feature-card__internal">
								<img src="/icons/alphanet/alphanet-icon-database.svg" />
								<h4>DART & Sharding
								</h4>
								<p>DART (the database) was designed with sharding in mind. Finally, we are able to test DART synchronization algorithms and shards in the wild.</p>
							</div>
						</reveal>
					</div>

					<div class="feature-card">
						<reveal
							child
							opacity
							direction="left"
							:delay="400"
						>
							<div class="feature-card__internal">
								<img src="/icons/alphanet/alphanet-icon-contract.svg" />
								<h4>Stateless Smart Contract Engine

								</h4>
								<p>Testing the web-assembly based virtual engine for execution of stateless smart contracts. Fine-tuning our resource-limitations.</p>
							</div>
						</reveal>
					</div>

				</div>
				<div class="lcontainer-extra-information">
					<reveal
						child
						opacity
						direction="left"
						:delay="700"
						class="mb-3"
					>
						<p class="mb-1"><strong>AlphaOne Monitor</strong></p>
						<p class="mt-0">Tagion AlphaOne comes with a monitor function, which lets you better understand how the AlphaOne network is operating, The monitor provides useful information such as network status, active nodes, and a hashgraph showing recent network communication and event ordering between nodes.</p>

					</reveal>
					<reveal
						child
						direction="right"
						opacity
						:delay="500"
						class="mb-7"
					>
						<brand-button
							to="/alphaOne"
							reveal
						>Go to AlphaOne Monitor</brand-button>
					</reveal>
					<reveal
						child
						opacity
						direction="left"
						:delay="900"
					>
						<p class="mb-1"><strong>Bounty Program</strong></p>
						<p class="mt-0">To gain data and optimize the network Tagion has started a bounty hunt for developers and others who wish to test and help improve the network. More information on Tagion and the bounty hunt can be found <a
								target="_blank"
								class="underline"
								href="https://t.me/tagionchat"
							>here</a>, or contact Tagion CSO <a
								target="_blank"
								class="underline"
								href="mailto:rn@i25s.com"
							>Roxana Nasoi</a>.</p>

					</reveal>
				</div>
			</reveal>
		</b-container>
	</div>
</template>

<script>
	// import NewsletterForm from "@theme/components/sealed/NewsletterForm";
	import Reveal from "@theme/components/transition/Reveal";
	import BrandButton from "@theme/components/sealed/BrandButton";

	export default {
  data() {
    return {

    };
  },
  components: {
    // LayoutDefault,
    // RevealGroup,
    // WhitePaper: () => import("@theme/components/sealed/WhitePaper"),
    // Roadmap: () => import("@theme/components/sealed/Roadmap"),
    BrandButton,
    // DownloadBrandButton,
    // SocialButtons,
    // NewsletterForm,
    // TeamCard,
    Reveal,
		// News,
		// Intro,
  },
  methods: {
    // openTeamCard(teamMember) {
    //   this.selectedTeamMember = teamMember;
    // },
    // closeTeamCard() {
    //   this.selectedTeamMember = false;
    // },
    // scrollToAlphaOne() {
    //   this.$scrollTo(this.$refs["alphaone"]);
    // },
  },
};
</script>

<style src="../../styles/alpha-one-component.scss" lang="scss"></style>