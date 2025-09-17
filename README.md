# Sync Space

Sync Space is built with [Next.js](https://nextjs.org/), [shadcn/ui](https://ui.shadcn.com/), [Convex](https://www.convex.dev/), [Liveblocks](https://liveblocks.io/), and [Clerk](https://clerk.com/), following the [tutorial](https://www.youtube.com/watch?v=ADJKbuayubE) by [Code with Antonio](https://www.youtube.com/@codewithantonio).

The application is deployed on Vercel [here](https://sync-space-ten.vercel.app/), though it is by invitation only for now.

## Getting Started

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Copy the environment variables file:

```bash
cp .env.example .env.local
```

3. Update the `.env.local` file with your API keys:
   - Convex deployment URL and configuration
   - Clerk authentication keys
   - Liveblocks collaboration keys

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
