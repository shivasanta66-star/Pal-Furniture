# Pal Furniture website

A static website for Pal Furniture, DNK, Paterkoti, Raighar, Kodovatta, Odisha.
Everything the website needs is in the **`site/`** folder:

```
site/
  index.html     the page
  style.css      colours, fonts, layout
  script.js      phone/WhatsApp number + small helpers
  images/        all photos (placeholders for now)
  favicon.svg    browser-tab icon
  robots.txt     for search engines
  sitemap.xml    for search engines
  _headers       Netlify caching/security settings
```

The original Claude Design files are kept in `project/` and `chats/` for reference only. The live site does not use them.

---

## What you need to replace

### 1. Phone and WhatsApp number (one place)
Open **`site/script.js`**. At the top is a block marked
`PHONE / WHATSAPP NUMBER: CHANGE IT HERE`:

```js
var CONFIG = {
  phone: '+919777741135',
  phoneDisplay: '097777 41135',
  whatsapp: '919777741135',
  whatsappDisplay: '097777 41135'
};
```

These are the shop's numbers from the Google Maps listing. Changing them here updates
every Call button, every WhatsApp button, and every number shown on the page.

- [ ] Confirm the number with the owner.
- [ ] Confirm WhatsApp uses the **same** number. If it doesn't, change `whatsapp` and `whatsappDisplay`.

The same number is also written in `index.html` as a backup for old phones with JavaScript
turned off. If the number changes, search `index.html` for `9777741135` and replace it there too.

### 2. Photos
Every image in `site/images/` is a placeholder drawing marked "Placeholder".
Replace each one with a real photo **using the exact same file name**. No code changes are needed.

| File | Size (approx.) | What to photograph |
|---|---|---|
| `hero.jpg` | 1200×900 | Best showroom / furniture shot. Also shown when the link is shared on WhatsApp |
| `category-beds.jpg` | 800×600 | Beds & headboards |
| `category-mattresses.jpg` | 800×600 | Mattresses |
| `category-sofas.jpg` | 800×600 | Sofas |
| `category-wardrobes.jpg` | 800×600 | Wardrobes |
| `category-dining.jpg` | 800×600 | Dining sets |
| `category-tables-chairs.jpg` | 800×600 | Tables & chairs |
| `gallery-1.jpg` | 800×800 | Wide shot of the showroom |
| `gallery-2.jpg` | 800×800 | Beds in the shop |
| `gallery-3.jpg` | 800×800 | Wardrobes in the shop |
| `gallery-4.jpg` | 800×800 | Dining sets in the shop |
| `gallery-5.jpg` | 800×800 | Sofas in the shop |
| `gallery-6.jpg` | 800×800 | Tables and chairs in the shop |
| `shop-front.jpg` | 1200×800 | Outside of the shop with the signboard |

Keep each photo under about 200 KB so the site loads fast on mobile data. Other shapes work
too, because photos are cropped to fit. If you want better descriptions for blind users and Google,
edit the `alt="..."` text next to each image in `index.html`.

### 3. Opening hours
The site says **"Open 24 hours"** (from Google Maps) with an orange *[confirm with owner]* label.
If the hours are different, change them in `index.html` in these places:
- [ ] Top strip under the header: `Open 24 hours`
- [ ] "Why buy from Pal Furniture", point 03 (heading and sentence)
- [ ] Visit & contact section: **Hours**
- [ ] Footer: `Open 24 hours`
- [ ] In the `<head>`, the `openingHoursSpecification` block (`"opens": "00:00", "closes": "23:59"`), which Google reads

### 4. Address
The address comes from Google Maps: *DNK, Paterkoti, Raighar, Kodovatta, Odisha 764074*.
If it needs changing, edit it in `index.html` in the **Visit & contact** section, the **footer**,
the `<head>` description, and the `address` block of the schema in the `<head>`.

### 5. Orange "[TO ADD]" / "[confirm with owner]" labels
These dashed orange labels are visible on the site so nothing gets forgotten. Fill in or delete each one in `index.html`:
- [ ] Products: *[Owner to confirm the final list]*
- [ ] Why us, point 03: *[confirm with owner]* (24 hours)
- [ ] Visit & contact, WhatsApp: *[confirm with owner]*
- [ ] Visit & contact, Hours: *[confirm with owner]*
- [ ] Visit & contact, **Owner**: *[TO ADD]*
- [ ] Visit & contact, **Established**: *[TO ADD]*

Search `index.html` for `class="todo"` to find them all.

### 6. Website address (after you deploy)
The site assumes the address **`https://palfurniture.netlify.app/`**. Once you know the real one
(Netlify name or your own domain), replace that text in:
- [ ] `site/index.html` (canonical link, Open Graph tags, schema `url` and `image`)
- [ ] `site/robots.txt`
- [ ] `site/sitemap.xml`

### 7. Optional checks
- [ ] Odia tagline "ଉତ୍ତମ ମାନର ଆସବାବପତ୍ର, ଉଚିତ ଦାମରେ" was machine-translated. Ask a native speaker to check it. It appears twice in `index.html`, once in the hero and once in the footer.
- [ ] Map: it uses the official Google Maps embed for "PAL FURNITURE". To change it, in Google Maps go to Share → Embed a map, copy the `src="..."` link and paste it into the `<iframe>` in the Visit & contact section of `index.html`.

---

## Deploy on Netlify

**Option A: drag and drop (easiest)**
1. Log in at <https://app.netlify.com>.
2. Go to *Sites → Add new site → Deploy manually*.
3. Drag the **`site`** folder (not the whole project) onto the page.

**Option B: from GitHub (auto-updates when you push)**
1. *Add new site → Import an existing project →* pick this repository.
2. Leave the build command empty. `netlify.toml` already sets the publish folder to `site`.
3. Deploy.

No build step, no frameworks, no npm. The only outside files are the Google font and the Google Map.

## Preview on your computer
Open `site/index.html` in a browser. To test it exactly as Netlify serves it, run
`python3 -m http.server` inside `site/` and visit <http://localhost:8000>.
