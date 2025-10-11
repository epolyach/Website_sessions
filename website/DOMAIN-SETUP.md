# 🌐 Setting Up www.natalie-sessions-lux.com

## Domain Availability & Pricing

The domain **natalie-sessions-lux.com** appears to be available! Here's the pricing breakdown:

### 💰 Domain Registration Costs (per year):

| Registrar | .com Price | First Year Promo | Features |
|-----------|------------|------------------|----------|
| **Namecheap** | $13.98/year | $9.78 (first year) | Free WhoisGuard privacy |
| **Google Domains** | $12/year | $12 | Free privacy protection |
| **GoDaddy** | $19.99/year | $0.99 (first year) | Privacy +$9.99/year |
| **Porkbun** | $10.37/year | $10.37 | Free WhoisGuard privacy |
| **Cloudflare** | $9.15/year | $9.15 | Free privacy, best price |

### 🏆 Best Option: Namecheap + Netlify (Total Cost: ~$10-14/year)

## Step-by-Step Setup Guide

### Step 1: Purchase the Domain (10 minutes)

#### Option A: Namecheap (Recommended)
1. Go to https://www.namecheap.com
2. Search for `natalie-sessions-lux.com`
3. Add to cart
4. Create account and checkout
5. **Enable WhoisGuard** (free) to protect your privacy
6. Total cost: ~$9.78 (first year)

#### Option B: Google Domains (Simplest)
1. Go to https://domains.google.com
2. Search for `natalie-sessions-lux.com`
3. Purchase for $12/year
4. Privacy protection included free

### Step 2: Deploy Website to Netlify (5 minutes)

1. **Go to Netlify**: https://app.netlify.com/signup
2. **Sign up** (free, use email or GitHub)
3. **Deploy your site**:
   - Go to https://app.netlify.com/drop
   - Drag your `website` folder onto the page
   - Site goes live instantly!

4. **Note your Netlify URL** (like `amazing-name-123.netlify.app`)

### Step 3: Connect Domain to Netlify (15 minutes)

#### On Netlify:
1. Go to your site dashboard on Netlify
2. Click **Domain settings**
3. Click **Add custom domain**
4. Enter `natalie-sessions-lux.com`
5. Click **Verify** → **Add domain**
6. Netlify will show you DNS settings

#### On Your Domain Registrar (Namecheap example):
1. Log into Namecheap
2. Go to **Domain List** → **Manage** (next to your domain)
3. Click **Advanced DNS**
4. Delete existing records
5. Add these records:

| Type | Host | Value |
|------|------|-------|
| A | @ | 75.2.60.5 |
| CNAME | www | [your-site-name].netlify.app |

6. Save changes

### Step 4: Enable SSL Certificate (Automatic)
1. Back in Netlify → Domain settings
2. Scroll to **HTTPS**
3. Click **Verify DNS configuration**
4. Netlify automatically provisions SSL certificate (free)
5. Wait 5-15 minutes

## 🎉 Result: Your site is live at:
- ✅ https://www.natalie-sessions-lux.com
- ✅ https://natalie-sessions-lux.com
- ✅ Secure SSL certificate
- ✅ Fast global CDN
- ✅ Automatic deployments

---

## Alternative: GitHub Pages + Custom Domain

### Total Cost: ~$10-14/year (domain only)

1. **Buy domain** (same as above)
2. **Push code to GitHub**:
```bash
cd /Users/evgeny.polyachenko/HOME/Natasha/Website_sessions/website
git remote add origin https://github.com/YOUR_USERNAME/natalie-sessions.git
git push -u origin main
```

3. **Enable GitHub Pages**:
   - Repository Settings → Pages
   - Source: Deploy from branch (main)
   
4. **Add custom domain**:
   - In Settings → Pages → Custom domain
   - Enter `natalie-sessions-lux.com`
   - GitHub creates a CNAME file

5. **Configure DNS** (at domain registrar):

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR_USERNAME.github.io |

---

## 📊 Cost Comparison

### Option 1: Netlify + Custom Domain
- Domain: $10-14/year
- Hosting: FREE
- SSL: FREE
- **Total: $10-14/year**

### Option 2: GitHub Pages + Custom Domain  
- Domain: $10-14/year
- Hosting: FREE
- SSL: FREE
- **Total: $10-14/year**

### Option 3: Traditional Web Hosting
- Domain: $10-14/year
- Hosting: $60-120/year
- SSL: $0-50/year
- **Total: $70-184/year**

---

## 🚀 Quick Start Commands

### For Netlify Deployment:
```bash
# No commands needed! Just drag and drop at https://app.netlify.com/drop
```

### For GitHub Pages:
```bash
# Make sure you're in the website directory
cd /Users/evgeny.polyachenko/HOME/Natasha/Website_sessions/website

# Create repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/natalie-sessions.git
git push -u origin main
```

---

## 📧 Professional Email Setup (Optional)

Want **natalie@natalie-sessions-lux.com**?

### Option 1: Email Forwarding (FREE)
- Most domain registrars offer free email forwarding
- Forwards to your existing email (Gmail, etc.)
- Send emails from Gmail using custom domain

### Option 2: Google Workspace ($6/month)
- Professional Gmail interface
- 30GB storage
- Video meetings, calendar, docs

### Option 3: Zoho Mail (FREE for 1 user)
- Up to 5GB storage
- Professional email interface
- Mobile apps

---

## ⏱ Total Setup Time: 30-45 minutes

1. Buy domain: 10 minutes
2. Deploy to Netlify: 5 minutes  
3. Connect domain: 15 minutes
4. Wait for DNS: 5-30 minutes

---

## 🎯 My Recommendation

**Best setup for you:**
1. Buy domain at **Namecheap** ($9.78 first year)
2. Deploy to **Netlify** (free, easier than GitHub)
3. Use **email forwarding** to your existing email (free)

**Total cost: ~$10 for the first year, $14/year after**

This gives you:
- Professional domain name
- Fast, secure website
- Free SSL certificate
- Free hosting
- Easy updates (just drag new files to Netlify)

---

## Need Help?

Common issues:
- **DNS propagation**: Can take up to 48 hours (usually 30 minutes)
- **SSL not working**: Wait 15 minutes, then click "Verify DNS" in Netlify
- **Site not updating**: Clear browser cache or try incognito mode

Ready to make your website professional with your own domain! 🚀