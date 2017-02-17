import React from "react";
import { Header } from "semantic-ui-react";

const SearchStatus = (props) => {
	return (
		<Header as="h2" color="blue">Showing results for: {props.status}</Header>
	);
};

SearchStatus.propTypes = {
	status: React.PropTypes.string.isRequired
};

export default SearchStatus;