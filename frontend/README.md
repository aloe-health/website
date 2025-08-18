# Aloe Frontend - SolidJS

A modern, high-performance frontend for Aloe Health built with SolidJS, Tailwind CSS v4, and TypeScript.

## About Aloe

Aloe is developing an at-home medical ultrasound device powered by AI vision algorithms for screening applications. This frontend showcases our mission to bring safe and accessible medical imaging technology directly to your home.

## Tech Stack

- **SolidJS** - Fast, declarative JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript with enhanced developer experience
- **Tailwind CSS v4** - CSS-first utility framework with modern features
- **Vite** - Next generation frontend build tool
- **Lucide Solid** - Beautiful & consistent icon library
- **Solid Motion One** - Performant animation library

## Features

- ⚡ Lightning-fast performance with SolidJS
- 🎨 Modern design with Tailwind CSS v4's CSS-first configuration
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🔧 TypeScript for better developer experience
- 📧 Contact form with Netlify integration
- 🎯 Snap scrolling for smooth navigation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation

1. Clone the repository and navigate to the frontend directory:
```bash
cd aloe/business/website/frontend-solidjs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run serve` - Serve production build

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing hero section
│   ├── Mission.tsx     # Mission statement with features
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Team.tsx        # Team member profiles
│   └── Footer.tsx      # Footer with contact info
├── App.tsx             # Main app component
├── index.tsx           # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Tailwind CSS v4 Configuration

This project uses Tailwind CSS v4's new CSS-first configuration approach. All customization is done directly in the CSS file using the `@theme` directive:

```css
@import "tailwindcss";

@theme {
  --color-emerald-400: #34d399;
  --color-green-100: #dcfce7;
  /* More custom theme values... */
}
```

No `tailwind.config.js` file is needed!

## Components Overview

### Hero
- Animated landing section with gradient background
- Large "aloe." title with spring animation

### Mission
- Three feature cards highlighting key benefits
- Icons from Lucide Solid library
- Hover animations on cards

### About
- Simple text section about the company
- Dark background for contrast

### Contact
- Contact form with Netlify integration
- Form validation and state management
- reCAPTCHA support

### Team
- Founder profile cards
- Profile images with animations
- Responsive grid layout

### Footer
- Company logo and copyright
- Contact email with hover effects

## Deployment

The application is optimized for deployment on modern hosting platforms:

1. **Build the project:**
```bash
npm run build
```

2. **Deploy the `dist` folder** to your hosting provider

### Netlify Deployment

For Netlify deployment with form handling:

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Forms will be automatically detected and handled

## Development Notes

- Uses SolidJS's fine-grained reactivity for optimal performance
- TypeScript provides full type safety throughout the application
- Tailwind CSS v4's CSS-first approach eliminates the need for JavaScript configuration
- Solid Motion One provides smooth animations with minimal bundle size
- Lucide Solid icons are tree-shakeable for optimal bundle size

## Performance Features

- **Zero JavaScript config** - Tailwind v4 CSS-first approach
- **Fine-grained reactivity** - SolidJS updates only what changes
- **Minimal bundle size** - Tree-shaking and optimized dependencies
- **Fast builds** - Vite's lightning-fast build system
- **Modern CSS features** - Cascade layers, custom properties, color-mix()

## Contributing

1. Follow the existing code style and TypeScript practices
2. Add appropriate type definitions for new components
3. Test responsive design across different screen sizes
4. Ensure animations are performant and accessible

## License

This project is part of the Aloe Health ecosystem. All rights reserved.

---

**Aloe Health** - Bringing medical imaging technology to your home.