# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-01-11

### Added
- **Initial Release**: Launched AI Builder Store landing page.
- **Hero Section**: Animated headline, subheadline, and primary CTAs.
- **Pricing Tables**: Tabbed interface for AI Coding, Creative, and Cloud Storage packages.
- **Features**:
  - Trust Bar with stats.
  - Pain Points section.
  - Solution section highlighting benefits.
  - Why Us section with 4 key differentiators.
  - FAQ Accordion.
  - Footer with branding.
- **Tech Stack**:
  - Next.js 16 (App Router).
  - Tailwind CSS for styling.
  - shadcn/ui components (Button, Card, Tabs, Accordion, Badge).
  - Framer Motion for scroll animations.
- **Documentation**: Added README.md and ARCHITECTURE.md.

### Fixed
- Addressed hydration errors caused by invalid HTML nesting (`div` inside `p` in Badge component).
- Updated Next.js to latest stable version (16.1.1) to resolve potential security vulnerabilities.
