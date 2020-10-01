<template>
  <layout-default
    class="landing-page"
    id="landing-page"
  >
    <template slot="root-content">
      <reveal-group class="landing">
				<div class="intro">
          <b-container class="intro__container">

						<div class="intro__content">

							<div class="intro__content-left">
								<div
									class="intro__quote"
									child
									opacity
									direction="up"
								>
									<h1>
										<div class="intro__quote-text">Open Monetary and Banking System</div>
									</h1>
								</div>

								<div
									class="intro__summary"
									child
									opacity
									direction="up"
								>
									<p class="intro__summary-text">Tagion is a decentralised and permissionless monetary and banking system run and owned by its users. Its genuinely
										fair and democratic governance model builds on the ideas and design principles of Nobel Memorial Prize winner in
										Economic Sciences, Elinor Ostrom. Tagion is self-sustainable and seen as a common resource that lets developers
										create new financial markets with a few clicks.
									</p>
								</div>
							</div>

							<div class="intro__content-right">
								Here Goes Video Content
							</div>

						</div>

            <div class="intro__forms">
              <!-- <div class="mt-1"> -->
								<div class="intro__forms-left">
									<a
										href="https://forum.tagion.org/t/new-members-intro-corner/30"
										target="_blank"
										class="btn btn-social"
									>Discuss on Forum</a>
									<a
										href="https://t.me/tagionChat"
										target="_blank"
										class="btn btn-social"
									>Chat in Telegram</a>
								</div>
                <!-- <a
                  href="https://github.com/tagion/alpha"
                  target="_blank"
                  class="btn btn-social btn-accent"
                >AlphaOne Network Release</a> -->
                <div class="intro__forms-newsletter">
									<newsletter-form class="mt-4" />
								</div>

              <!-- </div> -->
            </div>
          </b-container>
        </div>

        <div class="hero">
          <div class="hero__background"></div>
          <b-container class="lcontainer">
            <div
              class="hero__quote"
              child
              opacity
              direction="up"
            >
              <h2>
                <span class="hero__text">Why Tagion?</span>
              </h2>
            </div>
            <div
              class="hero__summary"
              child
              opacity
              direction="up"
            >
              <p>The world has too many financial (and physical) borders. Tagion was born to break down those borders
								and enable seamlessly peer-to-peer money transfers. Cheap, fair, and fast for anyone anywhere.
							</p>
            </div>

            <div class="hero__cards feature-cards feature-cards--four">
              <div class="feature-card">
                <div
                  child
                  opacity
                  direction="left"
                >
                  <div class="feature-card__internal">
                    <img src="/icons/decentralized-icon.png" />
                    <h4>Decentralized Exchange</h4>
                    <p>Pay with anything anywhere. DEX is an open protocol that enables a trustless exchange of any digital currency that supports HTLC (Hash Time Locked Contract).</p>
                  </div>
                </div>
              </div>

              <div class="feature-card">
                <div
                  child
                  opacity
                  direction="left"
                >
                  <div class="feature-card__internal">
                    <img src="/icons/supply-icon.png" />
                    <h4>Elastic Money Supply</h4>
                    <p>To scale properly, the money supply must match demand. Tagion does not have a hard cap, but makes use of elastic supply, which aims to create a stable price level.</p>
                  </div>
                </div>
              </div>
              <div class="feature-card">
                <div
                  child
                  opacity
                  direction="left"
                >
                  <div class="feature-card__internal">
                    <img src="/icons/governance-icon.png" />
                    <h4>Inclusive Governance</h4>
                    <p>Tagion and its resources are governed as a Common. All have equal right to participate, but it is the contribution which gives reward and power.</p>
                  </div>
                </div>
              </div>
              <div class="feature-card">
                <div
                  child
                  opacity
                  direction="left"
                >
                  <div class="feature-card__internal">
                    <img src="/icons/technology-icon.png" />
                    <h4>Scalable Core Technology</h4>
                    <p>Tagion builds on a modular and scalable core. Each module can be changed and optimised. The main modules comprise of the distributed database, scripting engine, Hashgraph and gossip mechanism.</p>
                  </div>
                </div>
              </div>
            </div>
          </b-container>
        </div>

				<div class="how">
          <div class="how__background"></div>
          <b-container class="lcontainer">
            <div
              class="how__quote"
              child
              opacity
              direction="up"
            >
              <h2>
                <span class="how__text">How do we do it?</span>
              </h2>
            </div>
            <div
              class="how__summary"
              child
              opacity
              direction="up"
            >
              <p>
								Current cryptocurrency systems have failed to gain wide-spread adoption, as several problems prevent these from doing so.
							</p>
            </div>

            <div class="how__cards feature-cards feature-cards--four">
              <div class="feature-card">
                <div
                  child
                  opacity
                  direction="left"
                >
                  <div class="feature-card__internal">
                    <img src="/icons/network-throughput-icon.png" class="how__icon"/>
                    <h4 class="how__feature-card">Network Throughput</h4>
										<p class="how__feature-card">
											Tagion uses hashgraph for consensus, which in the Tagion implementation, makes it possible to process more than 20.000
											transactions per second per shard. In comparison, VISA does around 1,700 transactions per second on average.
										</p>
										<p class="how__feature-card">
											Tagion is architected to be able to scale to hundreds of Shards that operate in tandem without loss of efficiency
										</p>
                  </div>
                </div>
              </div>

              <div class="feature-card">
                <div
                  child
                  opacity
                  direction="left"
                >
                  <div class="feature-card__internal">
                    <img src="/icons/scalability-icon.png" class="how__icon"/>
                    <h4 class="how__feature-card">Scalability</h4>
                    <p class="how__feature-card">
											Combining Tagion DEX with DART provides Tagion with the speed and scalability needed to become an underlying network for any everyday financial services.
										</p>
                  </div>
                </div>
              </div>
              <div class="feature-card">
                <div
                  child
                  opacity
                  direction="left"
                >
                  <div class="feature-card__internal">
                    <img src="/icons/speed-of-transaction-icon.png" class="how__icon"/>
                    <h4 class="how__feature-card">Speed of Transaction</h4>
                    <p class="how__feature-card">
											Transactions on Tagion are validated in between two or three seconds, placing it on par with major credit card operators in terms of validation speed.
										</p>
										<p class="how__feature-card">
											A fast validation time is reached through the use of Hashgraph for consensus and an efficient (Patent Pending) gossip Mechanism.
											The Hashgraph algorithm and the accompanying mathematical proof was initially discovered by Leemon Baird.
										</p>
										<p class="how__feature-card">
											The algorithm ensures that all nodes, infinite time, reach the same order of events - as long as more than two-thirds of the nodes in the network
											follow the same consensus rules. In doing so, the nodes confirm and validate any action on the network, such as a money transfer,
											money exchange, or data interactions.
										</p>
										<p class="how__feature-card">
											The gossip mechanisms optimise data exchange between nodes to happen most efficiently.
										</p>
                  </div>
                </div>
              </div>
              <div class="feature-card">
                <div
                  child
                  opacity
                  direction="left"
                >
                  <div class="feature-card__internal">
                    <img src="/icons/market-liquidity-icon.png" class="how__icon"/>
                    <h4 class="how__feature-card">Market Liquidity</h4>
                    <p class="how__feature-card">
											Better market liquidity results in a more efficient market. With Tagions as an intermediate currency, it is possible to exchange all tokenised currencies
											seamlessly. By pairing all alien currencies with Tagions, the resulting reduction of currency pairs enables a simpler market with higher liquidity.
										</p>
                  </div>
                </div>
              </div>
							<div class="feature-card">
                <div
                  child
                  opacity
                  direction="left"
                >
                  <div class="feature-card__internal">
                    <img src="/icons/storage-power-icon.png" class="how__icon"/>
                    <h4 class="how__feature-card">Storage and Computial power</h4>
                    <p class="how__feature-card">
											Most DLTs use a decentralised, immutable database for storage. The blockchain data structure is immutable, meaning all data should be stored forever.
										</p>
										<p class="how__feature-card">
											Tagion uses a distributed database for storage, meaning a node only stores a part of the data. DART (Distributed Archive of Random Transactions)
											gives away with immutability, and only the output of a transaction is stored, while input and calculations are omitted, helping to reduce size.
											The innovation in terms of data utilisation is, however, that once a bill becomes irrelevant, it is deleted, rather than kept forever.
										</p>
										<p class="how__feature-card">
											The mechanism transforms an exponential workload into a linear workload, which saves vast amounts of CPU power.
										</p>
                  </div>
                </div>
              </div>
							<div class="feature-card">
                <div
                  child
                  opacity
                  direction="left"
                >
                  <div class="feature-card__internal">
                    <img src="/icons/monetary-policy-icon.png" class="how__icon"/>
                    <h4 class="how__feature-card">Algorithmically Controlled Monetary Policy</h4>
                    <p class="how__feature-card">
											In general, to keep the market stable, a simple modelling of the use of money must be based on internal variables, such as the velocity of
											money (total velocity of Tagions), adoption level, supply of money, average transaction sizes and more.
										</p>
										<p class="how__feature-card">
											The model can be used as a measure for demand on liquidity and be the basis for the addition or removal of money, to keep the market stable.
										</p>
										<p class="how__feature-card">
											On the one side, each transaction fee is burned, decreasing the money supply. On the other - rewards are given to random active nodes.
											Tagion's algorithm ensures a balance between those two, ensuring a stable value of Tagions.
										</p>
                  </div>
                </div>
              </div>
            </div>
          </b-container>
        </div>

				<div class="what-where">
          <b-container class="lcontainer">
						<div class="what-where__left">
							<div
								class=""
								child
								opacity
								direction="up"
							>
								<h2>
									<span class="what-where__text">What ...</span>
								</h2>
							</div>
							<div
								class="what-where__summary"
								child
								opacity
								direction="up"
							>
								<p>
									Tagion is a decentralised and permissionless monetary and banking system – run and owned by its users. Its genuinely fair and democratic
									governance model builds on the ideas and design principles of Nobel Memorial Prize winner in Economic Sciences, Elinor Ostrom.
									Tagion is self-sustainable and seen as a common resource that lets developers create new financial markets with a few clicks.
								</p>
								<p>
									The elastic money supply and absence of a hard cap keep the value of the network tokens stable - and in time – Tagion will be a
									trustless, algorithmically controlled monetary and banking system, that keeps the token price stable. Given all developers,
									the possibility of creating a more sustainable economic world.
								</p>
							</div>
						</div>

						<div class="what-where__right">
							<div
								class=""
								child
								opacity
								direction="up"
							>
								<h2>
									<span class="what-where__text">and Where?</span>
								</h2>
							</div>
							<div
								class="what-where__summary"
								child
								opacity
								direction="up"
							>
								<p>
									Tagion is a universal token protocol that acts as the backbone for almost any transaction-based service such as C2C cross-border
									payments and daily micro-transactions and seamlessly exchange between all tokenised currencies.
								</p>
								<p>
									Finally, Tagion is a vital aid for solving United Nations Sustainable Development Goal 10.c: by 2030, reduce to less than 3% the
									transaction costs of migrant remittances and eliminate remittance corridors with costs higher than 5%
								</p>
							</div>
						</div>
          </b-container>
        </div>

				<div class="whitepaper">
          <b-container class="lcontainer">
						<div class="whitepaper__left">
							<img src="/icons/whitepaper-icon.png" class="whitepaper__left-img"/>
						</div>

						<div class="whitepaper__right">
							<div class="whitepaper__text">White Paper</div>
							<div class="whitepaper__summary">DEX Protocol. Hashgraph Consensus. DART Database. Inclusive Governance.</div>
							<div class="whitepaper__download">
								<div class="whitepaper__download-text">White Paper</div>
								<div>
									<button
										class="whitepaper__download-button"
										href="https://github.com/tagion/resources/raw/master/technical-paper/tagion-technical-paper.pdf"
										variant="down"
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

        <!-- <div class="lcontainer-wrapper-group lcontainer-wrapper-group--story">
          <div class="lcontainer-wrapper-group__paper">
            <div class="lcontainer-wrapper lcontainer-wrapper--story">
              <b-container class="lcontainer lcontainer--story">
                <reveal class="lcontainer__headline lcontainer__story-content">
                  <reveal
                    child
                    direction="up"
                    opacity
                  >
                    <h2>The Big Why</h2>
                  </reveal>
                  <reveal
                    child
                    direction="up"
                    opacity
                    :delay="200"
                  >
                    <p>The world has too many financial (and physical) borders. Tagion was born to break down those borders and enable seamlessly peer-to-peer money transfers. Cheap, fair, and fast for anyone anywhere.</p>
                  </reveal>
                </reveal>
              </b-container>
            </div>

            <div class="lcontainer-wrapper lcontainer-wrapper--story">
              <b-container class="lcontainer lcontainer--story">
                <reveal class="lcontainer__headline lcontainer__story-content">
                  <reveal
                    child
                    direction="up"
                    opacity
                  >
                    <h2>The Inquiring How</h2>
                  </reveal>
                  <reveal
                    child
                    direction="up"
                    opacity
                    :delay="200"
                  >
                    <p>Current cryptocurrency systems have failed to gain wide-spread adoption, as several problems prevent these from doing so.</p>
                  </reveal>
                </reveal>
                <reveal
                  :delay="500"
                  opacity
                  direction="up"
                  class="lcontainer__story-cards-wrapper"
                >
                  <div role="tablist">
                    <b-card
                      no-body
                      class="mb-1"
                    >
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-1
                          variant="info"
                        >Network Throughput</b-button>
                      </b-card-header>
                      <b-collapse
                        id="accordion-1"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            <p>Tagion uses hashgraph for consensus, which in the Tagion implementation, makes it possible to process more than 20.000 transactions per second per shard. In comparison, VISA does around 1,700 transactions per second on average.</p>
                            <p>Tagion is architected to be able to scale to hundreds of Shards that operate in tandem without loss of efficiency.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card
                      no-body
                      class="mb-1"
                    >
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-2
                          variant="info"
                        >Speed of Transactions</b-button>
                      </b-card-header>
                      <b-collapse
                        id="accordion-2"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            <p>Transactions on Tagion are validated in between two or three seconds, placing it on par with major credit card operators in terms of validation speed.</p>
                            <p>A fast validation time is reached through the use of Hashgraph for consensus and an efficient (Patent Pending) gossip Mechanism. The Hashgraph algorithm and the accompanying mathematical proof was initially discovered by Leemon Baird. </p>
                            <p>The algorithm ensures that all nodes, infinite time, reach the same order of events - as long as more than two-thirds of the nodes in the network follow the same consensus rules. In doing so, the nodes confirm and validate any action on the network, such as a money transfer, money exchange, or data interactions.</p>
                            <p>The gossip mechanisms optimise data exchange between nodes to happen most efficiently.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card
                      no-body
                      class="mb-1"
                    >
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-3
                          variant="info"
                        >Storage and Computational Power</b-button>
                      </b-card-header>
                      <b-collapse
                        id="accordion-3"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            <p>Most DLTs use a decentralised, immutable database for storage. The blockchain data structure is immutable, meaning all data should be stored forever. </p>
                            <p>Tagion uses a distributed database for storage, meaning a node only stores a part of the data. DART (Distributed Archive of Random Transactions) gives away with immutability, and only the output of a transaction is stored, while input and calculations are omitted, helping to reduce size. The innovation in terms of data utilisation is, however, that once a bill becomes irrelevant, it is deleted, rather than kept forever.</p>
                            <p>The mechanism transforms an exponential workload into a linear workload, which saves vast amounts of CPU power.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card
                      no-body
                      class="mb-1"
                    >
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-4
                          variant="info"
                        >Scalability</b-button>
                      </b-card-header>
                      <b-collapse
                        id="accordion-4"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            <p>Combining Tagion DEX with DART provides Tagion with the speed and scalability needed to become an underlying network for any everyday financial services.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                    <b-card
                      no-body
                      class="mb-1"
                    >
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-5
                          variant="info"
                        >Market Liquidity</b-button>
                      </b-card-header>
                      <b-collapse
                        id="accordion-5"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            <p>Better market liquidity results in a more efficient market. With Tagions as an intermediate currency, it is possible to exchange all tokenised currencies seamlessly. By pairing all alien currencies with Tagions, the resulting reduction of currency pairs enables a simpler market with higher liquidity.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                    <b-card
                      no-body
                      class="mb-1"
                    >
                      <b-card-header
                        header-tag="header"
                        class="p-1"
                        role="tab"
                      >
                        <b-button
                          class="btn--tab"
                          block
                          href="#"
                          v-b-toggle.accordion-6
                          variant="info"
                        >Algorithmically Controlled Dynamic Monetary Policy</b-button>
                      </b-card-header>
                      <b-collapse
                        id="accordion-6"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            <p>In general, to keep the market stable, a simple modelling of the use of money must be based on internal variables, such as the velocity of money (total velocity of Tagions), adoption level, supply of money, average transaction sizes and more.</p>
                            <p>The model can be used as a measure for demand on liquidity and be the basis for the addition or removal of money, to keep the market stable.</p>
                            <p>On the one side, each transaction fee is burned, decreasing the money supply. On the other - rewards are given to random active nodes. Tagion's algorithm ensures a balance between those two, ensuring a stable value of Tagions.</p>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </reveal>
              </b-container>
            </div>

            <div class="lcontainer-wrapper lcontainer-wrapper--story">
              <b-container class="lcontainer lcontainer--story">
                <reveal class="lcontainer__headline lcontainer__story-content lcontainer__story-content--singlecolumn">
                  <reveal
                    child
                    direction="up"
                    opacity
                  >
                    <h2>The Significant What</h2>
                  </reveal>
                  <reveal
                    child
                    direction="up"
                    opacity
                    :delay="200"
                  >
                    <div class="lcontainer__story-content-singlecolumn">
                      <p>Tagion is a decentralised and permissionless monetary and banking system – run and owned by its users. Its genuinely fair and democratic governance model builds on the ideas and design principles of Nobel Memorial Prize winner in Economic Sciences, Elinor Ostrom. Tagion is self-sustainable and seen as a common resource that lets developers create new financial markets with a few clicks.</p>
                      <p>The elastic money supply and absence of a hard cap keep the value of the network tokens stable - and in time – Tagion will be a trustless, algorithmically controlled monetary and banking system, that keeps the token price stable. Given all developers, the possibility of creating a more sustainable economic world.</p>
                    </div>
                  </reveal>
                </reveal>
              </b-container>
            </div>

            <div class="lcontainer-wrapper lcontainer-wrapper--story">
              <b-container class="lcontainer lcontainer--story lcontainer--story-last">
                <reveal class="lcontainer__headline lcontainer__story-content lcontainer__story-content--multicolumn">
                  <reveal
                    child
                    direction="up"
                    opacity
                  >
                    <h2>The Practical Where</h2>
                  </reveal>
                  <reveal
                    child
                    direction="up"
                    opacity
                    :delay="200"
                  >
                    <div>
                      <p>Tagion is a universal token protocol that acts as the backbone for almost any transaction-based service such as C2C cross-border payments and daily micro-transactions and seamlessly exchange between all tokenised currencies.</p>
                      <p>Finally, Tagion is a vital aid for solving United Nations Sustainable Development Goal 10.c: by 2030, reduce to less than 3% the transaction costs of migrant remittances and eliminate remittance corridors with costs higher than 5%</p>
                    </div>
                  </reveal>
                </reveal>
              </b-container>
            </div>
          </div>
        </div> -->

        <!-- <div class="lcontainer-wrapper lcontainer-wrapper--alphanet">
          <b-container class="lcontainer lcontainer--video">
            <reveal class="lcontainer__headline lcontainer__headline--small">
              <reveal
                child
                direction="up"
                opacity
              >
                <h2>AlphaOne Network Release</h2>
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
                    href="https://github.com/tagion/alpha"
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
                >
                  <p class="mb-1"><strong>Bounty Program</strong></p>
                  <p class="mt-0">To gain data and optimize the network Tagion has started a bounty hunt for developers and others who wish to test and help improve the network. More information on Tagion and the bounty hunt can be found <a
                      target="_blank"
                      href="https://t.me/tagionchat"
                    >here</a>, or contact Tagion CSO <a
                      target="_blank"
                      href="mailto:rn@i25s.com"
                    >Roxana Nasoi</a>.</p>

                </reveal>
              </div>
            </reveal>
          </b-container>
        </div> -->













        <!-- <div class="lcontainer-wrapper lcontainer-wrapper--whitepaper">
          <b-container class="lcontainer lcontainer--illustrated lcontainer--whitepaper">
            <reveal
              class="lcontainer__headline"
              :delay="400"
            >
              <reveal
                child
                direction="up"
                opacity
              >
                <h2>Technical Paper</h2>
              </reveal>
              <reveal
                child
                direction="up"
                opacity
                :delay="200"
              >
                <p>DEX Protocol. Hashgraph Consensus. DART Database. Inclusive Governance.</p>
              </reveal>
              <reveal
                child
                direction="right"
                opacity
                :delay="500"
                class="mt-4"
              >
                <brand-button
                  href="https://github.com/tagion/resources/raw/master/technical-paper/tagion-technical-paper.pdf"
                  variant="down"
                  @click="$analytics.triggerEvent({category: 'Exploration', action: 'WhitepaperDownload', fields: {placement: 'Landing'}})"
                  reveal
                >Download PDF</brand-button>
              </reveal>
            </reveal>
            <div class="lcontainer__illustrations">
              <reveal
                class="lcontainer__illustration"
                :delay="200"
              >
                <white-paper />
              </reveal>
            </div>
          </b-container>
        </div> -->








        <!-- <div class="lcontainer-wrapper lcontainer-wrapper--video">
          <b-container class="lcontainer lcontainer--video">
            <reveal class="lcontainer__headline lcontainer__headline--small">
              <reveal child direction="up" opacity>
                <h2>Watch The Introduction</h2>
              </reveal>
            </reveal>
            <div class="intro-video mt-5">
              <reveal direction="up" opacity :delay="400">
                <iframe
                  class="hero__video lazy"
                  data-src="https://www.youtube.com/embed/2xPvrTZDAp8?modestbranding=1&rel=0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </reveal>
            </div>
          </b-container>
        </div> -->

        <div class="lcontainer-wrapper lcontainer-wrapper--overflowed mt-10">
          <b-container class="lcontainer lcontainer--roadmap">
            <b-row>
              <b-col
                cols="12"
                xl="6"
                class="lcontainer__headline-sticky"
              >
                <div class="lcontainer__headline">
                  <div
                    child
                    direction="up"
                    opacity
                  >
                    <h2 class="roadmap__heading">Tagion Roadmap</h2>
                    <div
                      child
                      direction="up"
                      opacity
                      :delay="200"
											class="roadmap-text"
                    >
                      <p>The team behind Tagion has spent a significant amount of time, funding itself, while building core components: Hashgraph, Gossip protocol, DART database, HiBON data format, the underlying API and more.</p>
                      <p>We keep implementing new functionality and getting closer to the major milestone, where we can open-source the Tagion project and launch the main network.</p>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col xl="6">
                <div class="timeline">
                  <div>
                    <section class="year">
                      <h3 class="timeline__year">2015</h3>
                      <section>
                        <ul>
                          <li class="timeline__heading">Ideation of BitCuits by Carsten Bleser Rasmussen.</li>
                        </ul>
                      </section>
                    </section>
                    <section class="year">
                      <h3 class="timeline__year">2017</h3>
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
                      <h3 class="timeline__year">2018</h3>
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
                      <h3 class="timeline__year">2019</h3>
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
                      <h3 class="timeline__year">2020</h3>
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
                      <h3 class="timeline__year">2021</h3>
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




			<div class="lcontainer-wrapper lcontainer-wrapper--people">
				<b-container class="people">

					<div class="people-left">
						<h2 class="people-left__heading"> The Team Behind Tagion </h2>

						<div>
							<img src="/icons/line-icon.png" class="people-left__img">
						</div>

						<div class="people-left__text">
							Tagion is an open-source project with members contributing from all over the planet. The company currently
							funding and developing Tagion, I25s, is located in Denmark and Ukraine. Currently, there are 15+ full-time
							resources working on the Tagion project.
						</div>

						<div>
							<img src="/icons/line-icon.png" class="people-left__img">
						</div>
					</div>

					<div class="people-right">
						<b-tabs content-class="" class="people-right__b-tabs" align="center">

							<b-tab title="Management" active>
								<reveal class="team-table">
									<b-row class="row--big-gutter my-4 justify-content-center">
										<b-col
											v-for="(teamMember, index) in teamMembers"
											cols="12"
										>
											<reveal
												child
												opacity
												direction="left"
												:delay="50 * index"
											>
												<team-card
													:name="teamMember.name"
													:title="teamMember.title"
													:image="teamMember.image"
													:link="teamMember.link"
													:about="teamMember.about"
												></team-card>
											</reveal>
										</b-col>
									</b-row>
								</reveal>
							</b-tab>

							<b-tab title="Advisors">
								<reveal class="team-table">
									<b-row class="row--big-gutter justify-content-center">
										<b-col
											v-for="(teamMember, index) in advisers"
											cols="12"
										>
											<reveal
												child
												opacity
												direction="left"
												:delay="50 * index"
											>
												<team-card
													:name="teamMember.name"
													:title="teamMember.title"
													:image="teamMember.image"
													:link="teamMember.link"
													:about="teamMember.about"
												>
												</team-card>
											</reveal>
										</b-col>
									</b-row>
								</reveal>
							</b-tab>

						</b-tabs>
					</div>

				</b-container>
			</div>











				<!-- <div class="lcontainer-wrapper lcontainer-wrapper--white mb-10">
          <b-container class="lcontainer lcontainer--team pb-3">
            <reveal class="">
              <reveal
                child
                direction="up"
                opacity
              >
                <h2 class="text-center mb-5">Meet People Behind Tagion</h2>
              </reveal>
            </reveal>
            <reveal class="team-table">
              <b-col class="row--big-gutter justify-content-center">
                <b-col
                  v-for="(teamMember, index) in teamMembers"
                >
                  <reveal
                    child
                    opacity
                    direction="left"
                    :delay="50 * index"
                  >
                    <team-card
                      :name="teamMember.name"
                      :title="teamMember.title"
                      :image="teamMember.image"
                      :link="teamMember.link"
                      :about="teamMember.about"
                    ></team-card>
                  </reveal>
                </b-col>
              </b-col>
            </reveal>
            <div class="global-team-information">
              <reveal
                direction="up"
                opacity
                :delay="400"
              >
                <p>Tagion is an open-source project with members contributing from all over the planet. The company currently funding and developing Tagion, I25s, is located in Denmark and Ukraine. Currently, there are 15+ full-time resources working on the Tagion project. </p>
              </reveal>
            </div>
          </b-container>
        </div> -->








        <!-- <div class="lcontainer-wrapper lcontainer-wrapper--white mb-10">
          <b-container class="lcontainer lcontainer--team pb-3">
            <reveal class="">
              <reveal
                child
                direction="up"
                opacity
              >
                <h2 class="text-center mb-5">Meet People Behind Tagion</h2>
              </reveal>
            </reveal>
            <reveal class="team-table">
              <b-row class="row--big-gutter justify-content-center">
                <b-col
                  cols="12"
                  md="6"
                  xl="4"
                  v-for="(teamMember, index) in teamMembers"
                >
                  <reveal
                    child
                    opacity
                    direction="left"
                    :delay="50 * index"
                  >
                    <team-card
                      :name="teamMember.name"
                      :title="teamMember.title"
                      :image="teamMember.image"
                      :link="teamMember.link"
                      :about="teamMember.about"
                    ></team-card>
                  </reveal>
                </b-col>
              </b-row>
            </reveal>
            <div class="global-team-information">
              <reveal
                direction="up"
                opacity
                :delay="400"
              >
                <p>Tagion is an open-source project with members contributing from all over the planet. The company currently funding and developing Tagion, I25s, is located in Denmark and Ukraine. Currently, there are 15+ full-time resources working on the Tagion project. </p>
              </reveal>
            </div>
          </b-container>
        </div> -->

        <!-- <div class="lcontainer-wrapper lcontainer-wrapper--white mb-10">
          <b-container class="lcontainer lcontainer--team pb-3">
            <reveal class="">
              <reveal
                child
                direction="up"
                opacity
              >
                <h2 class="text-center mb-5">Advisers</h2>
              </reveal>
            </reveal>
            <reveal class="team-table">
              <b-row class="row--big-gutter justify-content-center">
                <b-col
                  cols="12"
                  lg="6"
                  xl="3"
                  v-for="(teamMember, index) in advisers"
                >
                  <reveal
                    child
                    opacity
                    direction="left"
                    :delay="50 * index"
                  >
                    <team-card
                      :name="teamMember.name"
                      :title="teamMember.title"
                      :image="teamMember.image"
                      :link="teamMember.link"
                      :about="teamMember.about"
                    ></team-card>
                  </reveal>
                </b-col>
              </b-row>
            </reveal>
          </b-container>
        </div> -->





      </reveal-group>
    </template>
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/layout/LayoutDefault";
import RevealGroup from "@theme/components/transition/RevealGroup";
import BrandButton from "@theme/components/sealed/BrandButton";
import SocialButtons from "@theme/components/sealed/SocialButtons";
import DownloadBrandButton from "@theme/components/sealed/DownloadBrandButton";
import NewsletterForm from "@theme/components/sealed/NewsletterForm";
import TeamCard from "@theme/components/sealed/TeamCard";
import Reveal from "@theme/components/transition/Reveal";
import News from "@theme/components/sealed/News";

import { isMobile } from "@theme/util";
import { teamMembers, advisers } from "@theme/data";

export default {
  data() {
    return {
      teamMembers,
      advisers,
      selectedTeamMember: undefined,
    };
  },
  components: {
    LayoutDefault,
    RevealGroup,
    WhitePaper: () => import("@theme/components/sealed/WhitePaper"),
    Roadmap: () => import("@theme/components/sealed/Roadmap"),
    BrandButton,
    DownloadBrandButton,
    SocialButtons,
    NewsletterForm,
    TeamCard,
    Reveal,
		News,
  },
  methods: {
    openTeamCard(teamMember) {
      this.selectedTeamMember = teamMember;
    },
    closeTeamCard() {
      this.selectedTeamMember = false;
    },
  },
};
</script>


<style src="../styles/landing.scss" lang="scss"></style>
