<template>
	<div class="how">
		<b-container>
			<h2> How do we do it? </h2>

			<div class="how-summary">
				<p class="paragraph1">
					Current cryptocurrency systems have failed to gain wide-spread adoption, as several problems prevent these from doing so.
				</p>
			</div>

			<div class="how-cards">
				<div class="how-cards-first-column">
					<div class="how-cards-left">
						<img src="/icons/network-throughput-icon.png" class="how-cards__icon"/>
						<h4> Network Throughput </h4>
						<p class="paragraph2">
							Tagion uses hashgraph for consensus, which in the Tagion implementation, makes it possible to process more than 20.000
							transactions per second per shard. In comparison, VISA does around 1,700 transactions per second on average.
						</p>
						<p class="paragraph2">
							Tagion is architected to be able to scale to hundreds of Shards that operate in tandem without loss of efficiency
						</p>
					</div>

					<div class="how-cards-right">
						<img src="/icons/scalability-icon.png" class="how-cards__icon"/>
						<h4> Scalability </h4>
						<p class="paragraph2">
							Combining Tagion DEX with DART provides Tagion with the speed and scalability needed to become an underlying network for any everyday financial services.
						</p>
					</div>
				</div>

				<div class="how-cards-second-column">
					<div class="how-cards-left">
						<img src="/icons/speed-of-transaction-icon.png" class="how-cards__icon"/>
						<h4> Speed of Transaction </h4>
						<p class="paragraph2">
							Transactions on Tagion are validated in between two or three seconds, placing it on par with major credit card operators in terms of validation speed.
						</p>
						<p class="paragraph2">
							A fast validation time is reached through the use of Hashgraph for consensus and an efficient (Patent Pending) gossip Mechanism.
							The Hashgraph algorithm and the accompanying mathematical proof was initially discovered by Leemon Baird.
						</p>
						<p class="paragraph2">
							The algorithm ensures that all nodes, infinite time, reach the same order of events - as long as more than two-thirds of the nodes in the network
							follow the same consensus rules. In doing so, the nodes confirm and validate any action on the network, such as a money transfer,
							money exchange, or data interactions.
						</p>
						<p class="paragraph2">
							The gossip mechanisms optimise data exchange between nodes to happen most efficiently.
						</p>
					</div>

					<div class="how-cards-right">
						<img src="/icons/market-liquidity-icon.png" class="how-cards__icon"/>
						<h4> Market Liquidity </h4>
						<p class="paragraph2">
							Better market liquidity results in a more efficient market. With Tagions as an intermediate currency, it is possible to exchange all tokenised currencies
							seamlessly. By pairing all alien currencies with Tagions, the resulting reduction of currency pairs enables a simpler market with higher liquidity.
						</p>
					</div>
				</div>

				<div class="how-cards-third-column">
					<div class="how-cards-left">
						<img src="/icons/storage-power-icon.png" class="how-cards__icon"/>
						<h4> Storage and Computial power </h4>
						<p class="paragraph2">
							Most DLTs use a decentralised, immutable database for storage. The blockchain data structure is immutable, meaning all data should be stored forever.
						</p>
						<p class="paragraph2">
							Tagion uses a distributed database for storage, meaning a node only stores a part of the data. DART (Distributed Archive of Random Transactions)
							gives away with immutability, and only the output of a transaction is stored, while input and calculations are omitted, helping to reduce size.
							The innovation in terms of data utilisation is, however, that once a bill becomes irrelevant, it is deleted, rather than kept forever.
						</p>
						<p class="paragraph2">
							The mechanism transforms an exponential workload into a linear workload, which saves vast amounts of CPU power.
						</p>
					</div>

					<div class="how-cards-right">
						<img src="/icons/monetary-policy-icon.png" class="how-cards__icon"/>
						<h4> Algorithmically Controlled Monetary Policy </h4>
						<p class="paragraph2">
							In general, to keep the market stable, a simple modelling of the use of money must be based on internal variables, such as the velocity of
							money (total velocity of Tagions), adoption level, supply of money, average transaction sizes and more.
						</p>
						<p class="paragraph2">
							The model can be used as a measure for demand on liquidity and be the basis for the addition or removal of money, to keep the market stable.
						</p>
						<p class="paragraph2">
							On the one side, each transaction fee is burned, decreasing the money supply. On the other - rewards are given to random active nodes.
							Tagion's algorithm ensures a balance between those two, ensuring a stable value of Tagions.
						</p>
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

<style src="../../styles/how-component.scss" lang="scss"></style>