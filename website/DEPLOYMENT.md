# 🚀 Deployment Guide - Making Your Website Live

## Option 1: GitHub Pages (Recommended - FREE)

### Prerequisites:
- A GitHub account (free at github.com)
- Git installed on your computer

### Step-by-Step Instructions:

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Name it: `natalia-coaching` (or any name you prefer)
   - Set it to Public
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Initialize Git in Your Project** (if not already done)
   ```bash
   cd /Users/evgeny.polyachenko/HOME/Natasha/Website_sessions/website
   git init
   git add .
   git commit -m "Initial commit - Natalia's coaching website"
   ```

3. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/natalia-coaching.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section (left sidebar)
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

5. **Access Your Live Website**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/natalia-coaching/`
   - It may take 5-10 minutes to go live initially

---

## Option 2: Netlify (FREE with more features)

### Step-by-Step Instructions:

1. **Create a Netlify Account**
   - Go to https://www.netlify.com
   - Sign up for free (can use GitHub account)

2. **Deploy via Drag & Drop**
   - Go to https://app.netlify.com/drop
   - Drag your entire `website` folder onto the page
   - Your site will be instantly deployed!

3. **Custom Domain (Optional)**
   - Netlify gives you a random URL like `amazing-curie-123456.netlify.app`
   - You can change it to something like `natalia-coaching.netlify.app` for free
   - Or connect your own domain if you have one

---

## Option 3: Vercel (FREE, very fast)

### Step-by-Step Instructions:

1. **Create a Vercel Account**
   - Go to https://vercel.com
   - Sign up for free

2. **Install Vercel CLI** (optional, for command line deployment)
   ```bash
   npm install -g vercel
   ```

3. **Deploy**
   ```bash
   cd /Users/evgeny.polyachenko/HOME/Natasha/Website_sessions/website
   vercel
   ```
   Follow the prompts, and your site will be live!

---

## Option 4: Custom Domain with Professional Hosting

If you want a professional domain like `www.natalia-coaching.com`:

### Domain Registration:
- **Namecheap**: $8-15/year for .com domains
- **Google Domains**: $12/year for .com domains
- **GoDaddy**: $12-20/year for .com domains

### Hosting Options:
1. **GitHub Pages + Custom Domain** (FREE hosting)
   - Buy domain only (~$12/year)
   - Point domain to GitHub Pages
   
2. **Netlify + Custom Domain** (FREE hosting)
   - Buy domain only (~$12/year)
   - Easy SSL certificate setup

3. **Professional Hosting** ($5-10/month)
   - Bluehost
   - SiteGround
   - HostGator

---

## Quick Start Commands for GitHub Pages

Here are the exact commands to run right now:

```bash
# 1. Navigate to your website folder
cd /Users/evgeny.polyachenko/HOME/Natasha/Website_sessions/website

# 2. Initialize Git
git init

# 3. Add all files
git add .

# 4. Create first commit
git commit -m "Initial website commit"

# 5. After creating repo on GitHub, connect it:
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/natalia-coaching.git

# 6. Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🎯 Recommendation

For immediate deployment:
1. **Netlify Drag & Drop** - Fastest, no Git required
2. **GitHub Pages** - Best for long-term, version control

For professional presence:
1. Buy a domain name (~$12/year)
2. Use Netlify or GitHub Pages for free hosting
3. Connect your custom domain

---

## Need Help?

Common issues and solutions:

**GitHub Pages not showing?**
- Wait 10-15 minutes after enabling
- Check Settings > Pages for the correct URL
- Ensure index.html is in the root folder

**Images not loading?**
- Check file paths are relative (not absolute)
- Ensure image files are committed to Git

**Custom domain issues?**
- DNS changes can take up to 48 hours
- Check nameserver settings with your domain registrar

---

## File Structure Check

Your website should have this structure:
```
website/
├── index.html          ← Main file (required)
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── images/
│       ├── natalia-photo.jpg
│       ├── qr-code.jpg
│       └── triz-diagram.jpg
└── README.md
```

Everything looks good to deploy! 🚀