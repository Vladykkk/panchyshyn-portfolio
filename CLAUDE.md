# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Ukrainian artist portfolio website for Богдан Панчишин (Bohdan Panchyshyn), showcasing his paintings. The site is built with vanilla HTML, CSS, and JavaScript, featuring a gallery of artwork with detailed pages for each piece.

## Project Structure

```
/
├── index.html              # Main homepage
├── html/                   # Additional pages
│   ├── detail.html         # Artwork detail page
│   ├── gallery.html        # Gallery page
│   └── english.html        # English version
├── css/                    # Stylesheets
│   ├── style.css           # Main styles (imports all others)
│   ├── detail.css          # Detail page styles
│   ├── header.css          # Header component styles
│   ├── footer.css          # Footer component styles
│   ├── components.css      # Reusable components
│   ├── globals.css         # Global styles
│   ├── variables.css       # CSS custom properties
│   └── normalize.css       # CSS reset
├── js/                     # JavaScript files
│   ├── script.js           # Main site functionality
│   └── detail.js           # Detail page functionality
├── img/                    # Images and assets
├── products.json           # Artwork data
├── sendmail.php            # Contact form handler
└── phpmailer/              # PHPMailer library
```

## Development Workflow

Since this is a static website with no build process:

- **Local Development**: Open `index.html` directly in browser or use a local server
- **Testing**: Manual testing in browser
- **Deployment**: Upload files directly to web server

## Code Architecture

### CSS Organization
- **Modular approach**: Styles are split into focused files and imported into `style.css`
- **Variables**: CSS custom properties defined in `variables.css`
- **Components**: Reusable UI components in `components.css`
- **Responsive**: Mobile-first design with burger menu for mobile navigation

### JavaScript Structure
- **Vanilla JavaScript**: No frameworks or build tools
- **script.js**: Handles navigation, gallery rendering, and form validation (currently commented out)
- **detail.js**: Manages individual artwork detail pages
- **Data-driven**: Artwork information stored in `products.json` and dynamically rendered

### Data Management
- **products.json**: Contains all artwork data (id, image path, name, size, year, description)
- **Dynamic rendering**: JavaScript fetches and displays artwork data
- **URL routing**: Detail pages use query parameters (`?id=1`) for artwork identification

### Key Features
1. **Responsive navigation** with burger menu
2. **Dynamic gallery** populated from JSON data
3. **Detail pages** for individual artworks
4. **Contact form** with PHP backend (PHPMailer)
5. **Multi-language support** (Ukrainian primary, English available)

## Working with Artwork Data

- All artwork information is stored in `products.json`
- Each artwork has: id, image, name, size, description, year
- Image paths are relative: `../img/gallery/img_X.jpg`
- To add new artwork: add entry to JSON and place image in `img/gallery/`

## Contact Form
- Backend uses PHPMailer for email sending
- Form validation is implemented but currently commented out in `script.js`
- Email configuration in `sendmail.php` (currently hardcoded addresses)

## Browser Support
- Uses modern JavaScript features (fetch, arrow functions, template literals)
- CSS Grid and Flexbox for layouts
- Should work in all modern browsers