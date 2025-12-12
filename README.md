# Sandra Sadek Portfolio

A modern, editorial portfolio website for journalist Sandra Sadek, built with Next.js 14 (App Router), React, TypeScript, and Tailwind CSS.

## Features

- **Minimal, Editorial Design**: Clean, professional aesthetic with serif headings and sans-serif body text
- **Mobile-First & Responsive**: Fully responsive layouts that work beautifully on all devices
- **Component-Based Architecture**: Reusable UI components for maintainability and consistency
- **Dynamic Filtering**: Filter work by region, topic, outlet, and format
- **Photo Galleries**: Interactive lightbox galleries for photography projects
- **Smooth Animations**: Subtle fade-in effects and hover states

## Site Structure

- `/` - Home page with hero, featured work, and outlet logos
- `/about` - Biography, timeline, awards, and CV download
- `/work` - Text reporting with advanced filtering (supports URL params)
- `/multimedia` - Audio and video work with type/topic filters
- `/photography` - Photo project galleries with individual project pages
- `/research` - Academic work with tag filtering
- `/contact` - Contact form and information

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components
- **Data Management**: TypeScript data files

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── multimedia/          # Multimedia page
│   ├── photography/         # Photography pages
│   │   └── [slug]/         # Dynamic photo project pages
│   ├── research/            # Research page
│   ├── work/                # Work page with filters
│   ├── layout.tsx           # Root layout with nav/footer
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # Reusable UI components
│   ├── ContactForm.tsx      # Contact form with validation
│   ├── FilterBar.tsx        # Filter component for work page
│   ├── Footer.tsx           # Site footer
│   ├── Gallery.tsx          # Photo gallery with lightbox
│   ├── Grid.tsx             # Responsive grid wrapper
│   ├── Navigation.tsx       # Top navigation bar
│   ├── PageHeader.tsx       # Page title/subtitle component
│   ├── TagPill.tsx          # Styled tag/category pill
│   ├── Timeline.tsx         # Vertical timeline component
│   └── WorkCard.tsx         # Work item card
├── data/                    # TypeScript data files
│   ├── types.ts             # Type definitions
│   ├── work.ts              # Text reporting data
│   ├── multimedia.ts        # Audio/video data
│   ├── photography.ts       # Photo project data
│   └── research.ts          # Research/academic data
└── public/                  # Static assets
```

## Design System

### Typography
- **Headings**: Georgia serif for editorial feel
- **Body**: System fonts for optimal readability

### Colors
- **Primary**: White/off-white background
- **Text**: Dark gray (#1f2937)
- **Accent**: Blue (#2563eb) for links and interactive elements
- **Borders**: Light gray (#e5e7eb)

### Components
All components are designed to be:
- Reusable across pages
- Responsive by default
- Accessible with semantic HTML
- Styled with Tailwind utility classes

## Customization

### Adding Work Items
Edit `data/work.ts` to add new articles. Each item should follow the `WorkItem` interface.

### Adding Multimedia
Edit `data/multimedia.ts` to add new audio/video content.

### Adding Photo Projects
Edit `data/photography.ts` to add new photo galleries.

### Modifying Design
- Colors: Edit `tailwind.config.ts`
- Animations: Edit `app/globals.css`
- Layout: Edit `app/layout.tsx`

## URL Parameters

The Work page supports URL parameters for direct filtering:
- `/work?region=US_LOCAL` - Show only local US stories
- `/work?region=SOUTH_CAUCASUS` - Show only South Caucasus stories
- `/work?topic=Housing` - Show only housing stories
- Combine multiple: `/work?region=US_LOCAL&topic=Housing`

## Future Enhancements

- Add actual images (currently using placeholder divs)
- Connect contact form to email service or API
- Add search functionality
- Implement proper image optimization with next/image
- Add blog/articles section
- Integrate with CMS for easier content updates

## License

Private portfolio site. All rights reserved.
