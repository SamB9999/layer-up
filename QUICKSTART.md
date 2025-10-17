# Quick Start Guide

Get your Layer Up website running in 5 minutes!

## 🚀 Fast Setup

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
echo "RESEND_API_KEY=your_key_here" > .env.local
# Then edit .env.local with your actual Resend API key

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000
```

## 📋 What You Need

1. **Resend API Key**: Get it from https://resend.com/api-keys
2. **Node.js**: Version 18 or higher
3. **Git**: For version control

## 🎯 Next Steps

1. **Test locally**: Visit http://localhost:3000 and test the form
2. **Customize**: Update colors, text, and Instagram link
3. **Deploy**: Follow `DEPLOYMENT.md` to go live

## 📝 Key Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build locally
- `npm run lint` - Check for code issues

## 🔗 Important Files

- `app/page.js` - Home page
- `app/upload/page.js` - Form page
- `app/about/page.js` - About page
- `app/api/enquiry/route.js` - Email handler
- `components/Footer.js` - Footer component
- `.env.local` - Your API keys (create this!)

## 🎨 Customization Quick Tips

**Change colors**: Edit `tailwind.config.js`
**Update email**: Change recipient in `app/api/enquiry/route.js`
**Edit content**: Modify the respective page.js files
**Update Instagram**: Edit `components/Footer.js`

## ❓ Need Help?

- See `README.md` for detailed documentation
- See `SETUP.md` for setup instructions
- See `DEPLOYMENT.md` for deployment guide

---

Built for Layer Up 3D Printing 🎨

