# 🕌 Islamic World Website

**The official website for Islamic World — your companion for a connected Islamic lifestyle.**

This repository contains the source code for the Islamic World website, built to introduce the Android application and provide users with access to its latest APK release.

🌐 **Live Website:** [islamicworldwebsite.ubaidbilal957.workers.dev](https://islamicworldwebsite.ubaidbilal957.workers.dev/)

📱 **Android App:** [Islamic World Releases](https://github.com/ciperpy/Islamic-World/releases/latest)

## ✨ Features

* 📲 **APK Downloads** — Access the latest available Android app release.
* 🔄 **Dynamic Version Information** — Fetches the latest release information from GitHub.
* 📦 **Release Details** — Displays available information such as version, release date, file size, and release notes.
* 🧾 **Version History** — Provides release information through the website's version-history section.
* 📱 **Responsive Design** — Designed to provide a user-friendly experience across different screen sizes.
* ⚡ **Fast Deployment** — Hosted on Cloudflare.

*Displayed information depends on the availability and implementation of the relevant GitHub release data.*

## 🔄 Automatic Release Detection

The website uses the GitHub Releases API to retrieve information about the latest Android app release.

Repository used:

`ciperpy/Islamic-World`

API endpoint:

`https://api.github.com/repos/ciperpy/Islamic-World/releases/latest`

When a new release is published with an APK asset, the website can retrieve the updated release information and use the new APK download URL.

### Publishing a New App Version

1. Update the Android application.
2. Build the new signed release APK.
3. Create a new GitHub Release in the Android app repository.
4. Add a new version tag, such as `v1.2.2`.
5. Upload the APK and publish the release.
6. Visit the website and verify that the new version and download link are displayed correctly.

The website is designed to detect new releases automatically, so routine APK updates should not require manually editing the website source code.

**Note:** Release detection depends on the GitHub API being accessible and the release containing a valid APK asset. The website also has a configured fallback version.

## 🛠️ Tech Stack

* React
* TypeScript
* Vite
* CSS
* GitHub Releases API
* Cloudflare Workers

## 💻 Run Locally

### Prerequisites

Install a supported version of Node.js and npm.

### Installation

Clone the repository:

```bash
git clone https://github.com/ciperpy/IslamicWorldWebsite.git
```

Move into the project directory:

```bash
cd IslamicWorldWebsite
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

### Production Build

Create a production build:

```bash
npm run build
```

Vite generates the production output in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🚀 Deployment

The website is deployed through Cloudflare.

The connected GitHub repository is:

`ciperpy/IslamicWorldWebsite`

The production build command is:

```bash
npm run build
```

The project is configured to build from the repository's root directory.

## 📁 Repository Structure

```text
IslamicWorldWebsite/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── services/
│   ├── App.tsx
│   └── ...
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

*The structure above is a simplified overview.*

## 🔗 Links

* **Live Website:** https://islamicworldwebsite.ubaidbilal957.workers.dev/
* **Android App Repository:** https://github.com/ciperpy/Islamic-World
* **Latest APK Release:** https://github.com/ciperpy/Islamic-World/releases/latest

## 👨‍💻 Developer

**Ubaid Bilal**

GitHub: [@ciperpy](https://github.com/ciperpy)

---

Built with care for the Islamic World project. 🕌
