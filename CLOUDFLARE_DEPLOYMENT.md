# SEJ Clone - Cloudflare Pages Deployment Guide

## Prerequisites
- Cloudflare account (free or paid)
- Git repository (GitHub, GitLab, or Gitea)
- Wrangler CLI installed (`npm install -g wrangler`)

## Deployment Steps

### 1. Push to Git Repository
First, push your code to GitHub (or your preferred git service):

```bash
git init
git add .
git commit -m "Initial commit: SEJ Clone"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sej-clone.git
git push -u origin main
```

### 2. Connect to Cloudflare Pages
1. Log in to your Cloudflare dashboard
2. Go to **Pages** section
3. Click **Connect to Git**
4. Authorize your GitHub account
5. Select the `sej-clone` repository
6. Click **Begin setup**

### 3. Configure Build Settings
In the deployment settings:

**Build command:**
```bash
npm run build
```

**Build output directory:**
```bash
.next
```

**Root directory (advanced):**
```bash
/
```

**Environment variables (optional):**
Add any environment variables your app needs:
- `NODE_ENV`: `production`

### 4. Deploy
1. Click **Save and Deploy**
2. Cloudflare will automatically:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Run the build command
   - Deploy to your site

### 5. Custom Domain (Optional)
1. In Cloudflare Pages settings, go to **Custom domains**
2. Add your custom domain or subdomain
3. Follow the DNS configuration instructions

## Deployment URLs

After successful deployment:
- **Default URL:** `https://sej-clone.pages.dev`
- **Custom domain:** `https://yourdomain.com` (if configured)

## Important Notes

⚠️ **API Routes & Backend:**
- The `/api/subscribe` endpoint stores emails in `data/subscribers.json`
- Cloudflare Pages is serverless, so persistent file storage is limited
- For production, consider using Cloudflare KV, Durable Objects, or a database

⚠️ **Recommended Fix for Production:**
Replace file-based storage with Cloudflare KV:
```typescript
// Instead of file storage, use:
const value = await env.SUBSCRIBERS.get('emails');
await env.SUBSCRIBERS.put('emails', JSON.stringify([...emails, newEmail]));
```

## Automatic Deployments

Once connected to Git:
- Every push to `main` automatically deploys
- Preview deployments for pull requests
- Automatic rollbacks available

## Troubleshooting

**Build fails:**
- Check build logs in Cloudflare dashboard
- Ensure `npm run build` works locally

**API routes don't work:**
- Use Cloudflare KV for data persistence
- Or enable Cloudflare Workers for API routes

**Emails not saving:**
- File storage is read-only on Cloudflare Pages
- Implement KV storage or database integration

## Database Setup (Optional)

For the newsletter subscriber storage, you can:

1. **Cloudflare KV** (Recommended)
2. **Cloudflare Durable Objects**
3. **External Database** (PostgreSQL, MongoDB, etc.)
4. **Supabase** (PostgreSQL hosted)

## Support

For more help:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
