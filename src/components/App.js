import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";

// Class component representing the main application
class App extends React.Component {
    constructor(props) {
        super(props);
        // Initialize state with an empty array to store images
        this.state = { images: [] };
        // Bind the onSearchSubmit method to the component instance
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    // Method to handle search submission
    async onSearchSubmit(entry) {
        // Log the search entry
        console.log(entry);
        // Make an asynchronous request to the Pixabay API using Axios
        const response = await axios.get(`https://pixabay.com/api/?key=42239335-54ec602111416467bdc471751&q=${entry}&image_type=photo`);
        // Log the response data
        console.log(response.data.hits);
        // Update state with the images fetched from the API response
        this.setState({ images: response.data.hits });
    }
    
    render() {
        return(
            <div className="ui container" style={{marginTop: '30px'}}>
                <h2>Enter an item below to generate a list of images!</h2>
                {/* Render the SearchInput component and pass the onSearchSubmit method as props */}
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                {/* Render the ImageList component and pass the images from state as props */}
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
