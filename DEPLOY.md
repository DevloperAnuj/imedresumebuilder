# Deployment Guide

Since this is a static React application built with Vite, you can deploy it easily for free on platforms like Vercel, Netlify, or GitHub Pages.

## Option 1: Vercel (Recommended)
Vercel is optimized for frontend frameworks and requires zero configuration.

1.  **Push your code to GitHub.**
2.  Go to [Vercel.com](https://vercel.com) and sign up/login.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your GitHub repository.
5.  Vercel will detect it's a **Vite** project automatically.
6.  Click **Deploy**.
7.  Your site will be live in seconds!

## Option 2: Netlify

1.  **Push your code to GitHub.**
2.  Go to [Netlify.com](https://netlify.com) and sign up/login.
3.  Click **"Add new site"** -> **"Import from existing project"**.
4.  Connect to GitHub and select your repo.
5.  **Build Command:** `npm run build`
6.  **Publish directory:** `dist`
7.  Click **Deploy site**.

## Option 3: Manual / Local Build

If you want to host it on a traditional web server (Apache/Nginx):

1.  Run the build command:
    ```bash
    npm run build
    ```
2.  This creates a `dist` folder in your project root.
3.  Upload the contents of the `dist` folder to your web server's public html directory.
