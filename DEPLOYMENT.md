# 🚀 Deployment Guide

This guide will help you deploy the Gmail Dot Generator to various platforms.

## 🌟 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and is created by the same team.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/curl-kawsar/gmail-dot-generator)

### Manual Deployment

1. **Create a Vercel Account**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Import Your Repository**
   - Click "New Project"
   - Import `curl-kawsar/gmail-dot-generator`
   - Vercel will automatically detect it's a Next.js project

3. **Configure Settings** (Optional)
   - Project Name: `gmail-dot-generator`
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (~2-3 minutes)
   - Get your live URL: `https://gmail-dot-generator.vercel.app`

### Custom Domain (Optional)

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 🐙 GitHub Pages

Deploy as a static site using GitHub Actions.

1. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: GitHub Actions

2. **Create Workflow File**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - run: npm run export
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

3. **Update next.config.mjs**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   };
   
   export default nextConfig;
   ```

## 🌊 Netlify

Deploy with continuous deployment from GitHub.

1. **Connect Repository**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

3. **Deploy**
   - Click "Deploy site"
   - Get your live URL: `https://amazing-name-123456.netlify.app`

## 🔥 Firebase Hosting

Deploy to Google's Firebase platform.

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure firebase.json**
   ```json
   {
     "hosting": {
       "public": "out",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Build and Deploy**
   ```bash
   npm run build
   npm run export
   firebase deploy
   ```

## 🐳 Docker

Deploy using Docker containers.

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   
   COPY . .
   RUN npm run build
   
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and Run**
   ```bash
   docker build -t gmail-dot-generator .
   docker run -p 3000:3000 gmail-dot-generator
   ```

## ⚙️ Environment Variables

If you add any environment variables in the future:

### Vercel
- Go to Project Settings → Environment Variables
- Add variables for Production, Preview, and Development

### Netlify
- Go to Site Settings → Environment Variables
- Add variables with appropriate scopes

### Other Platforms
- Check platform-specific documentation for environment variable configuration

## 🔧 Build Optimization

For production deployments:

1. **Optimize Images**
   - Use Next.js Image component
   - Configure image domains in next.config.mjs

2. **Enable Compression**
   - Most platforms enable gzip automatically
   - Vercel and Netlify handle this by default

3. **Configure Caching**
   - Static assets are cached automatically
   - API routes can be configured for caching

## 📊 Analytics (Optional)

Add analytics to track usage:

1. **Vercel Analytics**
   ```bash
   npm install @vercel/analytics
   ```

2. **Google Analytics**
   - Add tracking ID to environment variables
   - Use next/script component

## 🚨 Troubleshooting

### Build Errors
- Check Node.js version (18+ recommended)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall

### Deployment Issues
- Check build logs for specific errors
- Ensure all dependencies are in package.json
- Verify environment variables are set correctly

### Performance Issues
- Enable compression
- Optimize images
- Use CDN for static assets

---

**Need help?** Open an issue on [GitHub](https://github.com/curl-kawsar/gmail-dot-generator/issues)
