export type Project = {
  title: string;
  description: string;
  impact: string;
  tags: string[];
  github?: string;
  // Internal route to a demo page, e.g. '/walkthrough'
  demo?: string;
};


export const projects: Project[] = [
  {
    title: 'GroupMeet',
    description: 'A collaborative software engineering project designed to help users connect, organize, and manage group activities. The application provides a platform for users to create and join groups, communicate with others, and coordinate events in one place.',
    impact: 'Built Google and GitHub OAuth sign-in end to end, from the Spring Boot backend to the React Native frontend, using JWT tokens to authenticate users across the app.',
    tags: ['React Native', 'Spring Boot', 'Supabase', 'Heroku'],
    github: 'https://github.com/krnagy-csu/CST-438-Fall-25-Project-3-Backend',
    demo: '/walkthrough',
  },
  {
    title: 'TheMovieWiki',
    description: 'An IMDb-style movie site built with Node.js, Express, HTML, and CSS. Users can search thousands of movies and view details for each one, powered by the TMDb API.',
    impact: 'Created the Express API routes and integrated the TMDb public API to fetch movie data and display it throughout the site.',
    tags: ['Node.js', 'Express', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/krnagy-csu/Cst336Final',
  },
  {
    title: 'Ottertune',
    description: 'A Spotify-based Python application for searching songs, liking tracks, and creating or deleting playlists, built with the Spotipy library.',
    impact: 'Built the music overview feature, which shows an artist and their other songs, along with the add-to-playlist and liked songs actions within that overview.',
    tags: ['Python', 'Flask', 'HTML', 'CSS'],
    github: 'https://github.com/vincentmpalma/Ottertune',
  },
];
