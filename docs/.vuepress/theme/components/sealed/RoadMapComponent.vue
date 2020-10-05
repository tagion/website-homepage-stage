<template>
	<div class="lcontainer-wrapper lcontainer-wrapper--overflowed mt-10">
		<b-container class="lcontainer lcontainer--roadmap">
			<b-row>
				<b-col
					cols="12"
					xl="6"
					class="lcontainer__headline-sticky"
				>
					<div class="lcontainer__headline">
						<!-- <div
							child
							direction="up"
							opacity
						> -->
							<h2 class="heading1"> Tagion Roadmap </h2>
							<div
								child
								direction="up"
								opacity
								:delay="200"
								class="roadmap-text"
							>
								<p class="paragraph1">The team behind Tagion has spent a significant amount of time, funding itself, while building core components: Hashgraph, Gossip protocol, DART database, HiBON data format, the underlying API and more.</p>
								<p class="paragraph1">We keep implementing new functionality and getting closer to the major milestone, where we can open-source the Tagion project and launch the main network.</p>
							</div>
						<!-- </div> -->
					</div>
				</b-col>
				<b-col xl="6">
					<div class="timeline">
						<div>
							<section class="year">
								<h4 class="timeline__year">2015</h4>
								<section>
									<ul>
										<li class="timeline__heading">Ideation of BitCuits by Carsten Bleser Rasmussen.</li>
									</ul>
								</section>
							</section>
							<section class="year">
								<h4 class="timeline__year">2017</h4>
								<section>
									<h4 class="timeline__month">July</h4>
									<ul>
										<li class="timeline__heading">Tagion project is formally started by the three founders.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">December</h4>
									<ul>
										<li class="timeline__heading">Blockchain-based proof of concept network tested.</li>
									</ul>
								</section>
							</section>
							<section class="year">
								<h4 class="timeline__year">2018</h4>
								<section>
									<h4 class="timeline__month">January</h4>
									<ul>
										<li class="timeline__heading">Redesigned network to use Hashgraph instead of Blockchain.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">April</h4>
									<ul>
										<li class="timeline__heading">Confirmed that our design is not violating any patents.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">July</h4>
									<ul>
										<li class="timeline__heading">Implemented β-version of HBSON (now HiBON) data format.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">August</h4>
									<ul>
										<li class="timeline__heading">Implemented α-version of transaction API.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">October</h4>
									<ul>
										<li class="timeline__heading">Implemented α-version of Gossip protocol.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">November</h4>
									<ul>
										<li class="timeline__heading">Implemented α-version of Hashgraph consensus protocol.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">December</h4>
									<ul>
										<li class="timeline__heading">Formed the core principles of the node governance model.</li>
										<li class="timeline__heading">Successfully tested Hashgraph implementation in closed network.</li>
									</ul>
								</section>
							</section>
							<section class="year">
								<h4 class="timeline__year">2019</h4>
								<section>
									<h4 class="timeline__month">January</h4>
									<ul>
										<li class="timeline__heading">Implemented α-version of scripting engine.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">April</h4>
									<ul>
										<li class="timeline__heading">Implemented α-version of DART.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">July</h4>
									<ul>
										<li class="timeline__heading">Filed patents for Gossip protocol and DART.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">September</h4>
									<ul>
										<li class="timeline__heading">Formed the core principles of the economic governance model.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">October</h4>
									<ul>
										<li class="timeline__heading">Implemented β-version of HiBON and HiBON-RPC.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">December</h4>
									<ul>
										<li class="timeline__heading">α-launch of developer package and test node.</li>
									</ul>
								</section>
							</section>
							<section class="year">
								<h4 class="timeline__year">2020</h4>
								<section>
									<h4 class="timeline__month">June</h4>
									<ul>
										<li class="timeline__heading"><code>_basic</code> release on GitHub.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">July</h4>
									<ul>
										<li class="timeline__heading">HiBON release on GitHub.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">August</h4>
									<ul>
										<li class="timeline__heading">Alpha test network release.</li>
									</ul>
								</section>
							</section>
							<section class="year year--future">
								<h4 class="timeline__year">2021</h4>
								<section>
									<h4 class="timeline__month">Q1</h4>
									<ul>
										<li class="timeline__heading">Open-sourcing the Tagion Core library.</li>
										<li class="timeline__heading">β-launch of the Tagion Network.</li>
									</ul>
								</section>
								<section>
									<h4 class="timeline__month">Q2</h4>
									<ul>
										<li class="timeline__heading">Launching main network.</li>
									</ul>
								</section>

							</section>
						</div>
					</div>
				</b-col>
			</b-row>

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

<style src="../../styles/roadmap-component.scss" lang="scss"></style>