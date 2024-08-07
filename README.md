# CineMagic Explorer 🎬🍿

CineMagic Explorer is a React application that allows users to search for movies and view their details using the OMDb API. This project demonstrates a simple yet elegant way to integrate a third-party API with a React frontend, making it easy to discover and explore movies.

## Features

- **Movie Search**: Users can search for movies by title.
- **Responsive Design**: The application is responsive and works well on different screen sizes.
- **Interactive UI**: Users get visual feedback through hover effects and interactive elements.
- **Error Handling**: Graceful handling of network errors and invalid search results.

## Technologies Used

- **React**: For building the user interface.
- **Bootstrap**: For responsive design and styling.
- **OMDb API**: For fetching movie data.
- **CSS**: For custom styles.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ajoykumarrishi/react-movie-finder.git
    cd react-movie-finder
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

4. **Open your browser** to `http://localhost:3000` to view the application.

## Deployment

This application can be deployed to GitHub Pages. Follow these steps:

1. **Build the project**:
    ```bash
    npm run build
    ```

2. **Deploy to GitHub Pages**:
    ```bash
    npm run deploy
    ```

## Live Demo

Check out the live demo of the application [here](https://ajoykumarrishi.github.io/react-movie-finder).

## File Structure

- `src`
  - `components`
    - `MovieContainerComponent.js`
    - `SearchInputComponent.js`
    - `SearchButtonComponent.js`
  - `services`
    - `OMDbAPI.service.js`
  - `App.js`
  - `index.js`
  - `App.css`

## Components

### `MovieContainerComponent`

Renders a list of movies. Displays a message if no movies are found.

### `SearchInputComponent`

Includes the search input and handles user search submissions.

### `SearchButtonComponent`

Handles the search button click event.

### `OMDbAPI.service.js`

Handles communication with the OMDb API.

## Styles

The application's custom styles are defined in `App.css`, including background colors, card styles, and button designs.

## Acknowledgements

- **OMDb API** for providing movie data.
- **Bootstrap** for the responsive design framework.

## License

This project is licensed under the MIT License.