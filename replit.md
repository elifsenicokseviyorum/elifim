# Romantic Personal Website

## Overview

This is a romantic personal website built as a love letter to someone special. The application is designed to showcase memories, feelings, and personal messages in a beautiful, interactive format. It features multiple sections including photo galleries, timelines, love letters, music player, and a contact form for leaving messages.

## User Preferences

Preferred communication style: Simple, everyday language.
Color scheme: Modern blue-purple-gold theme instead of pink theme.
Special requests: Personal touches for "Elif", humorous content, dates and counters, fortune telling features.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom romantic color palette
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and floating heart effects
- **Routing**: Wouter for client-side routing
- **State Management**: React Hook Form for form handling, TanStack Query for server state
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless database
- **API Design**: RESTful endpoints for message operations
- **Development**: Hot reload with Vite middleware integration
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Data Storage
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Shared schema definitions between client and server
- **Validation**: Zod for runtime type validation
- **Migrations**: Drizzle Kit for database schema management
- **In-Memory Fallback**: MemStorage class for development without database

## Recent Changes (January 2025)

### Major Updates:
- **Color Scheme**: Changed from pink theme to modern blue-purple-gold theme
- **Interactive Introduction**: Added splash screen with "Fıstığım :)" button and humorous loading sequence
- **Personalization**: Updated content for "Elif" with personal touches and inside jokes
- **New Features**: 
  - Love counter showing days together since April 16, 2024
  - Countdown to birthday (August 11)
  - Fortune telling section with Turkish cultural references
  - Tarot card reading with personalized messages
- **Content Updates**: Modified photo gallery descriptions to be more personal and humorous
- **Navigation**: Added new sections for counters, fortune telling, and tarot

## Key Components

### Frontend Components
1. **SplashButton**: Initial "Fıstığım :)" button with surprise animation
2. **LoadingScreen**: Animated loading sequence with joke ("Bir şey olacak mı sandın?" → "Şaka Şaka!")
3. **Navigation**: Smooth scrolling navigation between sections
4. **FloatingHearts**: Animated heart effects across the page
5. **LoveCounter**: Real-time counters showing days together and countdown to birthday
6. **PhotoGallery**: Responsive image gallery with humorous, personal descriptions
7. **Timeline**: Interactive timeline showing relationship milestones
8. **Reasons**: Grid layout showing reasons for love
9. **LoveLetters**: Collection of romantic messages
10. **MusicPlayer**: Interactive music player with romantic playlist
11. **FortuneTeller**: Humorous fortune telling feature with Turkish cultural references
12. **TarotCards**: Interactive tarot card reading with personalized messages
13. **ContactForm**: Form for leaving messages with validation
14. **AnimatedHeart**: Central animated heart with floating smaller hearts

### Backend Components
1. **Routes**: RESTful API endpoints for message CRUD operations
2. **Storage**: Abstract storage interface with memory and database implementations
3. **Schema**: Shared database schema and validation schemas
4. **Middleware**: Request logging and error handling

### UI System
- **Design System**: shadcn/ui components with romantic theming
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: ARIA labels and keyboard navigation support
- **Dark Mode**: Theme switching capability built into the design system

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express server handles requests, validates data with Zod
3. **Database Operations**: Drizzle ORM executes type-safe database queries
4. **Response Handling**: Server returns JSON responses with proper error handling
5. **State Updates**: TanStack Query manages cache invalidation and optimistic updates

### Message Flow
- User submits message through ContactForm
- Form validates data using react-hook-form with Zod resolver
- API request sent to `/api/messages` endpoint
- Server validates and stores message in database
- Success toast notification shown to user
- Message list automatically refreshes via query invalidation

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL serverless database
- **UI Library**: Radix UI primitives for accessible components
- **Animation**: Framer Motion for smooth animations
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for schema validation
- **Date Handling**: date-fns for date formatting
- **Styling**: Tailwind CSS with PostCSS

### Development Dependencies
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full TypeScript support with strict mode
- **ESBuild**: Fast bundling for production builds
- **Replit Integration**: Replit-specific plugins for development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Asset Processing**: Static assets processed and optimized

### Production Setup
- **Environment**: Node.js production environment
- **Database**: PostgreSQL connection via DATABASE_URL
- **Static Files**: Express serves built frontend from dist/public
- **API Routes**: Express handles API requests at `/api/*`

### Development Workflow
- **Dev Server**: TSX runs server with hot reload
- **Database Migrations**: Drizzle Kit manages schema changes
- **Type Checking**: TypeScript compiler validates types across the stack

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **Session Configuration**: PostgreSQL session store for user sessions

The application is designed to be easily deployable on platforms like Replit, Vercel, or any Node.js hosting service with minimal configuration required.