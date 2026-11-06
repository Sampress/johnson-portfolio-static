# Johnson Portfolio — Static Render Version

This version is configured as a Render Static Site and does not require a Node web server or paid web service.

## Deploy on Render

1. Push this folder to a GitHub repository.
2. In Render, choose **New + → Static Site** and connect the repository.
3. Set the **Root Directory** to this folder if it is inside a larger repository.
4. Render can use `render.yaml`; otherwise set the build command to `echo 'Static site: no build required'` and the publish directory to `.`.

## Editing projects

Edit `data/works.json` and commit the change. Project images should be placed under `images/` and referenced by their relative path, for example `images/my-project.jpg`.

## Static-site limitations

- The Node API and password-protected admin dashboard are not included. A static host cannot securely write to files or run that API. Edit the JSON and redeploy to update projects.
- The contact form opens the visitor's email app addressed to `samibejide60@gmail.com`; it does not store messages or send them directly from the site.
- Keep `work.html` query URLs intact; they load project data from `data/works.json`.
