# Aazhini Accessories

A single-page storefront for **Aazhini Accessories** — handcrafted amethyst and crystal healing bracelets. Visitors can browse the collection, filter products, manage a cart and wishlist, check out through WhatsApp, and send enquiries through a contact form.

## Features

- Responsive single-page layout (Home, Shop, About, Contact)
- 18 bracelet products with prices, discounts, badges, ratings and tags
- Product filter tabs (All, Bestsellers, New, Premium)
- Shopping cart and wishlist drawers
- Order placement via WhatsApp message
- Contact form powered by [Web3Forms](https://web3forms.com)
- Instagram link, toast notifications and header scroll effect

## Project Structure

```
aazhini-accessories/
├── index.html        # Page structure and content
├── style.css         # All styles
├── script.js         # Products, cart, wishlist, checkout, contact form
├── assets/
│   ├── images/       # product-01.jpg … product-19.jpg
│   └── icons/        # favicon.png, logo.png
├── .gitignore
└── README.md
```

## Run Locally

No build step or dependencies are required.

1. Download or clone the repository.
2. Open `index.html` in any modern browser.

Optionally, serve it with a local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Third-Party Services

| Service | Used for | Notes |
|---|---|---|
| WhatsApp (`wa.me`) | Sending orders / enquiries | Opens a pre-filled chat; no backend needed |
| Web3Forms (`api.web3forms.com`) | Contact form emails | Needs an access key (see below) |
| Instagram | Social link in footer | Plain link |

There is no custom backend, so everything runs on GitHub Pages.

## Contact Form Configuration

`script.js` contains a `WEB3_KEY` constant. Web3Forms access keys are designed to be used in front-end code, but you should still protect yours:

1. Sign in at [web3forms.com](https://web3forms.com) and open your form's settings.
2. Restrict the key to your website's domain (e.g. `your-username.github.io`) if the option is available.
3. To use your own key, replace the value of `WEB3_KEY` in `script.js`.
4. If `WEB3_KEY` is set to `YOUR_WEB3FORMS_KEY`, the form falls back to opening the visitor's email app.

Never put private secrets (passwords, server API keys) in this repository.

## Deploy with GitHub Pages

1. Create a public repository named `aazhini-accessories` on GitHub.
2. Upload all files so that `index.html` sits in the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then **Save**.
5. After a minute or two the site is live at `https://<your-username>.github.io/aazhini-accessories/`.

## License

All rights reserved by Aazhini Accessories unless you choose to add a license.
