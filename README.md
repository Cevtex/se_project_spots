# Spots

## Description

Spots is a responsive photo-sharing web application that showcases beautiful locations from around the world. The project features a clean, modern design with a user profile section and a grid of photo cards displaying various scenic destinations.

The site is fully responsive and adapts seamlessly across desktop (1440px), tablet, and mobile (320px) screen sizes, ensuring an optimal viewing experience on all devices.

## Functionality

- Responsive grid layout that displays 3 cards on desktop, 2 on tablet, and 1 on mobile
- User profile section with editable profile functionality
- Add new posts with "+ New Post" button
- Interactive like buttons on photo cards with hover states
- Text overflow handling with ellipsis for long titles and descriptions
- Centered content with maximum width constraints for optimal readability
- Smooth transitions and hover effects on all interactive elements

## Technologies and Techniques

- **HTML5**: Semantic markup with proper document structure
- **CSS3**: Modern styling techniques including custom properties
- **Flexbox**: Flexible layouts for header, profile section, and card content
- **CSS Grid**: Responsive card gallery with column adjustments based on screen size
- **BEM Methodology**: Organized CSS architecture following Flat BEM file structure
- **Responsive Design**: Mobile-first approach with media queries for tablet and desktop
- **Custom Fonts**: Poppins font family loaded via @font-face
- **Text Overflow Handling**: 
  - Single-line ellipsis truncation for card titles
  - Multi-line clamping (3 lines) for profile text elements
- **Normalize.css**: Ensures cross-browser consistency
- **Accessibility**: Proper alt attributes, aria-labels, and hover states for all interactive elements

## Project Structure

```
se_project_spots/
├── blocks/           # BEM blocks (separate CSS files)
│   ├── card.css
│   ├── cards.css
│   ├── footer.css
│   ├── header.css
│   ├── page.css
│   └── profile.css
├── images/           # All project images
├── pages/            # Page-level styles
│   └── index.css
├── vendor/           # Third-party code
│   ├── fonts/
│   ├── fonts.css
│   └── normalize.css
├── index.html
├── favicon.ico
├── .gitignore
├── .prettierignore
└── README.md
```

## Screenshots

[Add screenshots of your desktop, tablet, and mobile views here]

## Live Demo

[Add your GitHub Pages link here: https://yourusername.github.io/se_project_spots]

## Design

* [Link to Figma Design](https://www.figma.com/file/BBNm2bC3lj8QQMHlnqRsga/Sprint-3-Project-%E2%80%94-Spots?type=design&node-id=2%3A60&mode=design&t=afgNFybdorZO6cQo-1)

## Future Enhancements

- JavaScript functionality for like buttons
- Modal for editing profile information
- Form for adding new posts
- Image upload functionality
- User authentication