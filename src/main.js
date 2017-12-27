import React from "react";
import { render } from "react-dom";
import { extendObservable, observable } from "mobx";

import App from "./components/app.jsx";
import "./main.styl";

var store = extendObservable( observable({
	// raw data (probably coming from SSR)
	title: "On Tuesday, December the 19th 2017",
	subtitle: "This incredible MobX+React boilerplate project born at Evolved.",

	firstname: "Fabio",
	lastname: "Nagao",
	nickname: "nagaozen",
	email: "nagaozen[at]gmail.com"
}), {
	// computed
	get author() {
		return `${this.firstname} ${this.lastname} (${this.nickname}) <${this.email}>`;
	}
} );

render( <App store={store} />, document.getElementById("app") );

window.store = store;
