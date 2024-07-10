# Quick Start

If you want to explore the front-end of the website without setting up a local Content Management environment (which requires Docker and other dependencies) - you can follow this guide.

You will be able to change Next.js components, but you will not be able to update the website content or presentation details.

The only prerequisite is Nodejs 18.x (20.x should work too).

## Configuring and running front-end of the website

First, go to the `\src\rendering\.env` file and set the `SITECORE_EDGE_CONTEXT_ID` variable:

```bash
SITECORE_EDGE_CONTEXT_ID=5n2TNfi7hbOownczapLi2
```

This setting might change in future, so make sure you have the latest one if you run into any issues starting the app.

Then, go to the `\src\rendering` folder, install the dependencies and run your app:

```bash
npm install
npm run start:connected
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages by modifying files under the `\src\rendering`. The pages auto-update as you edit the files.
