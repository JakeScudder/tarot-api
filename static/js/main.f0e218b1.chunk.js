(this["webpackJsonptarot-app"]=this["webpackJsonptarot-app"]||[]).push([[0],{30:function(e,a,t){e.exports=t.p+"static/media/galaxy.5346ee6a.svg"},31:function(e,a,t){e.exports=t(60)},36:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),o=t.n(l),c=(t(36),t(6)),m=t(7),s=t(9),i=t(8),u=t(12),h=t(1),d=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"homepage-div"},r.a.createElement("h1",null,"What Awaits? "),r.a.createElement("p",null,"If you are unfamiliar with Tarot Cards, here is a quick introduction:"),r.a.createElement("p",null,"Try to frame a question or situation in your head. When you draw the cards, see how they relate to what you had in mind."),r.a.createElement("p",null,"Don't take the cards too literally, try to delve into their imagery and how they relate to your feelings or insecurities."),r.a.createElement("p",null,"If you receive a 'bad' card, review your attachments to the issue. If they are 'good' cards, you know what you are hoping for and perhaps what you should focus on in the future."))}}]),t}(n.Component),f=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).formatName=function(e){return e.split("-").map((function(e){return e[0].toUpperCase()+e.substr(1)})).join(" ")},n.toggle=function(e){e.preventDefault(),n.setState({showing:!n.state.showing})},n.randomNumGeneration=function(){var e=Math.floor(78*Math.random());n.setState({num1:e})},n.refresh=function(){window.location.reload()},n.state={loading:!0,showing:!1,num1:null},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.randomNumGeneration(),this.setState({loading:!1})}},{key:"render",value:function(){var e,a,t,n,l=this.state.showing,o=this.props.data,c=this.state.num1;return o&&o[0]&&null!==c&&(e=o[c],a=this.formatName(e.name),t=e.summary,console.log("card:",e.name),n=e.image),null!==e?r.a.createElement("div",null,r.a.createElement("div",{id:"title-help-container"},r.a.createElement("button",{id:"refresh",onClick:this.refresh},r.a.createElement("h3",{className:"refresh-title"},"Draw"),r.a.createElement("h3",{className:"refresh-title"},"Another")),r.a.createElement("h3",null,"You Drew"),r.a.createElement("button",{id:"help-button",onClick:this.toggle},"?")),l?r.a.createElement("div",null,r.a.createElement("h3",{className:"daily-help-title"},"Daily Reading"),r.a.createElement("p",null,"A simple reading, take a moment to think about what might be the focus for your day"),r.a.createElement("p",null,"To reiterate, try not to be to literal. Look at the imagery and search for the metaphors"),r.a.createElement("p",null,"For example, the Death card could be a reminder that there is a situation or relationship you should put behind you.")):null,r.a.createElement("div",null,r.a.createElement("h2",{className:"name-title-one"},a),r.a.createElement("img",{className:"card-image",alt:"Card",src:n}),r.a.createElement("h4",{className:"summary"},t))):r.a.createElement("h2",null,"Card Data missing :(")}}]),t}(n.Component),g=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).formatName=function(e){return e.split("-").map((function(e){return e[0].toUpperCase()+e.substr(1)})).join(" ")},n.toggle=function(){n.setState({showing:!n.state.showing})},n.refresh=function(){window.location.reload()},n.randomNumGeneration=function(){var e=Math.floor(78*Math.random()),a=Math.floor(78*Math.random());a===e&&(a=Math.floor(78*Math.random()));var t=Math.floor(78*Math.random());t!==e&&t!==a||(t=Math.floor(78*Math.random())),n.setState({num1:e,num2:a,num3:t})},n.state={loading:!0,showing:!1,num1:null,num2:null,num3:null},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.randomNumGeneration()}},{key:"render",value:function(){var e,a,t,n,l,o,c,m,s,i,u,h,d=this.state.showing,f=this.props.data,g=this.state.num1,E=this.state.num2,p=this.state.num3;return f&&f[0]&&null!==g&&(e=f[g],a=this.formatName(e.name),t=e.summary,console.log("card1:",e.name),n=e.image,l=f[E],o=this.formatName(l.name),c=l.summary,console.log("card2:",l.name),m=l.image,s=f[p],i=this.formatName(s.name),u=s.summary,console.log("card3:",s.name),h=s.image),null!==e?r.a.createElement("div",null,r.a.createElement("div",{id:"title-help-container"},r.a.createElement("button",{id:"refresh",onClick:this.refresh},r.a.createElement("h3",{className:"refresh-title"},"Draw"),r.a.createElement("h3",{className:"refresh-title"},"Another")),r.a.createElement("h1",{className:"you-drew"},"You Drew"),r.a.createElement("button",{id:"help-button",onClick:this.toggle},"?")),d?r.a.createElement("div",null,r.a.createElement("h2",null,"Past, Present, Future"),r.a.createElement("p",null,"Past: What factors from the past still affect your question or issue"),r.a.createElement("p",null,"Present: What surrounds this currently: Positive or Negative aspects"),r.a.createElement("p",null,"Future: What to focus on or what should be avoided")):null,r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"cards-displayed"},r.a.createElement("img",{id:"threecard-image-first",alt:"Card",src:n}),r.a.createElement("img",{id:"card-image-second",alt:"Card",src:m}),r.a.createElement("img",{id:"card-image-third",alt:"Card",src:h}),r.a.createElement("h4",null,a,", ",o,", ",i)),r.a.createElement("div",{className:"threecard-summary"},r.a.createElement("h2",{className:"name-title"},"Past: ",a),r.a.createElement("img",{className:"threecard-image",alt:"Card",src:n}),r.a.createElement("h4",{className:"summary"},t),r.a.createElement("br",null),r.a.createElement("h2",{className:"name-title"},"Present: ",o),r.a.createElement("img",{className:"threecard-image",alt:"Card",src:m}),r.a.createElement("h4",{className:"summary"},c),r.a.createElement("h2",{className:"name-title"},"Future: ",i),r.a.createElement("img",{className:"threecard-image",alt:"Card",src:h}),r.a.createElement("h4",{className:"summary"},u)))):r.a.createElement("h1",null,"Card Data Missing :(")}}]),t}(n.Component),E=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).toggle=function(){n.setState({showing:!n.state.showing})},n.formatName=function(e){return e.split("-").map((function(e){return e[0].toUpperCase()+e.substr(1)})).join(" ")},n.randomNumGeneration=function(){var e=Math.floor(78*Math.random()),a=Math.floor(78*Math.random());a===e&&(a=Math.floor(78*Math.random()));var t=Math.floor(78*Math.random());t!==e&&t!==a||(t=Math.floor(78*Math.random()));var r=Math.floor(78*Math.random());r!==e&&r!==a&&r!==t||(r=Math.floor(78*Math.random())),n.setState({num1:e,num2:a,num3:t,num4:r})},n.refresh=function(){window.location.reload()},n.state={loading:!0,showing:!1,num1:null,num2:null,num3:null,num4:null},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.randomNumGeneration()}},{key:"render",value:function(){var e,a,t,n,l,o,c,m,s,i,u,h,d,f,g,E,p=this.state.showing,v=this.props.data,y=this.state.num1,N=this.state.num2,b=this.state.num3,w=this.state.num4;return v&&v[0]&&null!==y&&(e=v[y],a=this.formatName(e.name),t=e.summary,console.log("card1:",e.name),n=e.image,l=v[N],o=this.formatName(l.name),c=l.summary,console.log("card2:",l.name),m=l.image,s=v[b],i=this.formatName(s.name),u=s.summary,console.log("card3:",s.name),h=s.image,d=v[w],f=this.formatName(d.name),g=d.summary,console.log("card4:",d.name),E=d.image),null!==e?r.a.createElement("div",null,r.a.createElement("button",{id:"refresh",onClick:this.refresh},r.a.createElement("h3",{className:"refresh-title"},"Draw"),r.a.createElement("h3",{className:"refresh-title"},"Another")),r.a.createElement("h1",{className:"you-drew"},"You Drew"),r.a.createElement("button",{id:"help-button",onClick:this.toggle},"?"),p?r.a.createElement("div",null,r.a.createElement("h2",null,"Over and Under"),r.a.createElement("p",null,"This four card spread contains one card that represents the overarching theme regarding the question or issue, followed by three underlying factors."),r.a.createElement("p",null,"Think about what is the main theme of your drawing and what are the smaller things that play into that.")):null,r.a.createElement("div",{id:"overarching-card"},r.a.createElement("img",{id:"card-image-arching",alt:"Card",src:E}),r.a.createElement("h2",{id:"overarching-title"},f)),r.a.createElement("div",{className:"cards-displayed"},r.a.createElement("img",{id:"card-image-first",alt:"Card",src:n}),r.a.createElement("img",{id:"card-image-second",alt:"Card",src:m}),r.a.createElement("img",{id:"card-image-third",alt:"Card",src:h}),r.a.createElement("h4",null,a,", ",o,", ",i)),r.a.createElement("div",{className:"threecard-summary"},r.a.createElement("h2",{className:"name-title"},"OverArching Card:"),r.a.createElement("h2",{className:"overarching-title"},f),r.a.createElement("img",{className:"threecard-image",alt:"Card",src:E}),r.a.createElement("h4",{className:"summary"},g),r.a.createElement("h2",{className:"name-title"},"Underlying Factors:"),r.a.createElement("h2",{className:"underlying-title"},a),r.a.createElement("img",{className:"threecard-image",alt:"Card",src:n}),r.a.createElement("h4",{className:"summary"},t),r.a.createElement("h2",{className:"name-title"},o),r.a.createElement("img",{className:"threecard-image",alt:"Card",src:m}),r.a.createElement("h4",{className:"summary"},c),r.a.createElement("h2",{className:"name-title"},i),r.a.createElement("img",{className:"threecard-image",alt:"Card",src:h}),r.a.createElement("h4",{className:"summary"},u))):r.a.createElement("h1",null,"Card Data Missing :(")}}]),t}(n.Component),p=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"nav-li"},r.a.createElement(u.b,{to:"/one"},"One")),r.a.createElement("li",{className:"nav-li"},r.a.createElement(u.b,{to:"/three"},"Three")),r.a.createElement("li",{className:"nav-li"},r.a.createElement(u.b,{to:"/four"},"Four"))))}}]),t}(n.Component),v=t(29),y=t.n(v),N=t(30),b=t.n(N),w=(t(59),function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).fetchCards=function(){y.a.get("https://cors-anywhere.herokuapp.com/https://tarot.howlcode.com/api/v1/cards").then((function(e){console.log(e),n.setState({deck:e.data})})).catch((function(e){console.log("Error fetching the cards:",e)}))},n.state={deck:null},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){if(null!==this.state.deck)return console.log("deck loaded");this.fetchCards()}},{key:"render",value:function(){var e=this;return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null,"Draw Your ",r.a.createElement("span",{className:"secondary"},"Hand")),r.a.createElement("h1",null,"How Many Cards?"),r.a.createElement(p,null)),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/four",render:function(a){return r.a.createElement(E,Object.assign({},a,{data:e.state.deck}))}}),r.a.createElement(h.a,{exact:!0,path:"/three",render:function(a){return r.a.createElement(g,Object.assign({},a,{data:e.state.deck}))}}),r.a.createElement(h.a,{exact:!0,path:"/one",render:function(a){return r.a.createElement(f,Object.assign({},a,{data:e.state.deck}))}}),r.a.createElement(h.a,{path:"/"},r.a.createElement(d,null)))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.f0e218b1.chunk.js.map