# # Furniture Shop Website

Here's a clean, mobile-first website for **Pal Furniture** ready to deploy:

```html
<!

_Started 2026-10-21 07:36 UTC_

---

## User

Design a modern, mobile-first, single-page website for a furniture shop. Use ONLY the business details below. Do not invent facts, prices, offers, years, awards or testimonials. Anything marked [TO ADD] must stay as a clean, clearly visible placeholder.

BUSINESS DETAILS (from Google Maps)
- Name: PAL FURNITURE
- Category: Furniture wholesaler
- Google rating: 5.0 stars from 28 reviews
- Address: DNK, Paterkoti, Raighar, Kodovatta, Odisha 764074
- Phone: 097777 41135 (tap-to-call, use tel:+919777741135)
- WhatsApp: same number (wa.me/919777741135) [confirm with owner]
- Plus code: V3MH+F9 Kodovatta, Odisha
- Map coordinates: 19.8836785, 82.0784689
- Hours: Open 24 hours [confirm with owner]
- Google Maps link: https://maps.app.goo.gl/Je72KAHMgbKRqhaJ9
- Owner name / established year: [TO ADD]

WHAT CUSTOMERS SAY ON GOOGLE (use as written, with reviewer names)
1. "One of the best furniture shop of our nabarangpur district" - Dipen Sarkar
2. "Very good quality furniture are available here" - Gourab Chakrabarty
3. [TO ADD]
Also show a small badge: "5.0 ★ on Google · 28 reviews". Do not show review dates.

PRODUCTS
Customers mention good quality at low prices, branded products and a wide range. Show these categories as cards (no prices): Beds & headboards, Mattresses, Sofas, Wardrobes, Dining sets, Tables & chairs. [Owner to confirm the final list]

IMAGES: USE REPLACEABLE PLACEHOLDERS
Do not use stock photos or external image links. For every image slot, create a real <img> tag with:
- a local path such as images/hero.jpg, images/gallery-1.jpg, images/category-beds.jpg, images/category-mattresses.jpg, images/category-sofas.jpg, images/category-wardrobes.jpg, images/category-dining.jpg, images/category-tables-chairs.jpg, images/shop-front.jpg
- a descriptive alt text
- width, height and object-fit: cover so replacing the file never breaks the layout
- an inline onerror fallback that shows a warm-toned placeholder block (CSS gradient plus a furniture icon and the label, e.g. "Hero photo: images/hero.jpg") if the file is missing
So when I drop real photos into the images/ folder with the same file names, they appear automatically. Add a short HTML comment above each image saying which photo goes there. Slots needed: 1 hero, 6 category cards, 6 gallery images, 1 shop-front image.

SECTIONS
1. Sticky header: "Pal Furniture" text logo, Call and WhatsApp buttons
2. Hero: shop name, one-line tagline about quality furniture at fair prices, Google rating badge, Call Now and WhatsApp buttons
3. Product categories grid
4. Why choose us (3 to 4 points taken only from the facts above: wide range, branded products, open 24 hours, 5.0 Google rating)
5. Photo gallery
6. Customer reviews from Google
7. Visit us: address, phone, hours, embedded Google Map at the coordinates above, Get Directions button
8. Footer with contact details

DESIGN
- Warm, trustworthy look: wood brown, cream and deep red accents
- Large readable text, fast loading, works well on low-end phones
- Floating Call and WhatsApp buttons on mobile
- Simple English, with an optional Odia tagline
- No fake discounts, no fake awards

OUTPUT
Clean responsive HTML/CSS/JS with an images/ folder structure, ready to deploy on Netlify.

## Assistant

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: ready_for_verification]_

_[tool: ready_for_verification]_

_[tool: show_html]_

I've built the Pal Furniture site in the `site/` folder. I haven't viewed it in a browser yet. My preview tool flags the 14 missing photos because the `images/` folder has no photos in it yet, so I couldn't run the automatic visual check. Until you add photos, each slot should show a warm brown placeholder with a furniture icon and its file name.

- **Files:** `index.html`, `styles.css`, `script.js` and `netlify.toml`. `images/README.txt` lists the exact photo names and sizes. When you add photos with those names, they replace the placeholders automatically.
- **To deploy:** drag the `site/` folder into Netlify.
- **Look:** I used the Broadsheet design system's serif, open newspaper-style layout, recoloured in your wood brown, cream and deep red.
- **Placeholders:** everything marked [TO ADD], and the items you said need the owner's confirmation, shows as a dashed orange label. That includes the WhatsApp number, the 24-hour hours, the product list, the owner and year, and the third review.
- **One addition you didn't ask for:** each product card has an "Ask on WhatsApp" link that opens WhatsApp with a short message naming that category. Delete them if you don't want them.
- **Odia tagline:** "ଉତ୍ତମ ମାନର ଆସବାବପତ୍ର, ଉଚିତ ଦାମରେ" is my own translation, so ask a native speaker to check it. It appears under the hero and in the footer, and each copy is one line to delete.

## User

Add this as third google review.

## Assistant

_[tool: str_replace_edit]_

I've added Durga Prasad's review as the third Google review, in place of the [TO ADD] placeholder. I copied it exactly as written, typo included ("Good qualities furniture are ther"), and left out the date.

## User

Pal Furniture not written here.

## Assistant

_[tool: str_replace_edit]_

I changed the embedded map to search for "PAL FURNITURE, Paterkoti, Raighar" and centred it on your coordinates. It should now show the pin with the shop name from your Google listing, but I haven't checked it on the live map.

If the name still doesn't show, or the pin lands somewhere else, the listing may be named slightly differently on Google. Paste the exact embed link from Google Maps (Share → Embed a map) and I'll put it in.

## User

Create HTML images in place of images. They are replaced with real one later.

## Assistant

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: multi_screenshot]_

Every image slot now shows a simple drawing in your wood, cream and red colours until the real photo is added. Each drawing matches its slot: a sofa room for the hero, a bed, a mattress, a sofa, a wardrobe, a dining set and a desk with a chair for the product cards. The gallery reuses those scenes, and the shop front has a "PAL FURNITURE" signboard.

When you put a photo with the matching file name into the `images/` folder, it shows instead of the drawing, with no code changes.

On the smaller product cards, the file-name label covers the bottom of each drawing, including the furniture legs. I can make the label smaller or move it if that bothers you.

## User

With out changing the design make sure this look like human created not AI slop.

## Assistant

_[tool: run_script]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I rewrote the text in plainer, more natural words and left the design untouched. Every line still uses only the facts you gave me.

- **Headings:** they now read "What you will find in the shop", "Why buy from Pal Furniture", "A look inside the shop" and "Find us in Paterkoti, Raighar".
- **Product cards:** each link now names its product, such as "Ask about sofas" and "Ask about mattresses", in place of the repeated "Ask on WhatsApp →".
- **Why choose us:** the four points are worded more conversationally.
- **Other copy:** the products intro is plainer, the reviews link now reads "Read all 28 reviews on Google", and I removed the decorative arrows.

The images still show the drawings because the photo files aren't in `images/` yet.

## User

Add here sections and wire them with respective one.

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

I added a menu to the header with Products, Why us, Gallery, Reviews and Visit. Each one scrolls to its section. I haven't looked at it in the browser yet.

- **Desktop:** the menu sits in the middle of the header, between the logo and the Call and WhatsApp buttons.
- **Mobile:** it becomes a row you can swipe sideways under the logo and buttons.
- **Scrolling:** sections stop just below the sticky header, so headings aren't hidden.

The warning about 14 missing images is only because the photo files aren't in `images/` yet. The drawn stand-ins show until you add them.

## User

Place those adjacent to the call button.

## Assistant

_[tool: str_replace_edit]_

On desktop, the menu links now sit right next to the Call button, on the right side of the header. I haven't checked it in the browser. On mobile they still sit in a swipeable row under the logo, because there isn't room beside the buttons.

