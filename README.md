

# Angular Complete Guide Course App 🚀

This project is a learning playground based on the Angular Complete Guide course. It demonstrates Angular fundamentals, component communication, dynamic rendering, and server-side rendering (SSR) with Express. The app is built with [Angular CLI](https://github.com/angular/angular-cli) v17.0.5.

## ✨ Features

- 🔗 **Component Communication**: Demonstrates parent-child and sibling communication using `@Input`, `@Output`, and event emitters.
- 🔄 **Dynamic Rendering**: Add, update, and remove server/blueprint elements dynamically.
- 🧩 **Custom Components**:
	- 🛠️ `CockpitComponent`: Add new servers or blueprints.
	- 🖥️ `ServerElementComponent`: Display server/blueprint details.
	- 🔢 `BtnArrayDisplayComponent`: Track and display button clicks with conditional styling.
	- ✅ `SuccessAlertComponent` & ⚠️ `WarningAlertComponent`: Show styled alert messages.
- 🎨 **Bootstrap Styling**: Uses Bootstrap 5 for UI components.
- 🌐 **Server-Side Rendering (SSR)**: Includes an Express server for SSR (see below).

## 🚀 Getting Started

### 📦 Prerequisites
- Node.js (v18+ recommended)
- npm

### ⚡ Installation
```bash
npm install
```

### 🏃 Development Server
```bash
npm start
# or
ng serve
```
Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser. The app reloads automatically on code changes.

### 🏗️ Build
```bash
ng build
```
Build artifacts are stored in the `dist/` directory.

### 🧪 Running Unit Tests
```bash
ng test
```
Executes unit tests via [Karma](https://karma-runner.github.io).

### 🌍 Server-Side Rendering (SSR)
This project includes a basic Express server for SSR. To build and run SSR:
```bash
ng build && ng run app:server
node dist/app/server/server.mjs
```

### 📁 Project Structure

- 🔢 `src/app/btn-array-display/` — Button click tracker component
- 🛠️ `src/app/cockpit/` — Add new servers/blueprints
- 🖥️ `src/app/server-element/` — Display server/blueprint details
- ✅ `src/app/success-alert/` — Success alert component
- ⚠️ `src/app/warning-alert/` — Warning alert component
- 🌐 `server.ts` — Express server for SSR

## 🕹️ Usage

- Add servers or blueprints using the Cockpit form.
- View and interact with the list of server elements.
- Use the button array display to see click tracking and dynamic styling.

## 👤 Author

Radoslav Bukov

## 📄 License

This project is for educational purposes.
