import React, { Component } from "react";
import { Header } from "semantic-ui-react";

export default class SearchStatus extends Component {
	render() {
		return (
			<Header as="h2" color="blue">Showing results for: {this.props.status}</Header>
		);
	}
}