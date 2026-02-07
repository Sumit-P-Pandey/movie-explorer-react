# 🎬 Movie Explorer — Favorites First

A clean, no-API React movie app focused on **state management, routing, and persistence**, not just UI screenshots.

This project was built to practice *how real apps behave*:

* data flows down
* actions flow up
* state survives refresh

No fake complexity. No unnecessary libraries.

---

## 🧠 Why this project exists

Most beginner movie apps stop at listing cards.

**Movie Explorer goes one step further**:

* Favorites are global state
* Routes are real pages, not conditional rendering
* Data is remembered using `localStorage`

This makes the project closer to how production React apps are structured.

---

## ✨ What it can do

* 🔍 Search movies by title (real-time filtering)
* ❤️ Add / remove movies from favorites
* 🧭 Navigate between Home and Favorites using React Router
* 💾 Persist favorites even after refresh
* 📱 Responsive layout (desktop → mobile)

---

## 🧩 Tech used (intentionally minimal)

* **React** (hooks-based)
* **React Router DOM** (v6)
* **Vite** (fast dev + clean build)
* **CSS Grid & Flexbox** (no UI frameworks)
* **localStorage** (client-side persistence)

No backend. No API.
The goal is mastering fundamentals, not stacking tools.

---

## 🗂 Project structure

```
root/
├─ index.html
└─ src/
   ├─ main.jsx        # Entry point
   ├─ App.jsx         # Routes + global state
   ├─ Home.jsx        # Movie list + search
   ├─ Favorites.jsx  # Saved movies
   ├─ MovieCard.jsx  # Reusable UI component
   ├─ App.css
   └─ index.css
```

---

## ⚙️ How it works (quick walkthrough)

### Favorites logic

* Favorites live in `App.jsx`
* Passed down as props
* Toggled via a single handler
* Synced to `localStorage` using `useEffect`

This avoids prop duplication and keeps behavior predictable.

### Routing

* `/` → Home (discover + search)
* `/favorites` → Saved movies

React Router handles navigation without page reloads.

---

## 🚀 Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL.

---

## 📌 What this project proves

* Understanding of **React state flow**
* Comfort with **React Router v6**
* Ability to build **non-trivial UI without libraries**
* Clean separation of components
* Awareness of real-world persistence needs

---

## 🔮 Possible next upgrades

* Replace static data with a real movie API
* Add pagination
* Add sorting (rating / title)
* Extract favorites into a custom hook

---

## 👤 Author

Built by **Sumit Pandey**

Focused on learning React the *right way* — by building, breaking, and fixing.

---

> This project intentionally avoids boilerplate descriptions.
> It reflects how the app is *thought*, not just how it looks.
