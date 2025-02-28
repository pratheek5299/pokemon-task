# Pokemon Explorer
### [Live Link](https://pokemon-task-five.vercel.app/])
## 📌 Overview
Pokemon Explorer is a responsive web application built with Next.js that allows users to explore various Pokémon fetched from the PokeAPI. The app provides a search feature to filter Pokémon by name and detailed pages displaying their abilities, types, and stats.

## 🚀 Features
- **Homepage:** Displays a list of Pokémon fetched from PokeAPI.
- **Search Functionality:** Allows users to search for Pokémon by name.
- **Detail Page:** Provides an overview of selected Pokémon, including images, types, abilities, and stats.
- **Optimized Performance:** Utilizes static site generation (SSG) for faster loading times.

## 🛠 Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **API:** PokeAPI (https://pokeapi.co/)
- **Icons:** react-icons

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/pratheek5299/pokemon-task.git
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Development Server
```bash
npm run dev
```

### 4️⃣ Open the Application
By default, the app runs on `http://localhost:3000`.

## 📸 Screenshots
![Homepage Screenshot](https://github.com/user-attachments/assets/31604fea-f519-4c71-ae58-e48bd8fe42fb)
![Pokemon Detail Page](https://github.com/user-attachments/assets/3e32b62c-f45c-4388-87c1-f8e282b68f1f)


## 🏗 Project Structure
```
/pokemon-task
│── src
│   ├── app
│   │   ├── page.js  # Homepage listing all Pokémon
│   │   ├── pokemon
│   │   │   ├── [id]
│   │   │   │   ├── page.js  # Dynamic Pokémon detail page
│   ├── components
│── public
│── next.config.js
│── package.json
│── README.md
```

## 🔥 Deployment
To build and export the project for static hosting:
```bash
npm run build && npm run export
```

## 🛠 Configuration
To allow Next.js to fetch images from external sources, update `next.config.js`:
```js
module.exports = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};
```

## 👨‍💻 Author
- **[Pratheek](https://github.com/pratheek5299)**


---


