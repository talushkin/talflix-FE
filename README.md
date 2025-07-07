
# Talflix

Talflix is a modern, responsive movie portal inspired by Netflix, built with React, TypeScript, Redux, and Material UI. It allows users to browse, search, and preview a curated collection of movies, each with genre categorization and YouTube trailer previews.

## Features

- **Netflix-style UI:** Clean, modern interface with horizontal sliders for genres and movies.
- **Movie Browsing:** Explore movies by genre, with each genre displayed as a horizontal scrollable slider.
- **YouTube Trailer Previews:** Hover over a movie card to see a muted, autoplaying YouTube trailer preview.
- **Movie Details & Playback:** Click a movie to navigate to a dedicated playback page with a large, top-aligned YouTube player.
- **Global Dark/Light Theme:** Toggle between dark and light modes for the entire app.
- **Responsive Design:** Fully responsive for desktop and mobile devices.
- **Redux State Management:** Robust state management for genres, movies, and theme mode.
- **Search:** Quickly find movies by title with instant search suggestions.
- **Tooltips:** Movie cards display tooltips with the full movie title on hover.

## Usage

1. **Browse Movies:** Scroll through genres and movies on the homepage.
2. **Preview Trailers:** Hover over a movie card to see a trailer preview.
3. **Watch Movie:** Click a movie card to open the playback page and watch the trailer in a distraction-free view.
4. **Search:** Use the search bar to find movies by title.
5. **Theme Toggle:** Use the theme button in the footer to switch between dark and light modes.

## Tech Stack
- React 18 + TypeScript
- Redux Toolkit
- Material UI (MUI)
- React Router
- React YouTube

## Development

- Install dependencies: `yarn install`
- Start the app: `yarn start`
- Build for production: `yarn build`

## Project Structure
- `src/components/` — UI components (movie cards, sliders, header, footer, etc.)
- `src/data/songs.json` — Movie data (titles, genres, YouTube links)
- `src/store/` — Redux slices and store
- `src/Pages/` — Main app pages (Home, Watch)
- `src/utils/` — Utility functions and types

## Customization
- Add or edit movies in `src/data/songs.json` (replace with your own YouTube trailer links and images).
- Adjust genres and UI themes in the relevant files in `src/components/` and `src/store/`.

## License
MIT
