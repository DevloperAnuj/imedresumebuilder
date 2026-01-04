# Deployment Guide for IMED Resume Builder

## For Direct Web Server Deployment

### Step 1: Build the Production Files
```bash
npm run build
```
This creates a `dist/` folder with all production files.

### Step 2: Copy Files to Your Web Server

Copy **ALL** files from the `dist/` folder to your web server's root directory (usually `public_html`, `www`, or `htdocs`).

**Important:** Make sure to copy the `.htaccess` file (it's hidden by default on some systems).

### Step 3: Configure Your Web Server

#### For Apache Servers (Most Common)
The `.htaccess` file is already included in the `dist/` folder after build.

**Verify:**
- The `.htaccess` file is in your web server root
- Apache's `mod_rewrite` module is enabled
- `.htaccess` files are allowed (check `AllowOverride All` in Apache config)

#### For Nginx Servers
Add this to your Nginx configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Then reload Nginx:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

#### For IIS Servers (Windows)
The `web.config` file is already included in the `dist/` folder after build.

**Verify:**
- The `web.config` file is in your web server root
- URL Rewrite module is installed in IIS

### Step 4: Test Your Deployment

Visit these URLs to ensure routing works:
- `https://yourdomain.com/` (Landing page)
- `https://yourdomain.com/builder` (Resume builder)
- `https://yourdomain.com/privacy` (Privacy policy)
- `https://yourdomain.com/terms` (Terms of service)
- `https://yourdomain.com/about` (About us)
- `https://yourdomain.com/contact` (Contact us)
- `https://yourdomain.com/tips` (Tips page)

All pages should load correctly without 404 errors.

---

## Troubleshooting

### Issue: Getting 404 errors on legal pages

**Solution for Apache:**
1. Check if `.htaccess` file exists in your web root
2. Enable mod_rewrite: `sudo a2enmod rewrite`
3. Restart Apache: `sudo systemctl restart apache2`
4. Check Apache config allows `.htaccess`: `AllowOverride All`

**Solution for Nginx:**
1. Add the configuration above to your Nginx config
2. Reload Nginx: `sudo systemctl reload nginx`

**Solution for IIS:**
1. Install URL Rewrite module from Microsoft
2. Ensure `web.config` file is in your web root
3. Restart IIS

### Issue: Assets (CSS/JS) not loading

**Solution:**
1. Check if all files from `dist/` folder were copied
2. Check file permissions (should be readable by web server)
3. Clear browser cache and try again

### Issue: Firebase Analytics not working

**Solution:**
1. Ensure `firebase.js` configuration is correct
2. Check browser console for errors
3. Verify Firebase project is active

---

## Quick Deployment Checklist

- [ ] Run `npm run build`
- [ ] Copy ALL files from `dist/` folder to web server
- [ ] Ensure `.htaccess` (Apache) or `web.config` (IIS) is copied
- [ ] Configure Nginx if using Nginx server
- [ ] Test all routes (/, /builder, /privacy, /terms, /about, /contact, /tips)
- [ ] Check browser console for errors
- [ ] Test on mobile devices
- [ ] Verify Firebase Analytics is working

---

## File Structure After Deployment

Your web server root should look like this:
```
/
├── index.html
├── .htaccess (for Apache)
├── web.config (for IIS)
├── _redirects (for Netlify, if used)
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
└── [other files]
```

---

## Performance Tips

1. **Enable GZIP compression** on your web server
2. **Set proper cache headers** for static assets
3. **Use HTTPS** for security and better SEO
4. **Enable HTTP/2** if your server supports it
5. **Minify** is already done by Vite build

---

## Support

If you encounter issues:
1. Check browser console for errors
2. Check web server error logs
3. Verify all files were copied correctly
4. Test in incognito mode to rule out cache issues
