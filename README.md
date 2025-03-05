# NEUVIS 
<p align="center">
<a href="https://reactnative.dev/">
<img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<a href="https://expo.dev/">
<img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white">
<a href="https://www.typescriptlang.org/">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<a href="https://supabase.com/">
<img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white">
</p>

> A modern visitor management system enhancing school security through digital identification

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
- [Development](#-development)
  - [Running the App](#running-the-app)
  - [Testing](#testing)
- [Deployment](#-deployment)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [Resources](#-resources)
- [License](#-license)

## 🔍 Overview

NEUVIS (NEU Virtual Identification System) is a comprehensive visitor management solution designed specifically for educational institutions. The system streamlines the visitor check-in process, enhances campus security, and provides real-time monitoring capabilities for school administrators.

## ✨ Features

- **Digital Visitor Check-in/Check-out**: Paperless registration process for visitors
- **ID Verification**: Scan and validate visitor identification
- **Host Notification**: Automatic alerts to staff when their visitors arrive
- **Visitor Badge Printing**: Generate temporary identification badges
- **Reporting & Analytics**: Track visitor patterns and generate security reports
- **Pre-registration**: Allow expected visitors to be registered in advance
- **Watchlist Screening**: Flag unauthorized visitors based on security database
- **Custom Branding**: School-specific theming and personalization

## 🛠 Tech Stack

- **Frontend**
  - [React Native](https://reactnative.dev/) - Cross-platform mobile framework
  - [Expo](https://expo.dev/) - React Native development platform
  - [TypeScript](https://www.typescriptlang.org/) - Static type checking
  - [React Navigation](https://reactnavigation.org/) - Navigation library
  - [React Native Paper](https://callstack.github.io/react-native-paper/) - Material Design components

- **Backend & Services**
  - [Supabase](https://supabase.com/) - Open source Firebase alternative
    - Authentication
    - PostgreSQL Database
    - Storage
    - Real-time subscriptions

- **Development Tools**
  - [ESLint](https://eslint.org/) - Code linting
  - [Prettier](https://prettier.io/) - Code formatting
  - [Jest](https://jestjs.io/) - Testing framework

## 📁 Project Structure

```
neuvis/
├── assets/              # Static assets like images, fonts
├── src/
│   ├── api/             # API service methods
│   ├── components/      # Reusable UI components
│   ├── context/         # React Context providers
│   ├── hooks/           # Custom React hooks
│   ├── navigation/      # Navigation configuration
│   ├── screens/         # App screens
│   ├── services/        # Business logic services
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   └── App.tsx          # Application entry point
├── .env.example         # Example environment variables
├── app.config.js        # Expo configuration
├── babel.config.js      # Babel configuration
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- [npm](https://www.npmjs.com/) (v7.0.0 or later)
- [Supabase Account](https://supabase.com/) (for backend services)

### Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-org/neuvis.git
   cd neuvis
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

### Environment Setup

1. **Create Environment Variables File**
   ```sh
   cp .env.example .env
   ```

2. **Add Your Supabase Configuration**
   Open the `.env` file and add your Supabase credentials:
   ```
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Set Up Supabase Database**
   - Create a new Supabase project
   - Run the SQL setup scripts located in the `supabase/migrations` folder
   - Configure authentication providers as needed

## 💻 Development

### Running the App

**Using Expo Go**

1. Install Expo Go on your mobile device:
   - [Android PlayStore](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)

2. Start the development server:
   ```sh
   npx expo start
   ```

3. Scan the QR code with your device's camera (iOS) or through the Expo Go app (Android).

**Using Emulators**

Make sure you have Android Studio or Xcode installed, then:

```sh
# For Android
npx expo start --android

# For iOS
npx expo start --ios
```

### Testing

Run the test suite:

```sh
npm test
```

## 📤 Deployment

### Building for Production

1. **Build for Android**
   ```sh
   eas build -p android
   ```

2. **Build for iOS**
   ```sh
   eas build -p ios
   ```

3. **Submit to Stores**
   ```sh
   eas submit -p android
   eas submit -p ios
   ```

## 📚 API Documentation

Our app interacts with Supabase services. Here are the key endpoints:

| Endpoint | Description |
|----------|-------------|
| `/auth/*` | Authentication and user management |
| `/visitors` | Visitor registration and management |
| `/notifications` | Staff notification system |
| `/reports` | Analytics and reporting services |

For detailed API documentation, please refer to the [API Documentation](docs/API.md) file.

## 🤝 Contributing

We welcome contributions to improve NEUVIS! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows our [style guidelines](docs/CONTRIBUTING.md) and includes appropriate tests.

## 🔧 Troubleshooting

### Common Issues and Solutions

1. **"Unable to connect to Supabase"**
   - Verify that your environment variables are correctly set
   - Check your internet connection
   - Ensure your Supabase project is active

2. **"Expo Go app crashes on startup"**
   - Clear the cache: `npx expo start -c`
   - Check for compatibility issues between Expo SDK and dependencies

3. **"TypeScript errors during build"**
   - Run `npm run type-check` to identify and fix type issues

For additional help, please [open an issue](https://github.com/your-org/neuvis/issues) on the repository.

## 📖 Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [Supabase Documentation](https://supabase.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


<div align="center">
  <sub>Built with by students for students</sub>
</div>