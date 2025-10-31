# Storybook Deployment Instructions

The Storybook for this Calendar component has been set up and can be deployed publicly without requiring login.

## Quick Deployment to Vercel (Recommended)

### Option 1: Deploy via Vercel GitHub App (Easiest)

1. Go to https://vercel.com/new
2. Import the GitHub repository: `https://github.com/Pratikk404/Calendar`
3. In the project settings:
   - **Build Command:** `npm run build-storybook --legacy-peer-deps`
   - **Output Directory:** `storybook-static`
   - **Install Command:** `npm install --legacy-peer-deps`
4. Click "Deploy"
5. Your Storybook will be live at `https://<project-name>.vercel.app`

### Option 2: Deploy Manually via Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy the storybook-static folder
cd Calendar
npm run build-storybook
vercel ./storybook-static --name calendar-storybook
```

## GitHub Pages Deployment

If you prefer GitHub Pages:

1. Enable GitHub Pages in your repository settings
2. Set the source to `gh-pages` branch
3. Run this command to deploy:

```bash
npm run build-storybook
git subtree push --prefix storybook-static origin gh-pages
```

Your Storybook will be available at: `https://Pratikk404.github.io/Calendar/`

## What's Included in Storybook

The Storybook showcases the following components:

- **CalendarView** - Main calendar component with month navigation
  - Default story showing the calendar in standard view
  - Frame story showing the calendar in a styled container

## Accessing Storybook Without Login

Both deployment options above will make your Storybook publicly accessible without requiring any login.

Once deployed, you'll have a public URL that your client can share and view freely.

## Local Development

To view Storybook locally while developing:

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006`
