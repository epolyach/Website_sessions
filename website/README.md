# Natalia Poliachenko - Professional Coaching Website

A modern, responsive website for professional coaching and consulting services, featuring an elegant design with expandable content sections and multi-language support infrastructure.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices (mobile, tablet, desktop)
- **Interactive Elements**: Expandable case studies and session cards with smooth animations
- **Fixed Navigation**: Sticky header with smooth scroll navigation
- **Multi-language Ready**: Infrastructure prepared for English, French, and Russian translations
- **Accessibility**: Keyboard navigation support and proper ARIA labels
- **Performance Optimized**: Debounced scroll handlers and intersection observers for smooth performance

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended for testing)

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. For development, use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

## 📁 Project Structure

```
website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles with CSS variables and responsive design
├── js/
│   └── main.js           # JavaScript for interactivity
├── assets/
│   └── images/           # Image assets (add your images here)
└── README.md             # This file
```

## 🎨 Design System

### Color Palette

- **Primary Blue**: `#041f4a` - Main brand color
- **Secondary Teal**: `#48a9c0` - Accent color
- **Accent Green**: `#7bdcb5` - Highlights
- **Accent Coral**: `#ff6b6b` - Special features
- **Section-specific backgrounds**: Different subtle colors for each section

### Typography

- **Primary Font**: Inter (sans-serif) - Body text
- **Accent Font**: Playfair Display (serif) - Headers and titles

### Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🌐 Multi-language Support

The website is prepared for multi-language support with:

1. **Data Attributes**: All translatable content has `data-i18n` attributes
2. **Language Switcher**: UI buttons for EN/FR/RU (currently placeholder)
3. **Translation Structure**: JavaScript includes commented template for translation system

### Adding Translations

1. Create translation JSON files:
   ```javascript
   // translations/en.json
   {
     "nav": {
       "overview": "Overview",
       "cases": "Cases",
       "sessions": "Sessions",
       "about": "About Me"
     },
     // ... more translations
   }
   ```

2. Implement the translation function in `main.js` (template provided in comments)

3. Load appropriate language file based on user selection

## 🔧 Customization

### Adding Images

1. Place images in `assets/images/` folder
2. Update image sources in HTML:
   - Profile photo: Line 351 in `index.html`
   - Add any additional images as needed

### Modifying Content

- **Text Content**: Edit directly in `index.html`
- **Styles**: Modify CSS variables in `styles.css` for global changes
- **Colors**: Update color variables at the top of `styles.css`

### Adding New Sections

1. Add HTML structure in `index.html`
2. Create corresponding styles in `styles.css`
3. Add any needed JavaScript functionality in `main.js`
4. Update navigation menu with new section

## 📱 Features in Detail

### Expandable Cards

- Click on case studies or session cards to expand/collapse
- Only one card expanded at a time per section
- Smooth animation transitions
- Keyboard accessible (Tab + Enter/Space)

### Navigation

- Smooth scroll to sections
- Active state updates on scroll
- Mobile hamburger menu
- Accessible with keyboard (Tab navigation)

### Performance Features

- Debounced scroll handlers
- Intersection Observer for animations
- CSS transitions for smooth interactions
- Optimized for fast loading

## 🔄 Future Enhancements

- [ ] Complete multi-language implementation
- [ ] Add contact form functionality
- [ ] Integrate with CMS for content management
- [ ] Add analytics tracking
- [ ] Implement lazy loading for images
- [ ] Add testimonials carousel
- [ ] Create blog section
- [ ] Add social media links

## 🛠 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This website is proprietary to Natalia Poliachenko. All rights reserved.

## 👩‍💻 Development Notes

### CSS Architecture

- Uses CSS custom properties (variables) for maintainability
- BEM-inspired naming convention
- Mobile-first responsive approach
- Modular section-based organization

### JavaScript Architecture

- Vanilla JavaScript (no dependencies)
- Modular function organization
- Event delegation for performance
- Progressive enhancement approach

## 📞 Contact

For any questions or issues, please contact:
- Email: natalie.sessions.lux@gmail.com

---

**Note**: This is a work in progress. Features like full translation support and contact form functionality will be implemented in future updates.