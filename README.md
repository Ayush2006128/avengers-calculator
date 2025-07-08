# Avengers Calculator

## Overview

Avengers Calculator is a web-based scientific calculator inspired by Marvel's Avengers and Tony Stark. It features mathematical functions including trigonometry (`sin`, `cos`, `tan`), logarithm (`log`), power (`^`), and square root (`√`).

## Features

- **Scientific Operations**: Perform advanced calculations using trigonometric, logarithmic, and exponential functions.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.
- **PWA Support**: Includes a service worker for offline capabilities.

## Development

To start the development server, run:

```bash
npm run dev
```

This will launch the Remix app in development mode using Vite.

### Scripts

- **Build**: `npm run build` - Compiles the project for production.
- **Start**: `npm start` - Runs the app in production mode.
- **Lint**: `npm run lint` - Lints the code using ESLint.
- **Typecheck**: `npm run typecheck` - Checks TypeScript types.

## Deployment

### Build

First, build the app for production:

```bash
npm run build
```

### Deploy

Run the app in production mode:

```bash
npm start
```

For deployment, you may choose your desired hosting service that supports Node.js applications.

## Configuration

- **Node Version**: Requires Node.js version 20 or higher.
- **Remix Vite Plugins**: Utilizes Remix plugins for a modern development experience.
- **Tailwind CSS**: Preconfigured with a simple default theme and responsive design capabilities.

## File Structure

Here are some key files and their purpose:

- `app/components/Calculator.tsx`: Main calculator component.
- `app/routes/_index.tsx`: Entry point for the index route.
- `vite.config.ts`: Configures Vite for the app.
- `tailwind.config.ts`: Configures Tailwind CSS for styles.

## Acknowledgments

- Developed using [Remix](https://remix.run/) with [Vite](https://vitejs.dev/).
- Styled with [Tailwind CSS](https://tailwindcss.com/).
