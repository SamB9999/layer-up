# Testing Guide

## Testing Locally Before Deploying

### Step 1: Install Dependencies

```bash
cd /Users/sambousounis/Desktop/LayerUp
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, Resend).

### Step 2: Create Environment File

Create a `.env.local` file:

```bash
echo "RESEND_API_KEY=your_resend_api_key_here" > .env.local
```

Then edit the file and replace `your_resend_api_key_here` with your actual Resend API key.

**Important**: Without the API key, the form won't send emails, but you can still test the website navigation and design.

### Step 3: Run Development Server

```bash
npm run dev
```

The server will start at http://localhost:3000

### Step 4: Test All Pages

Open your browser and test:

1. **Home** - http://localhost:3000
   - Check hero section
   - Click on each service card (Prototypes, Custom Parts, Art & Decor, Custom Gifts)
   - Test navigation menu

2. **Services** - http://localhost:3000/services
   - View all service cards
   - Click into each service

3. **Individual Service Pages**:
   - http://localhost:3000/services/prototypes
   - http://localhost:3000/services/custom-parts
   - http://localhost:3000/services/art-decor
   - http://localhost:3000/services/custom-gifts

4. **About** - http://localhost:3000/about
   - Check content and CTA

5. **Upload/Form** - http://localhost:3000/upload
   - Fill out the form
   - Try uploading a test file
   - Submit and verify email is sent to stephen.rx782@gmail.com
   - Check you're redirected to thank you page

6. **Thank You** - http://localhost:3000/thank-you
   - Verify confirmation message
   - Test "Return to Home" button

### Step 5: Test Mobile Responsiveness

1. Open browser developer tools (F12 or Cmd+Option+I)
2. Toggle device toolbar (mobile view)
3. Test on different screen sizes:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1440px)

### Step 6: Test Navigation

- Click logo to return home
- Test all nav links (Home, Services, About, Get Quote)
- Test mobile hamburger menu
- Verify smooth scrolling and transitions

### What to Look For

✅ All pages load without errors
✅ Logo displays correctly
✅ Navigation works on desktop and mobile
✅ Service cards have correct colors (blue, purple, pink, green)
✅ All links work
✅ Form validation works
✅ File upload accepts correct file types
✅ Email is sent successfully (if you have Resend API key)
✅ Footer shows correct email (stephen.rx782@gmail.com)
✅ Smooth transitions and hover effects

### Common Issues

**Images not showing?**
- Make sure logo is in `/public/logo.png`

**Form not submitting?**
- Check `.env.local` has correct API key
- View browser console for errors (F12 → Console)

**Styles not loading?**
- Run `npm run dev` again
- Clear browser cache

**Port already in use?**
- Change port: `npm run dev -- -p 3001`

### Stop the Server

Press `Ctrl + C` in the terminal to stop the development server.

---

Once everything looks good locally, push to GitHub and Vercel will automatically deploy!

