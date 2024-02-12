# Image List Generator: Leveraging RESTful APIs

## Overview
The Image List Generator is a React application designed to simplify image searching through the integration of RESTful APIs.

## Table of Contents
1. [Features](#features)
2. [Usage](#usage)
3. [Project Instllation and Setup](#project-installation-and-setup)
4. [License](#license)

## Features
- **Functional Components:** The project employs functional components extensively for constructing the user interface, ensuring modularity and reusability.
State Management: The App component effectively manages the state to store images fetched from the Pixabay API, ensuring seamless data flow throughout the application.
- **API Requests**: Axios, a promise-based HTTP client, facilitates asynchronous HTTP requests to the Pixabay API, enabling the retrieval of images based on user input.
- **User Input and Event Handling**: The SearchInput component handles user input by providing an interface for users to enter search queries and submit them. The onSearchSubmit function within the App component initiates API requests based on the user's input.
- **Dynamic Content Rendering**: The ImageList component dynamically renders a list of images fetched from the Pixabay API, ensuring real-time updates and responsiveness to user interactions.

## Usage
Once the Image List Generator is running, users can:

* **Search Image**s: Enter keywords in the search input field and submit to fetch relevant images from Pixabay.
* **View Images**: Browse through the list of images displayed on the page, with dynamic loading and pagination for enhanced user experience.
* **Interact with Images**: Click on individual images to view them in full size or perform additional actions such as saving or sharing.

## Project Installation and Setup
To run the Image List Generator locally, follow these steps:

1. Clone the repository to your local machine
2. Navigate to the project directory.
3. Install dependencies using npm or yarn
    ```
    npm install
    or
    yarn install
    ```
4. Start the development server:
    ```
      npm run dev
    ```
5. Open your browser and visit `http://localhost:3000` to view the app.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
