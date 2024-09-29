# Frontend Spotify UI Clone Assignment Submission

This assignment involves developing a responsive Spotify UI Clone music player using React JS based on the provided Figma design. The application will fetch song data from a REST API and allow users to control music playback, search for songs, and interact with tabs.

## Installation

- install packages `npm install`
- Run `npm run dev`

## Folder Structure

```
src/
│
├── api/
│   └── useSongData.js
│
├── assets/
│   ├── Home/
│   │   ├── SpotifyLoading.gif
│   │   ├── SpotifyLogo.png
│   └── export.js
│
│
├── components/
│   ├── AudioPlayer.jsx
│   ├── MusicList.jsx
│   ├── MusicPlayer.jsx
│   ├── MusicSearch.jsx
│   ├── MusicStack.jsx
│   └── SpotifySideBar.jsx
│
├── hooks/
│   ├── useLoading.jsx
│   └── useResponsive.jsx
│
├── pages/
│   └── Home.jsx
│
├── utils/
│   ├── GetAudioDuration.jsx
│   └── useHexToRgba.jsx
│
├── App.css
├── App.jsx
├── index.css
├── main.jsx
│
.gitignore
eslint.config.js
index.html
package-lock.json
package.json
README.md
vite.config.js


```

## Features

1. **Music Playback** - `AudioPlayer.jsx`, `MusicPlayer.jsx`: audio playback controls of the track.
2. **Music Search** - `MusicSearch.jsx`:users to search for songs or artists.
3. **Music List** - `MusicStack.jsx`: stack of songs for .
4. **Loading State Handling** - `useLoading.jsx`, `SpotifyLoading.gif`: Displays loading animations when fetching or rendering data.
5. **Responsive Design** - `useResponsive.jsx`: Adjusts app layout and components dynamically based on screen size.
6. **Spotify-Like Sidebar** - `SpotifySideBar.jsx`: Sidebar According to figma UI
7. **Home Page** - `Home.jsx`: core app components
8. **Audio Duration Calculation** - `GetAudioDuration.jsx`: Calculates and displays the duration of tracks in the player.
9. **Dynamic Styling** - `useHexToRgba.jsx`: Converts hex colors to RGBA for dynamic background color changes.
10. **API Integration for Song Data** - `useSongData.js`: Fetches song data from an API to populate the music player and list.
11. **Background Dynamic** - change background According to cover image.

## TechStack

- React JS
- Charkri UI
- vite
- React Router
- Audio API Web
- React Icons

## Deployment

[Spotify Clone](https://spotify-clone-psi-umber.vercel.app/)
