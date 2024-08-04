TODO: update

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To access Decap CMS, open a new terminal at the project route and run `npx decap-server`

To edit content, navigate to [http://localhost:3000/admin](http://localhost:3000/admin)

## Set up Algolia Search

Algolia won't work until you define the following variables:
NEXT_PUBLIC_ALGOLIA_APPLICATION_ID
NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY

NEXT_PUBLIC_ALGOLIA_APPLICATION_ID is your Algolia Application ID and NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY is your Search API Key. Both can be found in the Algolia dashboard. DO NOT USE YOU MAIN API KEY - make sure to use the SEARCH API KEY, exposing your main API key is dangerous.
