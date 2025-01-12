This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Styling Notes

- Font Fam: Open Sans

- Screens:
  sm: 640
  md: 1024
  lg: 1440

- Color:
  bg: #F7F4FF
  color: #4B5563

  primary: #7749EF
  secondary: #AF72FF
  dark: #5C27E5

  input-bg: #F3F4F6
  input-bg-dark: #E5E7EB

  text-dark: #111928

- Input:
  font-size: 14px
  color: #6B7280
  padding: x-4 y-3
  bg: input-bg
  hover-bg: input-bg-dark
  ring: 1px color: secondary

- Label:
  font-size: 14px
  font-weight: 500
  color: #111928

- Button:
  bg: primary
  hover-bg: dark
  ring: 3px secondary
  padding: y-3.5 x-5
  font-w: 500

- Card:
  bg: white
  shadow: lg
  padding:
  base: y-24px x-16px
  sm: 32px
  space-y: 24px

- Form:
  space: 16px

- Section:
  white-space: 60px
  max-w: 1142px
  padding:
  base: 16px
  sm: 24px
  md: 114px
