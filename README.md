# Portfolio - React Application

A modern, premium portfolio website built with React, featuring stunning animations, responsive design, and a beautiful dark theme.

## Features

- **Modern React Architecture**: Built with React 18 and Vite for optimal performance
- **Premium Design**: Glassmorphism effects, vibrant gradients, and smooth animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Interactive Elements**: 
  - Animated typing effect in hero section
  - Scroll-triggered reveal animations
  - 3D tilt effect on project cards
  - Animated stat counters
  - Ripple effects on skill tags
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Smooth Scrolling**: Enhanced navigation with active section highlighting

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with CSS Variables
- **Icons**: Font Awesome 6
- **Fonts**: Inter & JetBrains Mono (Google Fonts)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation with scroll effects
│   │   ├── Hero.jsx        # Hero section with typing animation
│   │   ├── About.jsx       # About section with animated stats
│   │   ├── Experience.jsx  # Timeline-based experience section
│   │   ├── Skills.jsx      # Skills grid with interactive tags
│   │   ├── Projects.jsx    # Project cards with 3D tilt effect
│   │   ├── Education.jsx   # Education cards
│   │   ├── Contact.jsx     # Contact section with social links
│   │   └── Footer.jsx      # Footer component
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles and design system
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## Design System

The portfolio uses a comprehensive design system with:
- **Color Palette**: Premium dark theme with vibrant accent colors
- **Typography**: Inter for body text, JetBrains Mono for code
- **Spacing**: Consistent spacing scale using CSS variables
- **Animations**: Smooth transitions and micro-interactions
- **Responsive Breakpoints**: Mobile-first approach

## Key Components

### Navbar
- Fixed navigation with scroll detection
- Mobile-responsive hamburger menu
- Active section highlighting
- Smooth scroll to sections

### Hero
- Animated typing effect cycling through titles
- Call-to-action buttons
- Gradient text effects

### About
- Animated stat counters triggered on scroll
- Grid layout with responsive design

### Experience
- Timeline layout with alternating cards
- Scroll reveal animations
- Detailed job descriptions

### Projects
- 3D tilt effect on hover
- GitHub links
- Technology tags
- Responsive grid layout

### Skills
- Categorized skill display
- Interactive tags with ripple effects
- Hover animations

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop**: > 968px
- **Tablet**: 640px - 968px
- **Mobile**: < 640px

## Customization

To customize the portfolio:

1. **Personal Information**: Update content in component files
2. **Colors**: Modify CSS variables in `src/index.css`
3. **Fonts**: Change font imports in `src/index.css`
4. **Animations**: Adjust animation timings in CSS or component logic

## Migration from Vanilla Version

The original vanilla HTML/CSS/JS files have been moved to the `old-vanilla-version/` directory for reference.

### Key Changes:
- Converted to React component architecture
- Maintained all original styling and animations
- Enhanced with React hooks for state management
- Improved code organization and reusability

## Deployment

The app can be deployed to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## License

© 2026 Vijaya Sai Latha Pulipati. Built with passion and code.

## Contact

- **Email**: viayasailatha@gmail.com
- **GitHub**: [pvsailatha711](https://github.com/pvsailatha711)
- **LinkedIn**: [vijaya-sai-latha](https://www.linkedin.com/in/vijaya-sai-latha/)
