# Jonshon and Jonshon Retaining Walls Solutions

Production-ready landing page for a retaining walls and masonry contractor based in Austin, TX. Built with React, Vite, and Tailwind CSS.

## Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Content Management

### Updating Business Information
All business data (phone, email, services, process steps) is centralized in:
`src/data/business.js`

You can update the phone number or add new services here without touching the UI code.

### Updating Images
1. Place new images in `public/images/` or another accessible location.
2. Update the image paths in `src/data/business.js` inside the `images` object.
Placeholder Unsplash images have been provided that match the masonry aesthetic.

### Contact Form
The contact form in `src/components/BottomSection.jsx` is currently a frontend-only implementation ready to be connected to an API. 
To enable submissions, connect the `handleSubmit` function to a service like Formspree, Resend, or a custom backend API.

## Deployment

This project is configured to deploy directly to Vercel. 
1. Import the repository into Vercel.
2. Vercel will automatically detect Vite and run `npm run build`.
3. Ensure no private API keys are exposed (use Environment Variables in Vercel if needed for the contact form).

## Architecture
- `src/components/` - Segmented UI sections (TopSection, MiddleSection, BottomSection).
- `src/data/` - Business data and configuration.
- `src/App.jsx` - Main layout and SEO wrapper.
- `index.html` - Base HTML structure.

## Performance & SEO
- Semantic HTML tags used extensively.
- `react-helmet-async` for meta tags.
- LocalBusiness JSON-LD schema injected automatically.
- Images are lazy-loaded below the fold.
