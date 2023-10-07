(function(){"use strict";var t={950:function(t,e,r){var n=r(9242),i=r(3396);const o={id:"app"};function a(t,e,r,n,a,c){const s=(0,i.up)("CandlestickChart");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(s)])}var c=r(7139);const s=t=>((0,i.dD)("data-v-1edb2088"),t=t(),(0,i.Cn)(),t),h=s((()=>(0,i._)("p",null,"Note: Please hold and slide the chart towards left to get the proper view ",-1))),l={class:"candlestick-chart-container"},d={class:"chart-content"},u=s((()=>(0,i._)("h2",{class:"chart-heading"},"Candlestick Chart",-1))),f={class:"toggle-container"},p={class:"search-container"},v={class:"chart-container",ref:"chartContainer"},g={class:"chart-wrapper"},b={class:"chart",ref:"chart"};function w(t,e,r,o,a,s){return(0,i.wg)(),(0,i.iD)(i.HY,null,[h,(0,i._)("div",l,[(0,i._)("div",d,[u,(0,i._)("div",f,[(0,i._)("button",{onClick:e[0]||(e[0]=(...t)=>s.togglePeriod&&s.togglePeriod(...t)),class:(0,c.C_)({active:"hourly"===a.period})},"Hourly",2),(0,i._)("button",{onClick:e[1]||(e[1]=(...t)=>s.togglePeriod&&s.togglePeriod(...t)),class:(0,c.C_)({active:"daily"===a.period})},"Daily",2)]),(0,i._)("div",p,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>a.symbol=t),placeholder:"Search by symbol...",class:"search-input"},null,512),[[n.nr,a.symbol]]),(0,i._)("button",{onClick:e[3]||(e[3]=(...t)=>s.searchSymbol&&s.searchSymbol(...t)),class:"search-button"},"Search")]),(0,i._)("div",v,[(0,i._)("div",g,[(0,i._)("div",b,null,512)])],512)])])],64)}var y=r(8681),m=r(4161),C={data(){return{chart:null,symbol:"GOOGL",period:"daily"}},mounted(){this.chart=(0,y.C2)(this.$refs.chart,{width:this.getChartWidth(),height:this.getChartHeight()}),this.fetchData(),window.addEventListener("resize",this.handleResize)},methods:{fetchData(){const t=`https://node-server-idp6.onrender.com/api/search?symbol=${this.symbol}&period=${this.period}`;m.Z.get(t).then((t=>{const e=t.data,r=this.chart.addCandlestickSeries();e.forEach((t=>{r.update({time:t.date/1e3,open:t.open,high:t.high,low:t.low,close:t.close})}))})).catch((t=>{console.error("Error fetching data:",t)}))},searchSymbol(){this.fetchData()},togglePeriod(){this.period="hourly"===this.period?"daily":"hourly",this.fetchData()},handleResize(){this.chart.resize(this.getChartWidth(),this.getChartHeight())},getChartWidth(){return window.innerWidth<768?window.innerWidth-40:800},getChartHeight(){return window.innerWidth<768?300:400}},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},_=r(89);const k=(0,_.Z)(C,[["render",w],["__scopeId","data-v-1edb2088"]]);var O=k,D={components:{CandlestickChart:O}};const P=(0,_.Z)(D,[["render",a]]);var W=P;(0,n.ri)(W).mount("#app")}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,n,i,o){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],i=t[l][1],o=t[l][2];for(var c=!0,s=0;s<n.length;s++)(!1&o||a>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[s])}))?n.splice(s--,1):(c=!1,o<a&&(a=o));if(c){t.splice(l--,1);var h=i();void 0!==h&&(e=h)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,i,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,a=n[0],c=n[1],s=n[2],h=0;if(a.some((function(e){return 0!==t[e]}))){for(i in c)r.o(c,i)&&(r.m[i]=c[i]);if(s)var l=s(r)}for(e&&e(n);h<a.length;h++)o=a[h],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(l)},n=self["webpackChunkclient_app"]=self["webpackChunkclient_app"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(950)}));n=r.O(n)})();
//# sourceMappingURL=app.999824fd.js.map