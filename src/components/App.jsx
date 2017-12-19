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
</main>
		);
	}

}) );

export default App;
