import React, { Component } from 'react';
import { observer } from "mobx-react";


@observer
class App extends Component {

	render() {
		return (
<main>
	<h1>Document</h1>
	<p>{ this.props.store.paragraph }</p>
</main>
		)
	}

}

export default App;
