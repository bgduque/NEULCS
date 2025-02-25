Here’s an improved version of your README with a detailed explanation about installing Expo Go:  

---

# NEUVIS - Virtual ID System  

NEUVIS is a visitor management system for school security, built using **React Native, TypeScript, Expo, and Supabase**.  

## 📌 Tech Stack  
- **React Native** - Mobile app framework  
- **Expo** - Development environment  
- **Supabase** - Backend services  
- **TypeScript** - Strongly typed JavaScript  

## 🚀 Getting Started  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-repo/NEUVIS.git
cd NEUVIS
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Install Expo Go on Your Mobile Device  
**Why do we need Expo Go?**  
Expo Go allows us to run and test our React Native app directly on a physical device without the need for a complicated build process. It enables **live reloading**, meaning any changes made in the code will reflect in real-time on the app without restarting the development server.  

📲 **To install Expo Go:**  
- **For Android:** [Download from Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)  
- **For iOS:** [Download from the App Store](https://apps.apple.com/app/expo-go/id982107779)  

Once installed, you'll be able to scan the QR code provided by `npx expo start` to run the app on your phone.  

### 4️⃣ Set Up Environment Variables  
Create a `.env` file in the root directory and add:  
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5️⃣ Start the Development Server  
```sh
npx expo start
```
- If using a **physical device**, open **Expo Go** and scan the QR code displayed in your terminal or browser.  
- If using an **emulator**, make sure it's running before starting the project.  

## 📖 Resources  
- [React Native Docs](https://reactnative.dev/)  
- [Expo Docs](https://docs.expo.dev/)  
- [Supabase Docs](https://supabase.com/docs)  

---

This should ensure that your team understands why Expo Go is needed and how to set it up. Let me know if you need any other clarifications! 🚀