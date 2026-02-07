# 🌍 Mikaelson Innovation and Community Development Initiative

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-Private-red)

**Empowering communities across Africa through technology, education, and collaboration.**

[Live Demo](#) • [Report Bug](https://github.com/Mikaelson-1/Mikaelson-Innovation-and-Community-Development-Initiative/issues) • [Request Feature](https://github.com/Mikaelson-1/Mikaelson-Innovation-and-Community-Development-Initiative/issues)

</div>

---

## 📚 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Project Structure](#-project-structure)
- [Pages Overview](#-pages-overview)
- [Contributing](#-contributing)
  - [Development Workflow](#development-workflow)
  - [Code Style Guidelines](#code-style-guidelines)
  - [Commit Message Convention](#commit-message-convention)
  - [Pull Request Process](#pull-request-process)
- [Scripts Reference](#-scripts-reference)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About the Project

The **Mikaelson Innovation and Community Development Initiative** is a platform dedicated to empowering African communities through technology, education, and collaborative innovation. The web application serves as the digital hub for:

- **The Mikaelson Community** — A vibrant network of ambitious students and changemakers united by excellence and intentional growth
- **Mikaelson Labs** — An innovation hub where ideas are built and experimented with to solve challenges across Africa
- **Partnership & Growth Network** — Connecting students with mentors, resources, and opportunities for collaboration

---

## ✨ Features

### 🏠 Public Website
- **Homepage** with hero section, ecosystem overview, and impact metrics
- **About Us** page with organizational information
- **Product/Services** overview
- **Community** hub for members
- **Mikaelson Labs** showcase
- **Volunteer** opportunities
- **Sponsorship** information
- **Team** profiles
- **Challenges** and initiatives
- **Social Feed** integration

### 🔐 Authentication
- Secure authentication powered by **Clerk**
- Login/Sign-up flows
- Email verification
- Password recovery
- SSO callback support

### 🎨 User Experience
- **Dark/Light mode** support with next-themes
- **Responsive design** (mobile-first approach)
- **Animated sections** with Motion (Framer Motion)
- **Accessible UI** components built with Radix UI

### 🛠️ Admin & Dashboard
- Admin panel for content management
- User dashboard for authenticated members

---

## 🛠 Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16 | React framework with App Router |
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |

### Styling
| Technology | Version | Purpose |
|------------|---------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first CSS |
| [tw-animate-css](https://www.npmjs.com/package/tw-animate-css) | 1.4 | Animation utilities |
| [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) | 3.3 | Merge Tailwind classes |
| [class-variance-authority](https://cva.style/docs) | 0.7 | Component variants |

### UI Components
| Technology | Purpose |
|------------|---------|
| [Radix UI](https://www.radix-ui.com/) | Accessible primitives (dialogs, dropdowns, tabs, etc.) |
| [Lucide React](https://lucide.dev/) | Icon library |
| [Embla Carousel](https://www.embla-carousel.com/) | Carousel component |
| [cmdk](https://cmdk.paco.me/) | Command palette |
| [Sonner](https://sonner.emilkowal.ski/) | Toast notifications |
| [Recharts](https://recharts.org/) | Data visualization |
| [Vaul](https://vaul.emilkowal.ski/) | Drawer component |

### Data & Forms
| Technology | Purpose |
|------------|---------|
| [TanStack Query](https://tanstack.com/query/) | Server state management |
| [TanStack Table](https://tanstack.com/table/) | Table component |
| [React Hook Form](https://react-hook-form.com/) | Form management |
| [Zod](https://zod.dev/) | Schema validation |
| [Axios](https://axios-http.com/) | HTTP client |
| [SWR](https://swr.vercel.app/) | Data fetching hooks |

### Authentication
| Technology | Purpose |
|------------|---------|
| [Clerk](https://clerk.com/) | Authentication & user management |

### Utilities
| Technology | Purpose |
|------------|---------|
| [date-fns](https://date-fns.org/) | Date utilities |
| [Motion](https://motion.dev/) | Animation library |
| [next-themes](https://github.com/pacocoursey/next-themes) | Theme management |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.18.0 or higher recommended)
- **npm** (v9 or higher) or **yarn** or **pnpm**
- **Git**

Verify your installations:
```bash
node -v
npm -v
git --version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mikaelson-1/Mikaelson-Innovation-and-Community-Development-Initiative.git
   cd Mikaelson-Innovation-and-Community-Development-Initiative
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
CLERK_SECRET_KEY=sk_test_your_secret_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# API Configuration (if applicable)
NEXT_PUBLIC_API_URL=https://api.example.com
```

> ⚠️ **Important**: Never commit your `.env.local` file to version control. It's already included in `.gitignore`.

### Running the App

**Development mode** (with hot reloading):
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

**Production build**:
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
Mikaelson-Innovation-and-Community-Development-Initiative/
├── public/                     # Static assets
│   ├── assets/                 # Images and media files
│   │   └── images/            # Image assets
│   ├── icons/                 # Icon files
│   └── sdg/                   # SDG-related assets
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (website)/         # Public website routes
│   │   │   ├── about-us/      # About page
│   │   │   ├── challenges/    # Challenges page
│   │   │   ├── community/     # Community page
│   │   │   ├── contact/       # Contact page
│   │   │   ├── faq/           # FAQ page
│   │   │   ├── feed/          # Social feed page
│   │   │   ├── help/          # Help center
│   │   │   ├── labs/          # Mikaelson Labs page
│   │   │   ├── login/         # Login page
│   │   │   ├── privacy/       # Privacy policy
│   │   │   ├── product/       # Product page
│   │   │   ├── sign-up/       # Registration page
│   │   │   ├── sponsor/       # Sponsorship page
│   │   │   ├── team/          # Team page
│   │   │   ├── terms/         # Terms of service
│   │   │   ├── volunteer/     # Volunteer page
│   │   │   ├── waitlist/      # Waitlist page
│   │   │   ├── layout.tsx     # Website layout
│   │   │   └── page.tsx       # Homepage
│   │   ├── admin/             # Admin panel routes
│   │   ├── api/               # API routes
│   │   ├── dashboard/         # User dashboard
│   │   ├── sso-callback/      # SSO authentication callback
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Shared components
│   │   ├── ui/                # UI primitives (shadcn/ui style)
│   │   ├── icons/             # Icon components
│   │   ├── footer.tsx         # Footer component
│   │   ├── mobile-nav.tsx     # Mobile navigation
│   │   ├── mode-toggler.tsx   # Dark/light mode toggle
│   │   └── ...
│   ├── features/              # Feature-specific modules
│   │   ├── admin/             # Admin feature components
│   │   ├── dashboard/         # Dashboard feature components
│   │   └── website/           # Website feature components
│   │       └── components/    # Page-specific components
│   │           ├── about/
│   │           ├── auth/
│   │           ├── challenges/
│   │           ├── community/
│   │           ├── contact/
│   │           ├── faq/
│   │           ├── labs/
│   │           ├── product/
│   │           ├── sponsor/
│   │           ├── team/
│   │           ├── volunteer/
│   │           └── waitlist/
│   ├── hooks/                 # Custom React hooks
│   │   └── use-mobile.tsx     # Mobile detection hook
│   ├── lib/                   # Utility functions
│   │   └── utils.ts           # Common utilities
│   └── constants/             # App constants
├── types/                     # TypeScript type definitions
├── .env.local                 # Environment variables (not committed)
├── .gitignore                 # Git ignore rules
├── components.json            # shadcn/ui configuration
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.ts         # Tailwind CSS configuration (if present)
└── tsconfig.json              # TypeScript configuration
```

---

## 📄 Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, ecosystem, community sections, and impact metrics |
| `/about-us` | Organization's mission, vision, and history |
| `/product` | Product/service offerings |
| `/community` | Community hub for members |
| `/labs` | Mikaelson Labs innovation hub |
| `/volunteer` | Volunteer opportunities and sign-up |
| `/sponsor` | Sponsorship and partnership information |
| `/team` | Team member profiles |
| `/challenges` | Community challenges and initiatives |
| `/feed` | Social media feed integration |
| `/contact` | Contact information and form |
| `/faq` | Frequently asked questions |
| `/help` | Help center and support resources |
| `/login` | User login |
| `/sign-up` | New user registration |
| `/waitlist` | Waitlist registration |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/code-of-conduct` | Community code of conduct |
| `/dashboard` | Authenticated user dashboard |
| `/admin` | Admin panel (protected) |

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Workflow

1. **Fork the repository** on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/Mikaelson-1/Mikaelson-Innovation-and-Community-Development-Initiative.git
   cd mikaelson-initiative
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or for bug fixes
   git checkout -b fix/bug-description
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Make your changes** and test thoroughly

7. **Run linting** before committing
   ```bash
   npm run lint
   ```

8. **Commit your changes** (see commit convention below)

9. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

10. **Open a Pull Request** on GitHub

### Code Style Guidelines

#### General
- Use **TypeScript** for all new files
- Follow existing code patterns and conventions
- Write self-documenting code with meaningful variable/function names
- Add comments for complex logic

#### Components
- Use **functional components** with hooks
- Place shared components in `src/components/`
- Place feature-specific components in `src/features/<feature>/components/`
- Follow the existing file naming convention (kebab-case for files)

#### Styling
- Use **Tailwind CSS** classes for styling
- Use `cn()` utility from `@/lib/utils` for conditional classes
- Follow the design system colors and spacing

#### File Organization
```tsx
// 1. Imports (external → internal → types → styles)
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { ComponentProps } from './types';

// 2. Type definitions (if not in separate file)
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

// 3. Component definition
export function MyComponent({ title, onClick }: MyComponentProps) {
  // 3a. Hooks
  const [state, setState] = useState(false);
  
  // 3b. Event handlers
  const handleClick = () => {
    // ...
  };
  
  // 3c. Render
  return (
    <div>
      {/* ... */}
    </div>
  );
}
```

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(community): add member profile cards
fix(auth): resolve login redirect issue
docs(readme): update installation instructions
style(header): improve mobile navigation spacing
refactor(api): simplify data fetching logic
```

### Pull Request Process

1. **Ensure your PR**:
   - Has a clear, descriptive title
   - Describes what changes were made and why
   - References any related issues (e.g., "Fixes #123")
   - Passes all linting checks

2. **PR Title Format**: Use the same convention as commits
   ```
   feat(component): brief description of changes
   ```

3. **Wait for review**: A maintainer will review your PR and may request changes

4. **Address feedback**: Make requested changes and push updates

5. **Merge**: Once approved, your PR will be merged

---

## 📜 Scripts Reference

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

---

## 🔧 Troubleshooting

### Common Issues

#### Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

#### Next.js cache issues
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

#### Clerk authentication issues
- Verify your environment variables are correctly set
- Ensure Clerk publishable key starts with `pk_`
- Check that your Clerk secret key starts with `sk_`

#### Tailwind CSS not working
```bash
# Ensure PostCSS is configured correctly
# Check postcss.config.mjs and tailwind configuration
npm run dev
```

#### TypeScript errors
```bash
# Rebuild TypeScript
npx tsc --noEmit
```

### Need More Help?

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Consult [Clerk Documentation](https://clerk.com/docs)
- Open an issue on GitHub

---

## 📄 License

This project is **private** and proprietary. All rights reserved.

---

## 📬 Contact

**Mikaelson Initiative Team**

- Website: [https://mikaelsoninitiative.org]
- Email: [hello@mikaelsoninitiative.org]
- Twitter: [@MikaelsonInitiveOrg]

---

<center>

**Built with ❤️ for Africa by the Mikaelson Initiative Team**

</center>