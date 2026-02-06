# React Experiments - Full Stack Development

This project contains three experiments demonstrating various React concepts including component creation, state management, and object-oriented programming in JavaScript.

## Experiments Included

### Experiment 3.1: Product Card Component
- **Objective**: Create a reusable ProductCard component with props
- **Concepts**: React props, conditional rendering, responsive design
- **Features**: 
  - Dynamic product display
  - Stock status indicator
  - Hover effects
  - Responsive grid layout

### Experiment 3.2: Library Management System
- **Objective**: Build a library management UI with CRUD operations
- **Concepts**: State management with hooks, form handling, array operations
- **Features**:
  - Search functionality
  - Add new books
  - Remove books
  - Real-time filtering

### Experiment 3.3: Person Class Hierarchy
- **Objective**: Implement OOP with inheritance in JavaScript
- **Concepts**: ES6 classes, inheritance, polymorphism, method overriding
- **Features**:
  - Person base class
  - Student and Teacher subclasses
  - Polymorphic methods
  - Dynamic UI rendering

## Project Structure

```
React Exps/
├── src/
│   ├── Experiment_3/
│   │   ├── Exp3_1/
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductCard.css
│   │   ├── Exp3_2/
│   │   │   ├── LibraryUI.jsx
│   │   │   └── LibraryUI.css
│   │   └── Exp3_3/
│   │       ├── PersonHierarchy.jsx
│   │       └── PersonHierarchy.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Create a new Vite React project (if not already created):
```bash
npm create vite@latest react-exps -- --template react
cd react-exps
```

2. Install dependencies:
```bash
npm install
```

3. Replace the files in the `src` directory with the provided files

4. Create the folder structure:
```bash
mkdir -p src/Experiment_3/Exp3_1
mkdir -p src/Experiment_3/Exp3_2
mkdir -p src/Experiment_3/Exp3_3
```

5. Place the files in their respective directories:
   - `ProductCard.jsx` and `ProductCard.css` → `src/Experiment_3/Exp3_1/`
   - `LibraryUI.jsx` and `LibraryUI.css` → `src/Experiment_3/Exp3_2/`
   - `PersonHierarchy.jsx` and `PersonHierarchy.css` → `src/Experiment_3/Exp3_3/`
   - `App.jsx`, `App.css`, `main.jsx`, `index.css` → `src/`

6. Start the development server:
```bash
npm run dev
```

7. Open your browser and navigate to `http://localhost:5173`

## Usage

The application includes a navigation bar at the top with buttons to switch between experiments:
- Click "Exp 3.1: Product Card" to view the product cards
- Click "Exp 3.2: Library UI" to access the library management system
- Click "Exp 3.3: Person Hierarchy" to see the class hierarchy demonstration

## Features by Experiment

### Exp 3.1 Features:
- Displays three product cards (Wireless Headphones, Mechanical Keyboard, Smart Watch)
- Shows price, stock status with color coding
- Responsive grid layout
- Smooth hover animations

### Exp 3.2 Features:
- Search books by title or author
- Add new books with title and author
- Remove books from the list
- Real-time search filtering
- Form validation

### Exp 3.3 Features:
- Demonstrates OOP concepts in JavaScript
- Shows three instances: Person, Student, and Teacher
- Each class has unique properties and overridden methods
- Displays class hierarchy information

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **CSS3**: Styling with modern features
- **ES6+ JavaScript**: Classes, arrow functions, destructuring

## Course Outcomes Addressed

- **CO1**: Fundamental concepts of front-end development
- **CO2**: Interactive and responsive front-end applications
- **CO3**: Component-based architecture
- **CO4**: State management and hooks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

All experiments are fully responsive and work on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## License

This project is for educational purposes as part of Full Stack Development coursework.