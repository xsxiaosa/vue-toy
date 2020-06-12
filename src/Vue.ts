import React from "react";
import ReactDOM from "react-dom";
import Component, { ComponentOptions } from "./Component";

export * from "./Component";

export interface Options extends ComponentOptions {
	el?: HTMLElement;
}

export default function Vue(options: Options) {
	const RootClass = Component(options);
	const instance = new RootClass({});

	instance.$mount = (el: HTMLElement) => {
		ReactDOM.render(React.createElement(RootClass), el);
	};

	if (options.el) {
		instance.$mount(options.el);
	}

	return instance;
}

Vue.component = Component;