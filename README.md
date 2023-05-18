# MOOVIE TIME

_Don't forget, it's moovie time!_

"Moovie-Time" is a website to search and discover all your favorite movies and TV shows. This project is made in order to complete one of the recruitment stage of Perqara.

## Tech Stack

* Next JS
* Typescript
* Tailwind
* Axios
* React Query

## Structure

This is the structure of the code that I have created. I have adjusted it in hopes that it will be easier for anyone who come upon this to understand the code thoroughly.

### components

The `components` folder is for global components that are used across pages or within the components itself. For specified components that are only used inside certain pages, I have created a `components` folder within it's respective folders.

### lib

The `lib` folder is for tools and utilities that are used to do certain tasks. Inside, you are going to find 3 _folders_ and a file:

1. `outbound`
2. `services`
3. `utils`
4. `types`

All of the functions used for HTTP requests are stored in `outbound`. Inside, you can find all the functions for requests that are using _axios_. `services` folder contains the model which utilizes the requests function in `oubtound`. This is where the _React Query_ functions are placed which will then be used in the UI/view components. `utils` is used to store all the utilities functions. Last, I placed all the types that are used in the `types` file.

### pages

This is where I store all the pages. It contains the U/view files.

_Note: Due to time constraint, I deeply apologize for that I have not been able to finish the movie detail page. However, other pages have been created down to their tiny details just like requested in the figma._

### public

All images and icons are stored here to be used in the `pages` folder.

### styles

Global styles for the project.

## Documentation

In order to start the app in development mode,  you can run this syntax in the project directory:

### `npm run dev`

By default, the app will open in [http://localhost:3000](http://localhost:3000). The page also has hot reload, which means that it will refresh if you make any edits.

If you want to build the app for production,  you can run this syntax in the project directory:

### `npm run build`

This will bundle the React in production mode and optimizes the build for the best performance.

Once it's done bundling the app, run this syntax next:

### `npm run start`

The minifed build will the be served and can now be accessed.
