(this.webpackJsonp=this.webpackJsonp||[]).push([[32],{415:function(t,e,o){"use strict";o.r(e);var s=o(32),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"network"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#network"}}),t._v(" network")]),t._v(" "),o("p",[o("strong",[t._v("The following steps are executed in the network for a standard transaction:")])]),t._v(" "),o("ol",[o("li",[t._v("The transaction object is sent to one of the active nodes (an inactive node should relay the transaction object to an active node).")]),t._v(" "),o("li",[t._v("When a node receives a transaction object, its format and signatures of all the inputs are checked.")]),t._v(" "),o("li",[t._v("If the transaction object is valid, it is added to the payload of an event.")]),t._v(" "),o("li",[t._v("The event gossips to the network.")]),t._v(" "),o("li",[t._v("The payload is put into an epoch list in order.")]),t._v(" "),o("li",[t._v("The epoch list is processed in the epoch order.")]),t._v(" "),o("li",[t._v("All inputs to the transaction are collected from the "),o("strong",[t._v("DART")]),t._v(" database.")]),t._v(" "),o("li",[t._v("The transaction script is executed when all inputs are read from the "),o("strong",[t._v("DART")]),t._v(".")]),t._v(" "),o("li",[t._v("The output of the transaction scripts gossips to the network.")]),t._v(" "),o("li",[t._v("When the network reaches consensus on all outputs of the transactions, the "),o("strong",[t._v("DART")]),t._v(" is updated.")]),t._v(" "),o("li",[t._v("The new Merkle root (Bull’s eye) of the "),o("strong",[t._v("DART")]),t._v(" is calculated, and the Bull’s eye gossips to the network.")]),t._v(" "),o("li",[t._v("When the majority of the nodes reach consensus on the Bull’s eye, it is added to the "),o("strong",[t._v("DART")]),t._v(" blockchain. The transaction is now approved.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);