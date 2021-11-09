(this.webpackJsonp=this.webpackJsonp||[]).push([[38],{421:function(t,n,e){"use strict";e.r(n);var i=e(32),a=Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"scripting-engine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scripting-engine"}}),t._v(" Scripting Engine")]),t._v(" "),e("p",[t._v("The scripting engine’s language is called Funnel. It is based on a stack machine, a simple, functional language inspired by the programming language "),e("strong",[t._v("FORTH")]),t._v(".\nThe scripting engine executes at different run levels. The lowest level is the total Turing equivalent and can only make conditional forward jumps; it cannot run loops or functions. Several instructions executed limit the scripting engine, call stack depth, data stack depth, and memory.\nThe limitation is done to prevent a script from running into infinite loops. The transaction script can use a library of standard functions, which is stored in the "),e("strong",[t._v("DART")]),t._v(", and the fingerprint of the script, which is stored in the Bull’s eye blockchain that is the current state of the script.\nTable 7: Runlevels for the Scripting engine:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Run level")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Limitation")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("0")]),t._v(" "),e("td",[t._v("Consensus script")]),t._v(" "),e("td",[t._v("No limits, full Turing equivalent")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("Debug script function (read-only)")]),t._v(" "),e("td",[t._v("Limit resources, read-only call function to level 0")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("Transaction function")]),t._v(" "),e("td",[t._v("Limit resources and call function to levels 0 and 1")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("Transaction script")]),t._v(" "),e("td",[t._v("Limit instruction and call function to level 2")])])])]),t._v(" "),e("p",[t._v("In contrast, standard FORTH Funnel is a strictly typed language supporting the types shown in table 8.\nConverting from one type to another must be explicitly instructed via a type casting function. If the casting fails, the scripting engine generates an error, and the script stops. The scripting engine stops on overflow/underflow/divide-by-zero errors and if an operator is operating on invalid types.\nTable 8: Scripting types supported:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("D-Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("TEXT")]),t._v(" "),e("td",[t._v("UTF-8 text")]),t._v(" "),e("td",[t._v("string")])]),t._v(" "),e("tr",[e("td",[t._v("INTEGER")]),t._v(" "),e("td",[t._v("signend 64-bits number")]),t._v(" "),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("CARDINAL")]),t._v(" "),e("td",[t._v("Unsignend 64-bits number")]),t._v(" "),e("td",[t._v("ulong")])]),t._v(" "),e("tr",[e("td",[t._v("BIG")]),t._v(" "),e("td",[t._v("Unsigend big integer number")]),t._v(" "),e("td",[t._v("BigUint")])]),t._v(" "),e("tr",[e("td",[t._v("HiBON")]),t._v(" "),e("td",[t._v("HiBON Read/Write-only")]),t._v(" "),e("td",[t._v("HiBON")])]),t._v(" "),e("tr",[e("td",[t._v("DOCUMENT")]),t._v(" "),e("td",[t._v("HiBON Read only")]),t._v(" "),e("td",[t._v("Document")])]),t._v(" "),e("tr",[e("td",[t._v("BIN")]),t._v(" "),e("td",[t._v("Byte arrays, used to hold keys and hash value")]),t._v(" "),e("td",[t._v("ubyte[]")])])])]),t._v(" "),e("h3",{attrs:{id:"funnel-sample-code-for-a-test-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#funnel-sample-code-for-a-test-contract"}}),t._v(" Funnel Sample code for a test contract**")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/HfwFV6R.png",loading:"lazy"}}),t._v(" "),e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/27aJP3Q.png",loading:"lazy"}}),t._v(" "),e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/uk2q7vq.png",loading:"lazy"}}),t._v(" "),e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/ZftBxmj.png",loading:"lazy"}}),t._v(" "),e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i.imgur.com/7H35OtA.png",loading:"lazy"}})])])}),[],!1,null,null,null);n.default=a.exports}}]);