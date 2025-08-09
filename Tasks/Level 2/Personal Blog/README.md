# Personal Blog Homepage

A fully responsive personal blog homepage built with React, featuring modern design, filtering capabilities, and pagination.

## Features

### Core Features
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Blog Post Cards**: Display posts with title, image, description, date, and category
- **Category Filtering**: Filter posts by category (Tech, Travel, Food, All)
- **Search Functionality**: Search posts by title or description keywords
- **Pagination**: Navigate through posts with 6 posts per page
- **Modern UI**: Clean, accessible design with smooth animations

### Technical Features
- **React Hooks**: Uses useState and useEffect for state management
- **Conditional Rendering**: Dynamic display of filtered and paginated results
- **Responsive Grid**: CSS Grid layout that adapts to screen size
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **SEO-Friendly**: Semantic HTML structure with proper heading hierarchy

## Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Comprehensive styling with responsive design
├── index.css        # Global styles and CSS reset
└── main.jsx         # Application entry point
```

## Components Overview

### App Component
The main component that includes:
- **Header**: Blog title and subtitle
- **Search & Filter Controls**: Search bar and category buttons
- **Blog Grid**: Responsive card layout for posts
- **Pagination**: Navigation controls for multiple pages
- **Footer**: Copyright information

### State Management
- `posts`: Original blog data array
- `filteredPosts`: Posts filtered by category and search
- `selectedCategory`: Currently selected category filter
- `searchTerm`: Current search input value
- `currentPage`: Current page number for pagination
- `postsPerPage`: Number of posts displayed per page (6)

## Responsive Breakpoints

- **Mobile**: < 768px - Single column layout
- **Tablet**: 768px - 1023px - Two column layout
- **Desktop**: ≥ 1024px - Three column layout
- **Large Desktop**: ≥ 1200px - Enhanced spacing and sizing

## Image Placeholders

The blog uses placeholder images from via.placeholder.com. To add your own images:

1. Replace the `image` URLs in the `blogPosts` array in `App.jsx`
2. Use the format: `"path/to/your/image.jpg"`
3. Recommended image dimensions: 400x250px for optimal display

## Customization

### Adding New Categories
1. Add the category name to the `categories` array
2. Add posts with the new category to the `blogPosts` array

### Changing Posts Per Page
Modify the `postsPerPage` constant in the App component (currently set to 6)

### Styling Customization
- Primary color: `#667eea` (can be changed in CSS variables)
- Font family: Segoe UI (can be modified in index.css)
- Card shadows and animations can be adjusted in App.css

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader compatibility
- High contrast mode support
- Reduced motion preferences respected

## Performance Optimizations

- Lazy loading for images
- Efficient filtering and pagination
- Optimized CSS with minimal reflows
- Responsive images with proper sizing
- Smooth animations with hardware acceleration

## Future Enhancements

- Individual blog post pages
- Comments system
- Social media sharing
- Dark mode toggle
- Advanced search filters
- Blog post categories page
- RSS feed integration
