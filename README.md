# ShareFrame-Backend
A multi-tenant portfolio platform allowing photographers, videographers and editors to create branded microsites with customizable sections and shareable links.


This project is a multi-tenant, full-stack portfolio platform built for photographers, videographers and editors to quickly spin up professional, customizable microsites under your brand. Each user signs up, picks a unique URL (yourproject.com/yourname), and uses an intuitive section-based editor to add “About,” “Gallery,” “Services,” “Testimonials” and “Contact” blocks. You can upload images and videos (with on-the-fly resizing and secure storage), tweak colors and fonts to match your style, and share your link with clients or on social channels. Behind the scenes, Node.js/Express handles authentication, portfolio and media data (stored in PostgreSQL via Prisma), and AWS S3–backed file management, while built-in analytics track views so you can see which pieces resonate most. V1 focuses on core CRUD operations, theming, media uploads and basic visit counts—laying the groundwork for a polished, scalable showcase platform.


Tech Stack
Runtime: Node.js (v18+)
Framework: Express.js
Database: PostgreSQL (Prisma ORM)
Auth: JSON Web Tokens (JWT)
Storage: AWS S3 (or DigitalOcean Spaces)
Testing: Jest + Supertest
CI/CD: GitHub Actions → Heroku / AWS ECS
