(this.webpackJsonp=this.webpackJsonp||[]).push([[34],{417:function(e,t,n){"use strict";n.r(t);var i=n(32),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"node-stack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-stack"}}),e._v(" Node Stack")]),e._v(" "),n("p",[e._v("The node stack is implemented in the programming language D with some C libraries for crypto functions. It is structured, as shown in the figure below.")]),e._v(" "),n("p",[e._v("Table 12: Tagion Node stack:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("HRPC (HiBON) Dataformat for communication")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("NODE")])]),e._v(" "),n("tr",[n("td",[e._v("User API - TLS 1.2 P2P Network")])]),e._v(" "),n("tr",[n("td",[e._v("Scripting Engine")])]),e._v(" "),n("tr",[n("td",[e._v("Consensus mechanism : Hashgraph")])]),e._v(" "),n("tr",[n("td",[e._v("Storage : Distributed Database DART")])]),e._v(" "),n("tr",[n("td",[e._v("Storage state : Blockchain")])])])]),e._v(" "),n("p",[e._v("A Tagion Node is divided into units, as shown in fig. 6, and each unit handles a service function in the following manner:\nA smart contract is sent to the Transaction-service-unit, fetching the inputs from the "),n("strong",[e._v("DART")]),e._v(" unit and verifying their signatures. The "),n("strong",[e._v("DART")]),e._v("-unit connects to other "),n("strong",[e._v("DART")]),e._v("s via the P2P unit. The transaction unit forwards the smart contract, including the inputs, to the Coordinator-unit, and this unit adds it to an event that is gossiped to the network via the P2P unit.\nWhen the Coordinator receives an event with a smart contract, it is executed via the ScriptingEngine-unit, and the result of outputs is verified.\nWhen the Coordinator finds an epoch, this epoch is forwarded to the Transcript-service-unit that evaluates the correct order and requests the "),n("strong",[e._v("DART")]),e._v("-unit to erase the inputs and add the newly generated outputs.")]),e._v(" "),n("p",[e._v("Figure 6. The Tagion Node service structure:")]),e._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/tlt4EhK.png",loading:"lazy"}})]),e._v(" "),n("p",[e._v("Each of the services is running as independent tasks and communication between each other via commutation channels. The different services modules perform the service as described in the list below.")]),e._v(" "),n("p",[n("strong",[n("em",[e._v("Coordinator")])]),e._v(" - This service manages the hashgraph-consensus and controls another related service for the node. The Coordinator generates and receives events and relays to the network. This service also generates the epoch and sends the information to the ScriptingEngine services.")]),e._v(" "),n("p",[n("strong",[n("em",[e._v("Transaction")])]),e._v(" - This service receives the incoming transaction script, validate, verifies and fetches the data\nfrom the "),n("strong",[e._v("DART")]),e._v(", and sends the information to the Coordinator.")]),e._v(" "),n("p",[n("strong",[n("em",[e._v("DART")])]),e._v(" - Services to the Distributed database.")]),e._v(" "),n("p",[n("strong",[n("em",[e._v("P2P")])]),e._v(" - This service handles the peer-to-peer communication protocol used to communicate between the nodes.")]),e._v(" "),n("p",[n("strong",[n("em",[e._v("ScriptingEngine")])]),e._v(" - Handles the executions of the scripts.")]),e._v(" "),n("p",[n("strong",[n("em",[e._v("Transcript")])]),e._v(" - Services the Epoch and orders the script execution.")]),e._v(" "),n("p",[n("strong",[n("em",[e._v("Logger")])]),e._v(" - The service handles the information logging for the different services.")]),e._v(" "),n("p",[n("strong",[n("em",[e._v("Monitor")])]),e._v(" - The Monitor service is used to monitor the activities locally.")]),e._v(" "),n("p",[n("strong",[n("em",[e._v("HeartBeat")])]),e._v(" - This service is only used in test mode. This service enables the nodes to execute sequentially, simplifying network debugging.")])])}),[],!1,null,null,null);t.default=s.exports}}]);