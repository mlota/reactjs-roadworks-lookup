import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

export default class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.textInput.value);
	}

	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				<Form.Field>
					<label>Road</label>
					<input placeholder="Search term" name="searchTerm" ref={(input) => { this.textInput = input; }} />
				</Form.Field>
				<Button type="submit" primary>Search</Button>
				<br/><br/>
			</Form>
		);
	}
}