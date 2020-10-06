<template>
	<div class="alphanet">
		<b-container>
			<div class="alphanet-heading">
				<h2> AlphaOne Network Release </h2>
				<p class="paragraph1">
					Tagion has released its first public network, called AlphaOne Network. This creates the first opportunity
					for the community and developers to test the network's functionalities.
				</p>
				<brand-button
					target="_blank"
					href="https://github.com/tagion/alpha_one"
					@click="$analytics.triggerEvent({category: 'Exploration', action: 'Alphanet', fields: {placement: 'Landing'}})"
				>
					Read More on GitHub
				</brand-button>
			</div>

			<div class="alphanet-cards">
				<div class="alphanet-cards-first-column">
					<div class="alphanet-cards-card alphanet-cards-card_left">
						<img src="/icons/alphanet/alphanet-icon-api.svg" class="alphanet-cards-card__img" />
						<h3> Network API & Discovery Protocol </h3>
						<p class="paragraph1">
							We are testing the Node discovery in a distributed setup, and the transaction API.
							The discussion around the API is open, critique, and new ideas are welcome.
						</p>
					</div>

					<div class="alphanet-cards-card alphanet-cards-card_right">
						<img src="/icons/alphanet/alphanet-icon-crowd.svg" class="alphanet-cards-card__img" />
						<h3> Proof of Community </h3>
						<p class="paragraph1">
							We are testing the Node selection algorithm and trust system models and experimenting with parameters that affect trust scores.
						</p>
					</div>
				</div>

				<div class="alphanet-cards-second-column">
					<div class="alphanet-cards-card alphanet-cards-card_left">
						<img src="/icons/alphanet/alphanet-icon-exchange.svg" class="alphanet-cards-card__img" />
						<h3> Basic DEX Algorithms </h3>
						<p class="paragraph1">
							DEX development entering the active stage. We are starting to integrate with other chains via Lightning algorithms.
						</p>
					</div>

					<div class="alphanet-cards-card alphanet-cards-card_right">
						<img src="/icons/alphanet/alphanet-icon-balance.svg" class="alphanet-cards-card__img" />
						<h3> Network Stability & Capacity </h3>
						<p class="paragraph1">
							A distributed network suggests a variety of hardware, working simultaneously.
							We are actively testing the stability and how we can ensure minimal hardware requirements are met.
						</p>
					</div>
				</div>

				<div class="alphanet-cards-third-column">
					<div class="alphanet-cards-card alphanet-cards-card_left">
						<img src="/icons/alphanet/alphanet-icon-database.svg" class="alphanet-cards-card__img" />
						<h3> DART & Sharding </h3>
						<p class="paragraph1">
							DART (the database) was designed with sharding in mind. Finally,
							we are able to test DART synchronization algorithms and shards in the wild.
						</p>
					</div>

					<div class="alphanet-cards-card alphanet-cards-card_right">
						<img src="/icons/alphanet/alphanet-icon-contract.svg" class="alphanet-cards-card__img" />
						<h3> Stateless Smart Contract Engine </h3>
						<p class="paragraph1">
							Testing the web-assembly based virtual engine for execution of stateless smart contracts. Fine-tuning our resource-limitations.
						</p>
					</div>
				</div>
			</div>

			<div class="alphanet-extra-info">
				<div class="alphanet-extra-info-alphaone">
					<h4> AlphaOne Monitor </h4>

					<p class="paragraph2">
						Tagion AlphaOne comes with a monitor function, which lets you better understand how the AlphaOne network is operating, The monitor provides useful
						information such as network status, active nodes, and a hashgraph showing recent network communication and event ordering between nodes.
					</p>

					<brand-button to="/alphaOne">
						Go to AlphaOne Monitor
					</brand-button>
				</div>

				<div class="alphanet-extra-info-bounty">
					<h4> Bounty Program </h4>

					<p class="paragraph2">
						To gain data and optimize the network Tagion has started a bounty hunt for developers and others who wish to
						test and help improve the network. More information on Tagion and the bounty hunt can be found
						<a target="_blank" class="underline" href="https://t.me/tagionchat"> here</a>, or contact Tagion CSO
						<a target="_blank" class="underline" href="mailto:rn@i25s.com"> Roxana Nasoi </a>.
					</p>
				</div>
			</div>
		</b-container>
	</div>
</template>

<script>
	import Reveal from "@theme/components/transition/Reveal";
	import BrandButton from "@theme/components/sealed/BrandButton";

	export default {
  components: {
    BrandButton,
    Reveal,
  },
};
</script>

<style src="../../styles/alpha-one-component.scss" lang="scss"></style>