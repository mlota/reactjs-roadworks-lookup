import React, { Component } from "react";
import ResultView from "./ResultView";
import SearchForm from "./SearchForm";
import SearchStatus from  "./SearchStatus";
import { Container, Header } from "semantic-ui-react";

const API_URL = "https://data.gov.uk/data/api/service/transport/planned_road_works/road?road=";

export default class RoadworksDataView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: "",
			roadworks: [],
			isLoading: false,
			showResults: false
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.renderResults = this.renderResults.bind(this);
	}

	onSubmit(value) {
		this.setState({searchTerm: value});
		this.getTrafficData(value);
	}

	getTrafficData(road) {
		const requestUrl = `${API_URL}${road}`;
		this.setState({isLoading: true, showResults: true });
		fetch(requestUrl)
			.then(response => response.json())
			.then(roadworks => {
				this.setState({ 
					roadworks: roadworks.result.slice(0, 10), 
					isLoading: false
				});
			});
	}

	renderResults() {
		return (
			<div>
				<SearchStatus status={this.state.searchTerm}/>
				<ResultView results={this.state.roadworks} isLoading={this.state.isLoading}/>
			</div>
		);
	}

	render() {
		return (
			<Container>
				<Header as="h1" color="blue">Roadworks Lookup</Header>
				<SearchForm onSubmit={this.onSubmit}/>
				{ this.state.showResults && this.renderResults() }
			</Container>
		);
	}
}