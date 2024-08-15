# Starter Kit: React + Vite + TypeScript + Express.js + Netlify

This is a starter kit project that integrates React with Vite, TypeScript, and Express.js, all configured for easy deployment on Netlify. The project is structured with a monorepo setup, enabling you to develop both the frontend and backend in one unified codebase.

## Features

-  **React** with **Vite** for blazing fast development and bundling.
-  **TypeScript** for static typing and better code quality.
-  **Express.js** for a robust backend API.
-  **Netlify** deployment configuration with `netlify.toml`.
-  **ESLint** for code linting and consistency.
-  **Concurrently** to run both frontend and backend in development mode.

## Project Structure

starterkit-react-vite-typescript-expressjs-netlify/
├── backend/
│ ├── index.js
│ ├── ... (other backend files)
├── src/
│ ├── main.tsx
│ ├── App.tsx
│ ├── ... (other frontend files)
├── public/
│ ├── index.html
├── netlify.toml
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md

-  **backend/**: Contains the Express.js server files.
-  **src/**: Contains the React frontend source files.
-  **public/**: Contains static files such as `index.html`.
-  **netlify.toml**: Configuration file for Netlify deployment.
-  **package.json**: Contains npm scripts and dependencies.
-  **tsconfig.json**: TypeScript configuration file.
-  **vite.config.ts**: Vite configuration file.

## Getting Started

### Prerequisites

Ensure you have the following installed:

-  [Node.js](https://nodejs.org/) (version 14 or higher)
-  [npm](https://www.npmjs.com/get-npm) (version 6 or higher)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/dominicpam89/starterkit-react-vite-typescript-expressjs-netlify.git
   cd starterkit-react-vite-typescript-expressjs-netlify
   ```

2. Install dependencies
   ```
       npm install
   ```

### Running the Project

To start the project in development mode, run:
`    npm run dev
   `
This will start both the Vite development server for the frontend and the Express.js for the backend concurrently.
**frontend port**: localhost:5173
**backend port**: localhost:4800

### Building for Production

To build the project for production, run:

```
npm run build
```

This command will compile TypeScript, bundle the frontend using Vite, and prepare the backend for deployment.

### Backend Only

To run the backend server in development mode without serving frontend:

```
npm run backend:dev
```

To build the backend for production:

```
npm run backend:build
```

This will install the necessary production dependencies for the backend.

## Deployment

The project is configured to be deployed on Netlify. The netlify.toml file is included for automatic deployment configuration. Ensure your backend is set up correctly for serverless deployment using the serverless-http package.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
