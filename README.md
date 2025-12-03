# 🚀 Stellar Dynamics - Spaceship Company Website

![Stellar Dynamics Preview](https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=300&fit=crop&auto=format)

A modern, professional spaceship company website showcasing spacecraft models, mission services, team profiles, and customer testimonials. Built with Next.js 16, TypeScript, and Cosmic CMS.

## ✨ Features

- 🚀 **Spacecraft Showcase** - Browse premium spacecraft models with detailed specifications and pricing
- 🎯 **Mission Services** - Explore available space missions and service offerings
- 👥 **Team Profiles** - Meet the expert team behind Stellar Dynamics
- ⭐ **Customer Testimonials** - Read authentic reviews from satisfied clients
- 🏢 **Company Information** - Learn about our mission, vision, and values
- 📧 **Contact System** - Easy inquiry and consultation request forms
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Futuristic Design** - Modern UI with space-themed aesthetics
- ⚡ **Server-Side Rendering** - Fast page loads with Next.js 16
- 🔍 **SEO Optimized** - Built for excellent search engine visibility

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6930beb33584465d0a2f64ac&clone_repository=6930c13d3584465d0a2f64c6)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a comprehensive content model for a spaceship company website. Include content for spacecraft models with specs and pricing, company information, mission services, team member profiles, customer testimonials, and contact information. Make it professional and futuristic with detailed technical specifications for different spacecraft."

### Code Generation Prompt

> "Build a modern, professional spaceship company website using the content model I created. Include pages for showcasing spacecraft models with technical specifications and pricing, company information, mission services, team member profiles, customer testimonials, and contact details. Make it visually appealing with a futuristic design theme suitable for a space technology company."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Runtime**: Bun
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Bun installed on your system
- A Cosmic account with the spaceship company content model

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stellar-dynamics
```

2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Cosmic SDK Examples

### Fetching Spacecraft Models

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all spacecraft with full details
const { objects: spacecraft } = await cosmic.objects
  .find({ type: 'spacecraft' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get single spacecraft by slug
const { object: ship } = await cosmic.objects
  .findOne({ type: 'spacecraft', slug: 'apollo-x1' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members

```typescript
// Get all team members
const { objects: team } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Testimonials

```typescript
// Get all testimonials with ratings
const { objects: testimonials } = await cosmic.objects
  .find({ type: 'testimonials' })
  .props(['id', 'title', 'metadata'])
  .depth(1)
```

## 🌐 Cosmic CMS Integration

This application uses Cosmic as a headless CMS. The content model includes:

- **Spacecraft**: Models with specifications, pricing, and images
- **Team Members**: Profiles with photos, roles, and bios
- **Testimonials**: Customer reviews with ratings
- **Company Info**: Mission statement, history, and values
- **Mission Services**: Available services and offerings
- **Contact Info**: Company contact details

All content is managed through the Cosmic dashboard and fetched using the Cosmic SDK.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Environment Variables

Make sure to set these environment variables in your deployment platform:

- `COSMIC_BUCKET_SLUG`: Your Cosmic bucket slug
- `COSMIC_READ_KEY`: Your Cosmic read key
- `COSMIC_WRITE_KEY`: Your Cosmic write key (for any write operations)

## 📝 License

This project is built with [Cosmic](https://www.cosmicjs.com) - the headless CMS for modern applications.

<!-- README_END -->