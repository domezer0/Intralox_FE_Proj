# Intralox Front-end Project

This is an exercise similar to the types of projects you can expect to work on at Intralox.

## The Objective

Update the index page template [`./src/pages/index.js`](./src/pages/index.js) to match the provided mobile and desktop designs.

* [Desktop layout](https://www.figma.com/proto/CDlwVork7LnPaME50JEDRS/Intralox%3A-Front-end-Project?page-id=0%3A1&node-id=2%3A174&viewport=334%2C48%2C1&scaling=min-zoom&starting-point-node-id=2%3A174)
* [Mobile layout](https://www.figma.com/proto/CDlwVork7LnPaME50JEDRS/Intralox%3A-Front-end-Project?page-id=0%3A1&node-id=2%3A343&viewport=334%2C48%2C1&scaling=min-zoom&starting-point-node-id=2%3A343)

The Figma design file is included at [`./reference/intralox_front-end-project.fig`](./reference/intralox_front-end-project.fig) as well and can be opened in the [free desktop app](https://www.figma.com/downloads/).

The end result should be a responsive web page that allows users to filter team members based on their job title by clicking the job title buttons.

We’re looking for candidates to demonstrate their ability to:

* Build responsive interfaces from visual designs
* Write modern, semantic HTML, CSS, and JavaScript
* Create interactive page elements that respond to user actions and update state

The code provided is a functioning Gatsby site that includes all the assets needed to complete the project.

* **Markup** - markup should be added to the existing site index template. The template is located at [`./src/pages/index.js`](./src/pages/index.js). If you’d like to create components to separate UI elements, create a `components` folder in `./src/` and add them there.
* **Styles** - this site is configured with both [tailwindcss](https://tailwindcss.com/docs) and a global stylesheet located at [`./src/styles/global.css`](./src/styles/global.css). Please use whichever method you prefer to style the page.
  * **Fonts** - the font family should remain as defined in the project, no need to update it to match Helvetica Neue which is used in the design
  * **Colors** - the following colors are used (hex / tailwind reference):
    * Dark gray (#111827 / gray-900) - headings
    * Gray (#6B7280 / gray-500) - body text
    * Light gray (#D1D5DB / gray-300) - borders, button hover
    * Blue (#1E40AF / blue-800) - active button
    * White (#FFFFFF / white)
* **Data** - all content needed to complete this exercise is available in the JSON file located at [`./src/content/index.json`](./src/content/index.json). This data is already available in the index template with the following attributes:
  * `page` - `<object>` the page’s content
    * `page.heading` - the page’s heading
    * `page.description` - the page’s description
  * `people` - `<array>` the people to list
    * `person.name` - the person’s name
    * `person.job_title` - the person’s job title
    * `person.bio` - the person’s bio
    * `person.photo` - the URL for the person’s photo
  * `job_titles` - `<array>` the job titles users can filter people by
* **Images** - images are in the `./src/static ` folder. Any files added to the static folder are available relative to the server’s root path. For example, the image `./src/static/images/adalyn-brown.png` is availble at [http://localhost:8000/images/adalyn-brown.png](http://localhost:8000/assets/adalyn-brown.png) when the server is running.

**Note:** Using Gatsby and React is **not** a requirement for this exercise. If you are more comfortable using another modern JavaScript framework, like Vue.js, you may copy the data and assets from this project to your own. Please provide instructions for installing and running the project when you deliver your solution.

## Getting Started

1. **Install the base Gatsby site.**

    Navigate to the project directory and install project dependencies using npm (Requires Node.js v18.13.0 or newer):

    ```shell
    # Install project dependencies using NPM
    npm install
    ```

2. **Start the development server.**

    Start Gatsby’s development server

    ```shell
    npm run develop
    ```

3. **Open the code and start developing!**

    The site is now running at http://localhost:8000

    Edit `src/pages/index.js` to see the site update in real-time

## Helpful links

* [Documentation](https://www.gatsbyjs.com/docs/)
* [Tutorials](https://www.gatsbyjs.com/docs/tutorial/)
* [Guides](https://www.gatsbyjs.com/docs/how-to/)
* [API Reference](https://www.gatsbyjs.com/docs/api-reference/)
* [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/)
