import React, { Component } from "react";
import { Dimmer, Loader, Segment, List } from 'semantic-ui-react'

export default class ResultView extends Component {
	constructor(props) {
		super(props);
		this.renderResultsPanel = this.renderResultsPanel.bind(this);
	}

	renderResultsPanel() {
		if (this.props.isLoading) {
			return (
				<Dimmer active inverted>
					<Loader inverted>Loading</Loader>
				</Dimmer>
			);
		} else {
			const items = this.props.results.map((roadwork) => {
				return (
					<List.Item key={roadwork.reference_number}>
						<List.Icon name="marker" />
						<List.Content>
							<List.Header as="a">{roadwork.closure_type}</List.Header>
							<List.Description>{roadwork.description}</List.Description>
						</List.Content>
					</List.Item>
				);
			});
			return (
				<List>
					{items}
				</List>
			);
		}
	}

	render() {
		return (
			<Segment className="results" padded>
				{ this.renderResultsPanel() }
			</Segment>	
		);
	}
}