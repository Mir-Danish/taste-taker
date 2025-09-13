This repository outlines a React Native mobile application, likely named "Taste Hub," focused on recipe discovery and management.
Main Purpose: The application aims to provide users with a platform to search for recipes, view detailed information about them, and manage their favorite or bookmarked recipes. It also includes user authentication and profile management features.
Key Features:
Recipe Search: Users can search for recipes by name, with results displayed in a scrollable list showing image, name, cuisine, and rating.
Recipe Details: A dedicated screen displays comprehensive recipe information including image, name, cuisine, difficulty, calorie count, rating, ingredients, preparation instructions, prep/cook times, servings, tags, and meal type.
User Authentication: Includes screens for starting the app, logging in, and registering new users. User credentials are stored locally using AsyncStorage.
User Profile: Allows users to view their profile information (name, email) and sign out.
Navigation: Features a persistent BottomBar for navigating between core sections like Home, Search, Bookmarks, Favorites, and User Profile. A HeaderBar displays the app logo, title, and a drawer toggle.
Navigation Structure: Utilizes react-navigation to manage authentication flows (Starter, Login, Register) and the main application content via a drawer navigator.
Technologies Used:
React Native: The core framework for building the mobile application.
Expo: Used as the build and development toolchain, indicated by registerRootComponent.
AsyncStorage: For local data persistence, likely for user credentials and potentially other app settings.
React Navigation: For managing screen transitions and navigation stacks/drawers.
react-native-vector-icons: For providing icons used in the BottomBar.
Overall Architecture:
The application follows a component-based architecture typical of React Native.
Entry Point: The App.js file serves as the root component, registering the main App component with Expo.
Navigation: A primary navigation structure is defined, starting with a stack navigator for authentication screens (StarterPage, Login, Register). Upon successful authentication, it transitions to a drawer navigator that provides access to the main application features.
Core Screens: Key screens include SearchPage, DetailsPage, StarterScreen, RegisterScreen, UserProfileScreen, BookMarkScreen, and likely a HomeScreen and FavouriteScreen (implied by the BottomBar).
Reusable Components: Components like BottomBar and HeaderBar are designed for reusability across different screens. RecipeContainer is likely used to display individual recipe items.
Data Handling: The SearchPage fetches data from a dummy API, and user data is managed via AsyncStorage.
