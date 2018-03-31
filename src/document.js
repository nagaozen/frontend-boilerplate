import React from "react";
import { render } from "react-dom";
import { observable } from "mobx";

import App from "./components/document.jsx";
import "./app.styl";

var store = observable({

	paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu enim in erat tincidunt porta sodales auctor leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Nunc ultrices malesuada porttitor. Suspendisse nec erat ac ligula viverra maximus. Duis laoreet libero lacus, eget mattis odio semper quis. Duis vel mauris eget purus efficitur blandit ac ut risus. Fusce laoreet lacus in ultrices luctus. Fusce malesuada ligula sed ex dapibus, sed commodo lacus pharetra. Suspendisse nibh lacus, tempor eu vehicula id, aliquet nec velit. Morbi at dui vehicula, semper nisl vitae, bibendum neque. Curabitur luctus mauris nec semper dignissim. "

});

render( <App store={store} />, document.getElementById("app") );

window.store = store;
