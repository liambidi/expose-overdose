<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Overdose.Edu

Pratiques ecrites et orales de la communication — a React + Vite educational website.

## Run Locally

**Prerequisites:** Node.js (v18+)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the app:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Netlify (Free Hosting) — Step by Step

### Prerequisites

- A GitHub account with your project pushed to a repository
- A Netlify account (free) — sign up at [netlify.com](https://app.netlify.com/signup)

### Step 1: Push your code to GitHub

If not already done, push your project to a GitHub repository:

```bash
git add .
git commit -m "ready for deployment"
git push origin main
```

### Step 2: Connect your repo to Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** > **"Import an existing project"**
3. Select **GitHub** as your Git provider
4. Authorize Netlify to access your GitHub account if prompted
5. Search for and select your repository (e.g. `expose-overdose`)

### Step 3: Configure build settings

Netlify should auto-detect the settings from the `netlify.toml` file in this repo. Verify they match:

| Setting           | Value            |
|-------------------|------------------|
| Branch to deploy  | `main`           |
| Build command     | `npm run build`  |
| Publish directory | `dist`           |

Click **"Deploy site"**.

### Step 4: Wait for the build

Netlify will install dependencies, build the project, and deploy it. This usually takes 1-2 minutes. Once done, you'll get a live URL like `https://random-name.netlify.app`.

### Step 5: Set up a custom subdomain (optional)

If you own a domain (e.g. `yourdomain.com`) and want `overdose.yourdomain.com` to point to your site:

1. In Netlify, go to **Site settings** > **Domain management** > **Add a custom domain**
2. Enter `overdose.yourdomain.com` and click **Verify** > **Add domain**
3. Go to your DNS provider (where you bought the domain) and add a DNS record:

   | Type    | Name       | Value                              |
   |---------|------------|------------------------------------|
   | CNAME   | `overdose` | `your-site-name.netlify.app`       |

   > **Note:** For a subdomain like `overdose.yourdomain.com`, use a **CNAME** record (not an A record). The `Name` field is just the subdomain part (`overdose`). The `Value` is your Netlify site URL (found in Site settings > Domain management).

4. Wait for DNS propagation (can take a few minutes up to 48 hours, usually under 10 minutes)
5. Back in Netlify, SSL will be auto-provisioned via Let's Encrypt. Click **Verify DNS** once your domain is active.

### Step 6: Enable HTTPS

Netlify provides free SSL. Once your custom domain's DNS is propagated:

1. Go to **Site settings** > **Domain management** > **HTTPS**
2. Click **"Verify DNS configuration"** then **"Provision certificate"**
3. Your site is now live at `https://overdose.yourdomain.com`

---

### Redeploying

Any future `git push` to `main` will **automatically trigger a new deployment** on Netlify. No manual action needed.

---

### Quick Reference for New Projects

To deploy any Vite/React project to Netlify, just:

1. Add a `netlify.toml` at the project root:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```
2. Push to GitHub
3. Connect the repo on [app.netlify.com](https://app.netlify.com) > **Add new site** > **Import an existing project**
4. Done — Netlify auto-deploys on every push
