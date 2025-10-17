# Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following content:

```
RESEND_API_KEY=your_resend_api_key_here
```

**Important**: 
- Never commit `.env.local` to Git (it's already in .gitignore)
- Get your Resend API key from https://resend.com/api-keys
- Replace `your_resend_api_key_here` with your actual API key

## Quick Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env.local` file:
   ```bash
   echo "RESEND_API_KEY=your_resend_api_key_here" > .env.local
   ```
   Then edit `.env.local` and replace with your actual API key.

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser

## Deployment to Vercel

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SamB9999/layer-up.git
   git push -u origin main
   ```

2. In Vercel:
   - Import the repository
   - Add environment variable: `RESEND_API_KEY`
   - Deploy

See README.md for detailed instructions.

