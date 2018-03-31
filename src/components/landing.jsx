import React from "react";
import { observer } from "mobx-react";

var App = observer( React.createClass({

	render: function(){
		var store = this.props.store;
		return (
<main>
	<h1>{store.title}</h1>
	<h2>{store.subtitle}</h2>
	<h3>made with ❤ by {store.author}</h3>
	<p>
		What's so great about this? Well, it's a <strong>Production ready</strong> boilerplate:
		<ul>
			<li>Optimised and Minified <a href="https://www.w3.org/TR/CSS/"><abbr title="Cascading Style Sheets">CSS</abbr></a>, based on <a href="https://stylus-lang.com/">Stylus</a> with <abbr title="Hot Module Reload">HMR</abbr>. <em>i.e. make designers life awesome.</em></li>
			<li>Component-based, cacheable <a href="https://reactjs.org/">React</a>+<a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a> and <a href="https://mobx.js.org/">MobX</a> software engineering targeted. <em>i.e. make front-end developers life awesome.</em></li>
			<li><code>ES6</code> goodies and examples without <code>classes</code>, because <strong>composition is better than inheritance</strong>, but you can use 'em if you want.</li>
			<li>No <code>ES.next @decorators</code> examples, because there are a huge amount of examples with it, but knowing how to live without it is important too.</li>
		</ul>
	</p>
</main>
		);
	}

}) );

export default App;
