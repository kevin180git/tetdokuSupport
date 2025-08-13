# Tetdoku Website

A simple, responsive website for the Tetdoku mobile game app, designed for GitHub Pages deployment.

## Features

- **Homepage**: Game introduction with features and call-to-action buttons
- **Support Page**: Contact form with Formspree integration, consent checkbox, and FAQ section
- **Privacy Policy**: Comprehensive privacy policy with all required sections
- **Responsive Design**: Mobile-first approach that works on all devices
- **Static Site**: Pure HTML/CSS/JS - perfect for GitHub Pages

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" and choose "main" branch
5. Your site will be available at `https://yourusername.github.io/repository-name`

## Contact Form Setup (Formspree)

The contact form is integrated with Formspree for secure form submissions:

1. **Create a Formspree account** at [formspree.io](https://formspree.io)
2. **Create a new form** and get your form ID
3. **Update the form action** in `support.html`:
   - Replace `YOUR_FORM_ID` with your actual Formspree form ID
   - Example: `action="https://formspree.io/f/xpzgkqyw"`
4. **Test the form** - submissions will be sent to your registered email

### Form Features

- **Secure submission** without exposing your email address
- **Spam protection** built into Formspree
- **Email notifications** for new submissions
- **Loading states** and error handling
- **Required consent checkbox** for GDPR compliance

## Customization

### Styling

- Colors can be customized in `styles.css`
- The main brand color is `#6366f1` (purple-blue)
- All responsive breakpoints are included

### Content

- Update placeholder email addresses in the privacy policy
- Modify game description and features as needed
- Add your actual app store links when available
- Replace `YOUR_FORM_ID` in the support form with your Formspree form ID

## File Structure

\`\`\`
├── index.html          # Homepage
├── support.html        # Support page with Formspree contact form
├── privacy.html        # Privacy policy page
├── styles.css          # All CSS styles
├── script.js           # JavaScript for form handling
└── README.md           # This file
\`\`\`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## Security & Privacy

- No sensitive data stored locally
- Form submissions handled securely through Formspree
- Privacy policy includes all required sections for app store compliance
- GDPR-compliant consent checkbox on contact form
