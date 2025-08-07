# Open Census

Open Census is a web application to discover citizens data using the Rick and Morty API.

## 🚀 Demo

Check out the live demo: [Open Census App](https://trutrip-tech-test.vercel.app/)

## 📋 Description

Open Census is a modern web application that allows users to explore and discover citizens data in an intuitive and user-friendly interface. The application leverages the [Rick and Morty API](https://rickandmortyapi.com/) to provide comprehensive character information and statistics.

## 🛠️ Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Local Development

Follow these steps to run the application locally:

1. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Environment Configuration**

   Create a `.env` file in the root directory and add the following environment variable:

   ```env
   NEXT_PUBLIC_API_URL=https://rickandmortyapi.com/api
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

The application will be available at `http://localhost:3000`.

## 📁 Project Structure

```
open-census/
├── public/                 # Static assets
├── src/
│   ├── app/               # App routing feature based (Next.js App Router)
│   ├── components/        # Reusable UI components
│   ├── constants/         # Shared common constants and configuration values
│   ├── hooks/             # Reusable custom React hooks
│   ├── lib/               # Common library configurations
│   ├── mocks/             # Data mocking for testing purposes
│   ├── services/          # External service and API clients
│   ├── store/             # Centralized state management
│   └── utils/             # Common utility functions and helpers
├── .env                   # Environment variables
├── package.json
└── README.md
```

### Folder Descriptions

- **`public/`** - Contains static assets like images, icons, and other files served directly
- **`src/app/`** - Next.js App Router directory for file-based routing and page components
- **`src/components/`** - Reusable React components used throughout the application
- **`src/constants/`** - Application-wide constants and configuration values
- **`src/hooks/`** - Custom React hooks for shared logic and state management
- **`src/lib/`** - Third-party library configurations and setup
- **`src/mocks/`** - Mock data and testing utilities
- **`src/services/`** - API clients and external service integrations
- **`src/store/`** - State management setup (Redux, Zustand, etc.)
- **`src/utils/`** - Helper functions and utility methods

## 🔧 Technologies Used

- **Framework**: Next.js
- **API**: Rick and Morty API
- **Package Manager**: npm/pnpm

## 📝 API Reference

This project uses the [Rick and Morty API](https://rickandmortyapi.com/) to fetch character data. The API provides information about characters, locations, and episodes from the Rick and Morty universe.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
