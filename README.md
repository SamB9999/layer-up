# Layer Up - Custom 3D Printing Website

A modern, responsive website for a 3D printing business built with Next.js and Tailwind CSS. Features include file upload capabilities, form submissions with email notifications via Resend API, and a clean, minimal design.

## 🚀 Features

- **Modern Design**: Clean, minimal UI with responsive layout for all devices
- **File Upload**: Support for .stl, .obj, .png, .jpg, and .zip files
- **Email Notifications**: Automated email alerts using Resend API
- **Multiple Pages**: Home, About, Upload/Enquiry, and Thank You pages
- **SEO Optimized**: Built-in metadata and semantic HTML
- **Production Ready**: Optimized for deployment on Vercel

## 📋 Pages

- **Home (/)**: Hero section, example prints showcase, "How It Works" section
- **Upload (/upload)**: Enquiry form with file upload functionality
- **About (/about)**: Business story and printer setup information
- **Thank You (/thank-you)**: Confirmation page after successful form submission

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Email Service**: Resend API
- **Hosting**: Vercel
- **Version Control**: Git & GitHub

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SamB9999/layer-up.git
   cd layer-up
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory:
   ```bash
   echo "RESEND_API_KEY=your_actual_resend_api_key_here" > .env.local
   ```
   
   Then edit `.env.local` and replace with your actual Resend API key.
   
   See `SETUP.md` for detailed setup instructions.

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

## 🔑 Getting a Resend API Key

1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys in your dashboard
4. Create a new API key
5. Copy the key and add it to your `.env.local` file

**Note**: In production, you should also verify your domain with Resend to send emails from your own domain instead of `onboarding@resend.dev`.

## 🚢 Deployment

### Deploy to Vercel

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SamB9999/layer-up.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `layer-up` repository
   - Configure the project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: (leave default)

3. **Add Environment Variables in Vercel**:
   - In the Vercel project dashboard, go to Settings → Environment Variables
   - Add `RESEND_API_KEY` with your actual Resend API key
   - Save the variable

4. **Deploy**:
   - Click "Deploy"
   - Your site will be live at `https://layer-up.vercel.app` (or your custom domain)

5. **Automatic Deployments**:
   - Every push to the `main` branch will automatically trigger a new deployment
   - Preview deployments are created for pull requests

## 📁 Project Structure

```
layer-up/
├── app/
│   ├── about/
│   │   └── page.js          # About page
│   ├── api/
│   │   └── enquiry/
│   │       └── route.js     # API route for form submissions
│   ├── thank-you/
│   │   └── page.js          # Thank you page
│   ├── upload/
│   │   └── page.js          # Upload/enquiry form page
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   └── page.js              # Home page
├── components/
│   └── Footer.js            # Reusable footer component
├── public/                  # Static assets (add images here)
├── .env.local.example       # Example environment variables
├── .gitignore              # Git ignore rules
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # This file
```

## 🎨 Customization

### Colors

The primary colors are defined in `tailwind.config.js`:
- **Primary (Blue)**: `#3B82F6`
- **Secondary (Gray)**: `#6B7280`

To change these colors, edit the `theme.extend.colors` section in `tailwind.config.js`.

### Email Template

The email template is located in `app/api/enquiry/route.js`. You can customize the HTML and text content to match your branding.

### Footer Links

Update the Instagram link in `components/Footer.js` to point to your actual Instagram profile.

## 📧 Email Configuration

By default, emails are sent from `onboarding@resend.dev`. To use your own domain:

1. Add and verify your domain in Resend dashboard
2. Update the `from` field in `app/api/enquiry/route.js`:
   ```javascript
   from: 'Layer Up <hello@yourdomain.com>'
   ```

## 🔒 Security

- `.env.local` is excluded from Git via `.gitignore`
- Never commit API keys or secrets to version control
- Use Vercel's environment variables for production secrets
- File uploads are validated for type and size

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Emails not sending
- Verify your `RESEND_API_KEY` is correct in `.env.local`
- Check the Resend dashboard for error logs
- Ensure you're not exceeding the free tier limits

### Build errors
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Check for any TypeScript/JavaScript errors

### Styling issues
- Clear browser cache
- Restart the development server
- Verify Tailwind CSS is properly configured

## 📄 License

This project is private and proprietary to Layer Up.

## 👥 Contact

For questions or support, contact: sam.bousounis@gmail.com

---

Built with ❤️ for Layer Up 3D Printing

