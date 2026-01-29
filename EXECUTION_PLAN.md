### **Execution Plan: The Vue, Ionic & Rails Masterclass**

#### **Phase 1: Vue.js Fundamentals (Building the Web App) - COMPLETE**

*   **Objective:** To build a fully functional Todo application in your web browser. By the end of this phase, you will have a rock-solid understanding of the core principles of Vue.js.
*   **Steps:**
    1.  [x] **Project Setup:** Used the official Vue tools to create a new, modern Vue project from scratch.
    2.  [x] **Understanding the Vue Ecosystem:** Walked through the created files and folders, explaining the purpose of each one.
    3.  [x] **Your First Component:** Created our first Vue "Single-File Component" (SFC) and learned about its three parts: `<template>`, `<script>`, and `<style>`.
    4.  [x] **Reactivity & State:** Introduced Vue's reactivity system (`ref`) to store the list of to-dos and automatically update the UI.
    5.  [x] **Handling User Input:** Built a form to add new to-dos, covering event handling and data binding.
    6.  [x] **Displaying Lists:** Rendered the list of to-dos using the `v-for` directive.
    7.  [x] **Parent-Child Communication (Props & Events):** Broke the app into smaller components and passed data down with "props" and sent messages up with "events".
    8.  [x] **Deleting To-Dos:** Used the "events" concept to add a delete button and functionality.
    9.  [x] **Editing To-Dos (Toggle & In-Place):** Implemented the ability to mark to-dos as complete (toggle) and to edit their text directly.
    10. [x] **Computed Properties:** Explored computed properties to efficiently calculate derived data, like the count of incomplete to-dos.
    11. [x] **Persistence with Local Storage:** Made the app state persistent across page reloads by saving and loading the to-do list from the browser's Local Storage.

#### **Phase 2: Going Mobile with Ionic & Capacitor**

*   **Objective:** To transform our Vue web app into a native-looking mobile app that can run on iOS or Android.
*   **Steps:**
    1.  [x] **Introduction to Ionic & Capacitor:** Explained what Ionic is (a library of mobile UI components) and what Capacitor is (the bridge that lets our web code run on a mobile device).
    2.  [x] **Integrating Ionic:** Added Ionic and its dependencies to the existing Vue project and configured it.
    3.  [x] **Adapting the UI for Mobile:** Replaced the app's basic HTML elements with Ionic's beautiful, mobile-ready components, transforming the UI to look and feel like a native mobile app.
    4.  [x] **Running on a Mobile Simulator:** Successfully set up and ran the Vue-Ionic mobile app on an Android simulator.
        *   **Details:** Encountered and resolved several environment setup challenges:
            *   **JDK Installation & `JAVA_HOME`:** Located and installed OpenJDK 17, and configured the `JAVA_HOME` environment variable.
            *   **Android SDK & `ANDROID_HOME`:** Located the Android SDK installation and configured the `ANDROID_HOME` environment variable.
            *   **Java Version Incompatibility (`invalid source release: 21`):** Debugged a persistent Java version mismatch between the installed OpenJDK 17 and the Capacitor Android build process.
                *   **Solution:** Implemented a global override by adding a `subprojects` block to the top-level `android/build.gradle` file. This forces `sourceCompatibility` and `targetCompatibility` to `JavaVersion.VERSION_17` for all Android subprojects.
        *   **Outcome:** The app successfully built and deployed to the Android simulator.
    5.  [ ] **Building for iOS:** Set up and run the mobile app on a local iOS simulator.

#### **Phase 3: Building the Rails API Backend (Polyrepo)**

*   **Objective:** To create a separate, robust backend API to handle data persistence and business logic. This will replace the browser's Local Storage with a real database.
*   **Architecture:** We are using a decoupled **"polyrepo"** approach, managing the frontend (`vue-todo-app`) and backend (`todo-api`) in two separate, independent Git repositories.

*   **Steps:**
    1.  [x] **Setup Rails API Project:** Created a new Rails 7+ application in `--api` mode in a separate `todo-api` directory.
    2.  [x] **Initialize Git Repository:** Established a new, separate Git repository for the `todo-api` project and pushed the initial commit to its own repository on GitHub.
    3.  [x] **Generate Location Model:** Created the `Location` model and its corresponding database migration file (`db/migrate/..._create_locations.rb`) to define the structure for storing location names.
    4.  [ ] **Run Database Migration:** The next step is to run `rails db:migrate` to apply the migration, which will create the `locations` table in the development database.
    5.  [ ] **Generate Todo Model:** Create a `Todo` model with attributes like `task:string`, `completed:boolean`, and a reference to the `Location` model.
    6.  [ ] **Define API Routes:** Set up RESTful routes for `locations` and `todos`.
    7.  [ ] **Implement Controllers:** Build out the `LocationsController` and `TodosController` to handle CRUD (Create, Read, Update, Delete) operations.
    8.  [ ] **Enable Communication (CORS):** Configure Cross-Origin Resource Sharing in Rails to allow the Vue/Ionic frontend (running on a different origin) to make requests to this API.
    9.  [ ] **Connect Frontend to Backend:** Modify the Vue app to stop using Local Storage and instead make HTTP requests to the Rails API to fetch and manage data.