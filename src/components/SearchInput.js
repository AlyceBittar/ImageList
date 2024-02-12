import React from "react";

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        // Initialize state to hold the input value
        this.state = { entry: '' };
    }

    // Function to handle form submission
    onFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Call the onSearchSubmit function passed from the parent component with the input value
        this.props.onSearchSubmit(this.state.entry);
    }

    render() {
        return(
            <div className="ui segment">
                {/* Form element to input search query */}
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            {/* Input field to enter search query */}
                            <input 
                                type="text" 
                                placeholder="Search for..."
                                // Update state with input value when it changes
                                onChange={(event) => this.setState({entry: event.target.value})}
                                // Set input value to the current state value
                                value={this.state.entry}
                            />
                            {/* Search icon */}
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchInput;
