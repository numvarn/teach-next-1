# Deployment Guide - Vercel

This guide explains how to deploy this Next.js application to Vercel.

## Prerequisites

1. A Vercel account (create at https://vercel.com)
2. GitHub account with this repository
3. Node.js 18+ installed locally

## Automatic Deployment (Recommended)

### Step 1: Connect Repository to Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Select "Next.js" as the framework
3. Connect your GitHub account
4. Select this repository
5. Accept the default settings:
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: `next build`
   - Output Directory: `.next`
6. Click "Deploy"

### Step 2: Set Environment Variables (if needed)

1. Go to your project settings on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add any required environment variables from `.env.example`:
   - `NEXT_PUBLIC_API_URL` (if you have an API)
   - Other custom variables

### Step 3: Configure GitHub Actions (Optional)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) for automatic deployment.

To enable this:

1. Add Vercel secrets to your GitHub repository:
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Add the following secrets:
     - `VERCEL_TOKEN`: Your Vercel authentication token ([create here](https://vercel.com/account/tokens))
     - `VERCEL_ORG_ID`: Your Vercel organization ID (found in Vercel dashboard)
     - `VERCEL_PROJECT_ID`: Your project ID (found in Vercel dashboard)

2. Once secrets are added, GitHub Actions will automatically:
   - Install dependencies
   - Run linting
   - Build the project
   - Deploy to Vercel (production for main branch, preview for PRs)

## Manual Deployment

### Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy from your project directory:
   ```bash
   vercel
   ```

3. Follow the prompts to connect your Vercel account and set up the project

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Configuration Files

### `vercel.json`
Contains Vercel-specific configuration:
- Build and output directories
- Security headers (X-Frame-Options, Content-Security-Policy, etc.)
- Environment variables mapping
- Regional deployment settings (currently set to Singapore: `sin1`)

### `.env.example`
Template for environment variables needed in production.
- Copy to `.env.local` for local development
- Configure actual values in Vercel dashboard

### `next.config.ts`
Next.js configuration with optimizations:
- React compiler enabled for better performance
- Image optimization with modern formats (WebP, AVIF)
- Strict mode for catching bugs
- Compression enabled
- Security headers configured

## Deployment Checklist

- [ ] Vercel account created
- [ ] GitHub account connected to Vercel
- [ ] Repository imported to Vercel
- [ ] Environment variables configured in Vercel dashboard
- [ ] Custom domain configured (if needed)
- [ ] SSL certificate enabled (automatic)
- [ ] Build succeeds locally: `npm run build`
- [ ] No lint errors: `npm run lint`

## Post-Deployment

### Access Your Site

After deployment, Vercel provides:
- A default URL: `https://[project-name].vercel.app`
- Custom domain support (configure in Vercel dashboard)

### Monitor Your Application

1. **Vercel Dashboard**: Monitor builds, logs, and performance
2. **Analytics**: Check Web Vitals and user analytics
3. **Logs**: View build and runtime logs

### Troubleshooting

**Build fails:**
- Check build logs in Vercel dashboard
- Verify `npm run build` works locally
- Ensure environment variables are set correctly

**Performance issues:**
- Check Web Vitals in Vercel Analytics
- Review Core Web Vitals metrics
- Optimize images and code splitting

**Environment variable issues:**
- Verify variables are set in Vercel dashboard
- Check `.env.example` for variable names
- Ensure public variables have `NEXT_PUBLIC_` prefix

## Rollback

To rollback to a previous deployment:

1. Go to your Vercel project dashboard
2. Click on **Deployments**
3. Find the previous successful deployment
4. Click the three dots menu
5. Select **Promote to Production**

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/cli)
