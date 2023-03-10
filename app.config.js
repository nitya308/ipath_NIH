import 'dotenv/config';

export default {
  expo: {
    name: 'expo-firebase-auth-example',
    slug: 'expo-firebase-auth-example',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/icon.png',
    splash: {
      image: './src/assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      "bundleIdentifier": "ipath.ejected"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF'
      },
      "package": "ipath.ejected"
    },
    web: {
      favicon: './src/assets/favicon.png'
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      eas: {
        projectId: "dafe47ea-9deb-4808-8a27-4dded809e3b9"
      }
    }
  }
};
