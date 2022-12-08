# DONE:
>Setup with vue3 nuxt3 and vuetify 3
>Desired functionality + extras
>Simple theming + toggle
>Store using Pinia
>Most important parts of accesibility
>Use both of options and composition api
>Styling and responsive basics with vuetify classes
>Browser implementation
>Small error page, mostly to prevent wrong routing

# TODOS:
>Proper responsivenes, its more fluid than responsive atm
>Typescript implementation
>Unit testing
>Proper component splitting, with good separation of concerns
>Pagination for when list becomes too big
>Loading Spinner
>Styling
>Proper refactoring
>fix issues

# KNOWN ISSUES:
>If the button to add users is spammed you get repeated contacts ->
create a timeout or a similar check
>No check for non Latin Alphabets -> think on how to check and sort those

# HOW IT WORKS
>On load there are no contacts
>Button loads and displays 120 sorted extra contacts, can repeat the process
>Toggle theme will toggle between a light and a dark theme
>When screen gets small, the sidebar will dissapear
>Click on the contact avatar to open its card, click outside or on X button to close

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
