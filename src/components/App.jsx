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
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel rhoncus augue. Aliquam sed convallis nisl. Suspendisse a odio blandit, convallis nibh vitae, malesuada mi. Nulla facilisi. Duis felis eros, hendrerit vel gravida sed, consequat sit amet dui. Donec molestie, dolor eget porttitor molestie, ante mauris lacinia lacus, ut rhoncus est turpis a nisl. In condimentum sem eu lorem vulputate, nec ultrices est tempor. Maecenas quis faucibus odio. Cras dui libero, sollicitudin id diam a, euismod ultrices nibh.
	</p>
	<p>
Where to go now? <a href="https://jonathanmh.com/webpack-sass-scss-compiling-separate-file/">SASS</a>/<a href="https://github.com/JonathanMH/webpack-scss-sass-file">SCSS</a>? Stylus?
	</p>
</main>
		);
	}

}) );

export default App;
