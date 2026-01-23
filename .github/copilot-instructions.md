# AI Coding Guidelines for Tech Pack

## Architecture Overview
This is a Next.js 16 app router application for a blog/review platform. Key components:
- **Authentication**: JWT-based with httpOnly cookies; user data stored in MongoDB `users` collection
- **Content**: Posts/reviews in MongoDB `reviews` collection with like functionality
- **Layouts**: `(authLayout)` for login/signup (centered design), `(publicLayout)` for main pages with Header/Footer
- **UI**: shadcn/ui components with Tailwind CSS, New York style variant

## Key Patterns
- **API Routes**: Use `mongoConnect()` from `@/lib/mongoConnect` for DB access; handle errors with try/catch and return `NextResponse.json({ error: "message" }, { status: code })`
- **Client Components**: Mark with `"use client"` for interactivity; use `useEffect` for data fetching (e.g., fetch `/api/all-posts`)
- **Optimistic Updates**: For likes, POST to `/api/all-posts/[id]/like` and immediately update local state (e.g., `setPosts(prev => prev.map(...))`)
- **Auth Flow**: Login sets JWT cookie; `/api/auth/me` verifies via cookies; client fetches user data on mount
- **DB Schema**: Users have `{ email, password (hashed), username, role }`; Reviews have `{ title, email, description, likes, createdAt }`

## Development Workflow
- **Start Dev**: `npm run dev` (auto-reloads)
- **Build**: `npm run build` (check for TypeScript/ESLint errors)
- **Lint**: `npm run lint` (uses Next.js config with TypeScript rules)
- **Environment**: Set `MONGODB_URI` and `JWT_SECRET` in `.env`; DB name is "TachPack" (note: likely typo for "TechPack")

## Conventions
- **Imports**: Use `@/` aliases (e.g., `@/lib/mongoConnect`, `@/components/ui/button`)
- **Styling**: Combine classes with `cn()` utility from `@/lib/utils`
- **File Structure**: API routes in `src/app/api/`, components in `src/component/` (note: not `components/`), pages in `src/app/(layout)/page.tsx`
- **Error Handling**: Console.log errors in API routes; return 401 for auth failures
- **Types**: Define interfaces for API responses (e.g., `type Post = { _id: string; title: string; ... }`)

## Examples
- **Adding a new API route**: Export async function (GET/POST) in `route.ts`, use `mongoConnect()` for DB ops
- **Creating a page**: Use client component if interactive; fetch data in `useEffect`; render with Card/Button from shadcn
- **Auth check**: In API, get token from `cookies()`, verify JWT; in client, check `/api/auth/me` response</content>
<parameter name="filePath">e:\Projects\tech-pack\.github\copilot-instructions.md