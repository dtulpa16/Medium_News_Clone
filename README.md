# Next.js & TailwindCSS Medium Clone 
## [Check it out here!](https://dtulpa-medium-clone.netlify.app/)

This Medium clone is built with Next.js and styled using only Tailwind css! I chose to make a clone of Medium because I really enjoy the layout of their platform & I wanted to see if I could accomplish a similar flow using only Tailwindcss

## Technologies Used

- Nextjs
- TailwindCSS

## Installation & Setup

1. Clone the repository: `git clone https://github.com/dtulpa16/Medium_News_Clone.git`
2. Navigate to the project directory: `cd Medium_News_Clone && npm install`
3. Start the server: `npm run dev`
4. Navigate to localhost:3000 in your browser

## Important Notes

- This app requires an API key for both the News API used in this app + an key for the Clerk authentication API
- In order to preview this app, you will need to create a `.env.local` file at the root level & insert the following keys:
```javascript
NEWS_API_KEY="fdsaujd..."
BASE_URL="http://localhost:3000"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Hsdyfdj...
CLERK_SECRET_KEY=sk_test_qfDFCXCASD
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```
