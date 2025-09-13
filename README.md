# Taste Taker - Recipe Discovery and Management

Welcome to **Taste Taker**, a React Native mobile application focused on recipe discovery, management, and user authentication.

---

## 📱 **Main Purpose**

**Taste Taker** is a mobile application that allows users to search for recipes, view detailed information about them, and manage their favorite or bookmarked recipes. Additionally, it features user authentication and profile management.

---

## ✨ **Key Features**

- **Recipe Search**:  
  Users can search for recipes by name, with results displayed in a scrollable list. Each recipe in the list shows:
  - Image
  - Name
  - Cuisine
  - Rating

- **Recipe Details**:  
  A dedicated screen shows detailed recipe information, including:
  - Image
  - Name
  - Cuisine
  - Difficulty
  - Calorie Count
  - Rating
  - Ingredients
  - Preparation Instructions
  - Prep/Cook Times
  - Servings
  - Tags
  - Meal Type

- **User Authentication**:  
  The app includes screens for:
  - Starting the app
  - Logging in
  - Registering new users  
  User credentials are stored locally using **AsyncStorage**.

- **User Profile**:  
  Users can view their profile information (name, email) and sign out.

- **Navigation**:  
  The app features a persistent **BottomBar** for easy navigation between core sections:
  - Home
  - Search
  - Bookmarks
  - Favorites
  - User Profile  
  The **HeaderBar** displays the app logo, title, and a drawer toggle.

---

## 🛠 **Technologies Used**

- **React Native**: The core framework for building the mobile application.
- **Expo**: Used as the build and development toolchain.
- **AsyncStorage**: For local data persistence, storing user credentials and app settings.
- **React Navigation**: For managing screen transitions and navigation stacks/drawers.
- **react-native-vector-icons**: For providing icons used in the BottomBar.

---

## 🧩 **Overall Architecture**

The application follows a **component-based architecture**, typical of React Native apps.

### Entry Point

- **App.js**: The root component, registering the main App component with Expo.

### Navigation

- **Authentication Flow**:  
  - Stack Navigator manages authentication screens (`StarterPage`, `Login`, `Register`).
  - Once authenticated, users are transitioned to a **Drawer Navigator**, providing access to core features like **Home**, **Search**, **Bookmarks**, **Favorites**, and **User Profile**.

### Core Screens

- **SearchPage**: For searching and displaying recipes.
- **DetailsPage**: For showing detailed recipe information.
- **StarterScreen**: The initial screen where users can start the authentication process.
- **RegisterScreen**: For registering new users.
- **UserProfileScreen**: For viewing and managing the user’s profile.
- **BookMarkScreen**: For managing bookmarked recipes.
- **HomeScreen** (implied): Likely displays the main content or homepage.
- **FavouriteScreen** (implied): For viewing favorite recipes.

### Reusable Components

- **BottomBar**: Used across different screens for navigation.
- **HeaderBar**: Displays the app logo and title.
- **RecipeContainer**: Likely used to display individual recipe items.

### Data Handling

- The **SearchPage** fetches data from a dummy API.
- User data (e.g., login credentials) is stored and retrieved via **AsyncStorage**.

---

## 🚀 **Getting Started**

### Prerequisites

Make sure you have the following installed:
- **Node.js** (for React Native development)
- **Expo CLI** (for running the app with Expo)

### Installation

Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/taste-taker.git

### Next Step:
Navigate to the project directory and install the dependencies:
```bash
cd taste-taker
npm install

###Running Locally:
Run the app with Expo:
```bash
npm run android
or
expo start
