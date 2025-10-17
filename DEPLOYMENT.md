# Deployment Guide

This guide will help you deploy your Layer Up website to production.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Resend account with API key

## Step 1: Prepare Your Repository

1. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Repository name: `layer-up`
   - Description: "Layer Up - Custom 3D Printing Website"
   - Visibility: Private or Public (your choice)
   - Do NOT initialize with README (we already have one)
   - Click "Create repository"

2. **Push your local code to GitHub**:
   ```bash
   cd /Users/sambousounis/Desktop/LayerUp
   git remote add origin https://github.com/SamB9999/layer-up.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Set Up Resend (Email Service)

1. **Sign up for Resend**:
   - Go to https://resend.com
   - Create a free account

2. **Get your API key**:
   - Navigate to "API Keys" in the dashboard
   - Click "Create API Key"
   - Give it a name (e.g., "Layer Up Production")
   - Copy the API key (you'll need this for Vercel)

3. **Verify your domain (optional but recommended)**:
   - In Resend dashboard, go to "Domains"
   - Add your domain and follow DNS verification steps
   - Once verified, update the `from` email in `app/api/enquiry/route.js`:
     ```javascript
     from: 'Layer Up <hello@yourdomain.com>'
     ```

## Step 3: Deploy to Vercel

1. **Sign in to Vercel**:
   - Go to https://vercel.com
   - Sign in with GitHub

2. **Import your project**:
   - Click "Add New..." → "Project"
   - Select your `layer-up` repository
   - Click "Import"

3. **Configure the project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - Leave other settings as default

4. **Add Environment Variables**:
   - Before deploying, click "Environment Variables"
   - Add the following:
     - **Name**: `RESEND_API_KEY`
     - **Value**: Your Resend API key from Step 2
     - **Environment**: Production, Preview, Development (select all)
   - Click "Add"

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://layer-up.vercel.app`

## Step 4: Configure Custom Domain (Optional)

1. **Add your domain in Vercel**:
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain (e.g., `layerup.com`)
   - Follow the DNS configuration instructions

2. **Update DNS records**:
   - Add the A or CNAME records as instructed by Vercel
   - Wait for DNS propagation (can take up to 48 hours)

## Step 5: Test Your Deployment

1. **Visit your live site**:
   - Open your Vercel URL or custom domain

2. **Test the form**:
   - Go to the Upload page
   - Fill out the form with test data
   - Upload a test file
   - Submit and verify you receive the email

3. **Check all pages**:
   - Home page
   - About page
   - Upload page
   - Thank You page
   - Footer links

## Automatic Deployments

Once connected to Vercel:

- **Production deployments**: Every push to `main` branch
- **Preview deployments**: Every pull request
- **Rollbacks**: Available in Vercel dashboard if needed

## Updating Your Site

To make changes and deploy:

```bash
# Make your changes locally
git add .
git commit -m "Your change description"
git push

# Vercel will automatically build and deploy
```

## Monitoring and Analytics

1. **Vercel Analytics**:
   - Enable in project settings for traffic insights

2. **Resend Email Logs**:
   - View all sent emails in Resend dashboard
   - Check for delivery issues or bounces

## Troubleshooting

### Build Fails
- Check the Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly

### Emails Not Sending
- Check Resend dashboard for error logs
- Verify `RESEND_API_KEY` is correct in Vercel
- Check email quota (free tier has limits)

### 404 Errors
- Ensure all pages are in the correct directories
- Rebuild and redeploy
- Check Vercel deployment logs

## Security Checklist

- ✅ `.env.local` is in `.gitignore`
- ✅ API keys are stored in Vercel environment variables
- ✅ No sensitive data in Git repository
- ✅ File upload validation is in place
- ✅ Email validation is implemented

## Support

For issues:
- **Vercel**: https://vercel.com/docs
- **Next.js**: https://nextjs.org/docs
- **Resend**: https://resend.com/docs

---

Your Layer Up website is now live! 🚀

