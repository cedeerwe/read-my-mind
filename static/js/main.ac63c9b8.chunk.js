(this["webpackJsonpread-my-mind"]=this["webpackJsonpread-my-mind"]||[]).push([[0],{47:function(e,t,n){e.exports=n(77)},52:function(e,t,n){},54:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r,a,c=n(0),o=n.n(c),l=n(12),s=n.n(l),i=(n(52),n(53),n(54),n(5)),u=n(24),m=n(11),p=n(3),h=20,f=100,d=function(e){return Object(p.action)("changeOpponent",{newId:e})},E=n(25);!function(e){e[e.Rock=0]="Rock",e[e.Paper=1]="Paper",e[e.Scissors=2]="Scissors"}(r||(r={})),function(e){e.Win="ResultWin",e.Draw="ResultDraw",e.Loss="ResultLoss"}(a||(a={}));var w,b={wins:0,draws:0,losses:0,score:0},y={current:b,best:b,rounds:0};function g(e){switch(e){case r.Rock:return r.Paper;case r.Paper:return r.Scissors;case r.Scissors:return r.Rock;default:throw new Error("Enum switch")}}function O(e,t,n){var a=e+t+n,c=Math.random()*a;return c<e?r.Rock:c<e+t?r.Paper:r.Scissors}function v(){return O(1,1,1)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e.Intro="AppViewIntro",e.Basic="AppViewBasic",e.BasicWithModal="AppViewBasicWithModal",e.Game="AppViewGame"}(w||(w={}));var P={wins:0,draws:0,losses:0,score:0};function C(e,t){var n=function(e,t){switch(t){case a.Win:return k({},e,{wins:e.wins+1,score:e.score+1});case a.Draw:return k({},e,{draws:e.draws+1,score:e.score+.5});case a.Loss:return k({},e,{losses:e.losses+1});default:throw new Error("Switching enum")}}(e.current,t);return function(e){return e.best.score<e.current.score?k({},e,{best:k({},e.current)}):e}(k({},e,{current:n,rounds:e.rounds+1}))}function S(e){return L[e]}function R(e){return S(function(e){return e.games[e.activeGameId]}(e).opponentId)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e,t){return e.reduce((function(e,n){return e+(n.opponent===t?1:0)}),0)}function W(e){return S(e.opponentId).generateWeapon(e.history)}function B(e,t){var n=function(e,t){switch((e-t+3)%3){case 0:return a.Draw;case 1:return a.Win;case 2:return a.Loss;default:throw Error("WRONG REMAINDER")}}(e,t);return function(r){var a=[].concat(Object(E.a)(r.history),[{me:e,opponent:t,result:n}]),c=C(r.stats,n);return{opponentId:r.opponentId,history:a,stats:c}}}function G(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{history:[],stats:(t=e.stats,k({},t,{current:P}))});var t}function M(e,t,n){return e.map((function(e,r){return r===t?n(e):e}))}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T={name:"Damian the Delicious",generateWeapon:function(e){if(0===e.length)switch(v()){case r.Rock:T.state=[0,1,1];break;case r.Paper:T.state=[1,0,1];break;case r.Scissors:T.state=[1,1,0]}return O(T.state[0],T.state[1],T.state[2])},state:[0,0,0]},A={name:"Gregory the Generous",generateWeapon:function(e){if(0===e.length)switch(v()){case r.Rock:T.state=[2,1,1];break;case r.Paper:T.state=[1,2,1];break;case r.Scissors:T.state=[1,1,2]}return O(T.state[0],T.state[1],T.state[2])},state:[0,0,0]},L=[{name:"Alan the Almighty",generateWeapon:function(e){return 0===e.length?v():e[0].opponent}},{name:"Beatrice the Brutal",generateWeapon:function(e){return 0===e.length?v():g(e[e.length-1].me)}},{name:"Cedric the Confused",generateWeapon:function(e){if(0===e.length)return v();switch(e[e.length-1].opponent){case r.Rock:return O(0,1,1);case r.Paper:return O(1,0,1);case r.Scissors:return O(1,1,0);default:throw new Error("Switching enum")}}},T,{name:"Edward the Educated",generateWeapon:function(e){var t,n=e.reduce((function(e,t){switch(t.result){case a.Draw:return e;case a.Win:return N({},e,Object(m.a)({},t.me,e[t.me]+1));case a.Loss:return N({},e,Object(m.a)({},t.opponent,e[t.opponent]+1));default:throw new Error("Switching enum")}}),(t={},Object(m.a)(t,r.Rock,0),Object(m.a)(t,r.Paper,0),Object(m.a)(t,r.Scissors,0),t)),c=Math.max.apply(Math,Object(E.a)(Object.values(n)));if(0===c)return v();var o=function(e){return e===c?c:0};return O(o(n[r.Rock]),o(n[r.Paper]),o(n[r.Scissors]))}},{name:"Florian the Fallen",generateWeapon:function(){return v()}},A,{name:"Hugo the Hilarious",generateWeapon:function(e){return 0===e.length?v():g(g(O(D(e,r.Rock),D(e,r.Paper),D(e,r.Scissors))))}}],x={games:L.map((function(e,t){return{opponentId:t,history:[],stats:y}})),activeGameId:0,activeView:w.Intro};function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=localStorage.getItem("reduxState"),Y=Object(u.b)((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"resetState":return H({},x);case"resetStateModal":return H({},t,{activeView:w.BasicWithModal});case"battleOpponent":var r=W(t.games[t.activeGameId]),a=M(t.games,t.activeGameId,B(n.payload.me,r));return H({},t,{games:a});case"changeOpponent":return H({},t,{activeGameId:(n.payload.newId+t.games.length)%t.games.length});case"incrementOpponent":return e(t,d(t.activeGameId+1));case"decrementOpponent":return e(t,d(t.activeGameId-1));case"switchViewToBasic":return H({},t,{activeView:w.Basic});case"switchViewToIntro":return H({},t,{activeView:w.Intro});case"switchViewToGame":return H({},t,{activeView:w.Game,activeGameId:n.payload.gameId});case"resetOpponent":return H({},t,{games:M(t.games,t.activeGameId,G)});default:return t}}),J?JSON.parse(J):x);Y.subscribe((function(){return localStorage.setItem("reduxState",JSON.stringify(Y.getState()))}));var z=n(14),$=n(7),q=n(32),K=n(18),Q=Object(i.b)((function(e){return{stats:e.games[e.activeGameId].stats}}))((function(e){var t=e.stats;return o.a.createElement(K.a,{bordered:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Total Rounds:"," ",t.rounds," "),o.a.createElement("th",null,"Wins"),o.a.createElement("th",null,"Losses"),o.a.createElement("th",null,"Draws"),o.a.createElement("th",null,"Score"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement("b",null,"Current")),o.a.createElement("th",null,t.current.wins),o.a.createElement("th",null,t.current.losses),o.a.createElement("th",null,t.current.draws),o.a.createElement("th",null,t.current.score," ","/"," ",h)),o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement("b",null,"Best")),o.a.createElement("th",null,t.best.wins),o.a.createElement("th",null,t.best.losses),o.a.createElement("th",null,t.best.draws),o.a.createElement("th",null,t.best.score," ","/"," ",h))))})),U=n(9);function X(e){switch(e){case r.Rock:return"Rock";case r.Paper:return"Paper";case r.Scissors:return"Scissors";default:throw new Error("Switching enum")}}var Z={margin:"10px"},_=function(e){var t=e.weapon,n=e.onClick,r=e.disabled,a=e.variant;return o.a.createElement(U.a,{style:Z,variant:a,size:"lg",onClick:n(t),disabled:r},X(t))},ee=Object(i.b)((function(e){return{isFinished:(t=e.games[e.activeGameId],t.history.length>=h||t.stats.rounds>=f)};var t}),(function(e){return{onClick:function(t){return function(){return e(Object(p.action)("battleOpponent",{me:t}))}}}}))((function(e){var t=e.isFinished,n=e.onClick;return o.a.createElement(z.a,null,o.a.createElement($.a,{style:{justifyContent:"center"}},o.a.createElement(_,{variant:"danger",weapon:r.Rock,onClick:n,disabled:t}),o.a.createElement(_,{variant:"success",weapon:r.Paper,onClick:n,disabled:t}),o.a.createElement(_,{variant:"primary",weapon:r.Scissors,onClick:n,disabled:t})))})),te={margin:"10px"},ne=Object(i.b)(null,(function(e){return{onClickNext:function(){return e(Object(p.action)("incrementOpponent"))},onClickPrevious:function(){return e(Object(p.action)("decrementOpponent"))},onClickReset:function(){return e(Object(p.action)("resetOpponent"))},onClickBack:function(){return e(Object(p.action)("switchViewToBasic"))}}}))((function(e){var t=e.onClickNext,n=e.onClickBack,r=e.onClickPrevious,a=e.onClickReset;return o.a.createElement(z.a,null,o.a.createElement($.a,{style:{justifyContent:"center"}},o.a.createElement(U.a,{style:te,variant:"secondary",onClick:r},"Previous Opponent"),o.a.createElement(U.a,{style:te,variant:"secondary",onClick:t},"Next Opponent")),o.a.createElement($.a,{style:{justifyContent:"center"}},o.a.createElement(U.a,{style:te,variant:"info",onClick:a},"Reset Game"),o.a.createElement(U.a,{style:te,variant:"info",onClick:n},"Back to summary")))})),re=function(e){var t=e.weapon,n=t===r.Rock?"red":t===r.Paper?"green":"blue";return o.a.createElement("th",{style:{color:n}},X(t))},ae=function(e){var t=e.result,n=t===a.Win?"LightGreen":t===a.Draw?"PaleGoldenRod":"Tomato";return o.a.createElement("th",{style:{backgroundColor:n}},function(e){switch(e){case a.Win:return"Win";case a.Loss:return"Loss";case a.Draw:return"Draw";default:throw new Error("Switching enum")}}(t))},ce=Object(i.b)((function(e){return{history:e.games[e.activeGameId].history}}))((function(e){var t,n=e.history;return o.a.createElement(K.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Me"),o.a.createElement("th",null,"Opponent"),o.a.createElement("th",null,"Result"))),o.a.createElement("tbody",null,(t=h,Array.from({length:t}).map((function(e,t){return t}))).map((function(e){return e<n.length?o.a.createElement("tr",null,o.a.createElement("th",null,e+1),o.a.createElement(re,{weapon:n[e].me}),o.a.createElement(re,{weapon:n[e].opponent}),o.a.createElement(ae,{result:n[e].result})):o.a.createElement("tr",null,o.a.createElement("th",null,e+1),o.a.createElement("th",null," "),o.a.createElement("th",null," "),o.a.createElement("th",null," "))}))))})),oe=Object(i.b)((function(e){return{opponentName:R(e).name}}))((function(e){var t=e.opponentName;return o.a.createElement(z.a,null,o.a.createElement($.a,{style:{justifyContent:"center"}},o.a.createElement("h1",null,t)),o.a.createElement($.a,null,o.a.createElement(q.a,null,o.a.createElement(Q,null),o.a.createElement(ne,null),o.a.createElement("hr",null),o.a.createElement(ee,null)),o.a.createElement(q.a,null,o.a.createElement(ce,null))))})),le=n(22),se=Object(i.b)((function(e){return{allStats:e.games.map((function(e){return e.stats})),allNames:e.games.map((function(e){return S(e.opponentId).name})),showModal:e.activeView===w.BasicWithModal}}),(function(e){return{onClickPlay:function(t){return function(){return e(Object(p.action)("switchViewToGame",{gameId:t}))}},onClickModal:function(){return e(Object(p.action)("resetStateModal"))},onClickReset:function(){return e(Object(p.action)("resetState"))},onHide:function(){return e(Object(p.action)("switchViewToBasic"))}}}))((function(e){var t=e.allStats,n=e.allNames,r=e.onClickPlay,a=e.onClickReset,c=e.onClickModal,l=e.showModal,s=e.onHide;return o.a.createElement(o.a.Fragment,null,o.a.createElement(K.a,{bordered:!0,striped:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Opponent"),o.a.createElement("th",null,"Current Wins"),o.a.createElement("th",null,"Current Losses"),o.a.createElement("th",null,"Current Draws"),o.a.createElement("th",null,"Current Score"),o.a.createElement("th",null,"Best Wins"),o.a.createElement("th",null,"Best Losses"),o.a.createElement("th",null,"Best Draws"),o.a.createElement("th",null,"Best Score"),o.a.createElement("th",null,"Total Rounds"),o.a.createElement("th",null,o.a.createElement(U.a,{variant:"danger",onClick:c},"RESET")))),o.a.createElement("tbody",null,t.map((function(e,t){return o.a.createElement("tr",null,o.a.createElement("th",null,n[t]),o.a.createElement("th",null,e.current.wins),o.a.createElement("th",null,e.current.losses),o.a.createElement("th",null,e.current.draws),o.a.createElement("th",null,e.current.score),o.a.createElement("th",null,e.best.wins),o.a.createElement("th",null,e.best.losses),o.a.createElement("th",null,e.best.draws),o.a.createElement("th",null,e.best.score),o.a.createElement("th",null,e.rounds," / ",f),o.a.createElement("th",null,o.a.createElement(U.a,{style:{margin:"auto",display:"block"},variant:"primary",onClick:r(t),disabled:e.rounds>=f},"Play")))})))),o.a.createElement(le.a,{show:l,onHide:s},o.a.createElement(le.a.Header,{closeButton:!0},o.a.createElement(le.a.Title,null,"Reset game")),o.a.createElement(le.a.Body,null,"This will reset your whole progress and start a new game, are you sure you want to proceed?"),o.a.createElement(le.a.Footer,null,o.a.createElement(U.a,{variant:"secondary",onClick:s},"Cancel"),o.a.createElement(U.a,{variant:"danger",onClick:a},"Reset Game"))))})),ie=Object(i.b)(null,(function(e){return{onClick:function(){return e(Object(p.action)("switchViewToIntro"))}}}))((function(e){var t=e.onClick;return o.a.createElement(z.a,null,o.a.createElement($.a,{style:{justifyContent:"center"}},o.a.createElement("h1",null,"Summary")),o.a.createElement($.a,{style:{justifyContent:"center"}},o.a.createElement(se,null)),o.a.createElement($.a,{className:"d-flex justify-content-end"},o.a.createElement(U.a,{variant:"secondary",onClick:t},"Back to Intro")))})),ue=Object(i.b)(null,(function(e){return{onClick:function(){return e(Object(p.action)("switchViewToBasic"))}}}))((function(e){var t=e.onClick;return o.a.createElement(z.a,null,o.a.createElement($.a,{style:{justifyContent:"center"}},o.a.createElement("h1",{style:{fontSize:40}},"Read My Mind")),o.a.createElement($.a,{style:{justifyContent:"center"}},o.a.createElement("p",null,"Welcome to a little game we call ",o.a.createElement("b",null,"Read My Mind"),". You will be playing a classic game of rock-paper-scissors against multiple opponents. You can play up to ",f," rounds against each of the opponents. Your goal is to get the best possible score in a match consisting of ",h," single games against each of these opponents."," "),o.a.createElement("p",null,"Each opponent has its own strategy, which is only using the previous rounds of your current match and also randomness. Pay close attention to what they are doing, as only by fully understanding their strategy you will be able to get the best possible scores.")),o.a.createElement($.a,null,o.a.createElement("p",null,"Now, let us proceed to the summary screen, from where you will be able to control the whole game.")),o.a.createElement($.a,{style:{justifyContent:"center"}},o.a.createElement(U.a,{onClick:t},"I AM READY!")))})),me=Object(i.b)((function(e){return{activeView:e.activeView}}))((function(e){switch(e.activeView){case w.Intro:return o.a.createElement(ue,null);case w.Basic:case w.BasicWithModal:return o.a.createElement(ie,null);case w.Game:return o.a.createElement(oe,null);default:throw new Error("Switching enum")}})),pe=function(){return o.a.createElement(i.a,{store:Y},o.a.createElement("div",{className:"App"},o.a.createElement(me,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.ac63c9b8.chunk.js.map