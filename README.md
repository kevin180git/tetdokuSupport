# Tetdoku Website

A simple, responsive website for the Tetdoku mobile game app, designed for GitHub Pages deployment.

## Features

- **Homepage**: Game introduction with features and call-to-action buttons
- **Support Page**: Contact form with consent checkbox and FAQ section
- **Privacy Policy**: Comprehensive privacy policy with all required sections
- **Responsive Design**: Mobile-first approach that works on all devices
- **Static Site**: Pure HTML/CSS/JS - perfect for GitHub Pages

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" and choose "main" branch
5. Your site will be available at `https://yourusername.github.io/repository-name`

## Customization

### Contact Form Integration

The contact form currently shows a confirmation message. To make it functional, you can:

1. **Use Formspree**: Add `action="https://formspree.io/f/YOUR_FORM_ID"` to the form
2. **Use Netlify Forms**: Add `netlify` attribute to the form if hosting on Netlify
3. **Use EmailJS**: Integrate EmailJS for client-side email sending

### Styling

- Colors can be customized in `styles.css`
- The main brand color is `#6366f1` (purple-blue)
- All responsive breakpoints are included

### Content

- Update placeholder email addresses in the privacy policy
- Modify game description and features as needed
- Add your actual app store links when available

## File Structure

\`\`\`
├── index.html          # Homepage
├── support.html        # Support page with contact form
├── privacy.html        # Privacy policy page
├── styles.css          # All CSS styles
├── script.js           # JavaScript for form handling
└── README.md           # This file
\`\`\`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes
