# SEJ Clone - Cloudflare Pages Deployment Guide

## ✅ What I've Done Locally

1. **Fixed Next.js Configuration** - Removed invalid turbopack configuration
2. **Built the Project** - Successfully compiled Next.js (10 static pages + API routes)
3. **Updated Domain Configuration** - Modified `wrangler.toml` for seorankerai.com
4. **Pushed to GitHub** - All changes committed and pushed to `main` branch

## 🚀 Next Steps - Cloudflare Pages Setup

You need to complete these steps in your Cloudflare account:

### Step 1: Connect GitHub Repository to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Pages** (in the left sidebar)
3. Click **Connect to Git** button
4. Select **GitHub** and authorize if needed
5. Find and select **mato9420s-max/sej-clone** repository
6. Click **Begin setup**

### Step 2: Configure Build Settings

In the deployment configuration page, set:

- **Build command:** `npm run build`
- **Build output directory:** `.next`
- **Root directory:** `/` (leave default)
- **Node.js version:** 22.x or later

### Step 3: Environment Variables

Add these environment variables in Cloudflare Pages settings:

```
NODE_ENV=production
```

**Optional - If you plan to use the /api/subscribe endpoint:**
- The API currently stores emails in a local JSON file
- For production, consider using Cloudflare KV or a database

### Step 4: Deploy

1. Click **Save and Deploy**
2. Cloudflare will automatically build and deploy your site
3. Wait for deployment to complete (usually 2-3 minutes)
4. You'll get a default URL like: `https://sej-clone.pages.dev`

### Step 5: Connect Custom Domain (seorankerai.com)

1. In Cloudflare Pages project, go to **Settings** → **Domains & DNS**
2. Click **Add custom domain**
3. Enter: `seorankerai.com`
4. Follow the DNS configuration steps:
   - If seorankerai.com is already on Cloudflare, it will auto-configure
   - If not, you'll need to either:
     - Add it to Cloudflare and update nameservers at your registrar, OR
     - Add a CNAME record at your current registrar pointing to your Pages URL

### Step 6: Add www Subdomain (Optional)

1. Add `www.seorankerai.com` as another custom domain
2. This redirects www traffic to your main domain

## 📋 Project Structure

```
sej-clone/
├── src/
│   ├── app/
│   │   ├── page.tsx (Home page)
│   │   ├── [category]/[slug]/page.tsx (Dynamic category pages)
│   │   ├── api/subscribe (Newsletter subscription)
│   │   ├── about, contact, privacy, terms (Static pages)
├── public/ (Static assets)
├── .next/ (Build output)
├── wrangler.toml (Cloudflare config)
├── next.config.ts (Next.js config)
└── package.json
```

## 🔧 API Routes

### POST /api/subscribe
- Stores newsletter emails
- **Current issue:** Files are read-only on Cloudflare Pages
- **Solution needed:** Implement Cloudflare KV storage

## ⚠️ Important Notes

1. **File Storage Issue:** The `/api/subscribe` endpoint currently writes to `data/subscribers.json`, but Cloudflare Pages has read-only file system. You'll need to:
   - Option 1: Use Cloudflare KV (recommended)
   - Option 2: Use an external database (Supabase, MongoDB, etc.)
   - Option 3: Disable the endpoint

2. **Database Connection:** The `.env` contains a local Prisma Postgres URL. For production, you should:
   - Use Cloudflare D1 (SQLite), or
   - Connect to a managed database service

## ✨ Features

- ✅ Home page with hero section
- ✅ Category-based dynamic pages
- ✅ Newsletter subscription form
- ✅ Responsive Tailwind CSS design
- ✅ TypeScript for type safety
- ⚠️ API routes (need storage solution)

## 🧪 Testing After Deployment

Once deployed, test:

1. **Homepage:** `https://seorankerai.com/` - Should load with hero section
2. **Category Pages:** `https://seorankerai.com/[category]/[slug]` - Check dynamic routing
3. **About Page:** `https://seorankerai.com/about` - Should load
4. **Newsletter Form:** Try subscribing (may error until KV is set up)
5. **Mobile Responsiveness:** Test on mobile browsers

## 📞 Support

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Cloudflare KV Documentation](https://developers.cloudflare.com/workers/runtime-apis/kv/)

## 🎯 Summary

Your repository is ready for Cloudflare Pages deployment. The build works locally, domain configuration is set up, and GitHub integration is ready. Just connect it in the Cloudflare dashboard and the automatic deployments will begin!
