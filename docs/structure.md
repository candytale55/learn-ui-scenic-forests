# Structure and notes

## `index.html` class structure

```md
body
├── header.container
│ ├── a.logo[href="index.html"]{scenic.forests}
│ └── nav
│ ├── button#menu-btn[aria-label="Toggle Menu"][aria-expanded="false"]
│ │ └── img[src="/images/menu.svg"][alt=""]
│ └── ul#nav-list.nav-list
│ ├── li > a.active[href="index.html"]{Home}
│ ├── li > a[href="./cabins.html"]{Cabins}
│ ├── li > a[href="#"]{FAQ}
│ ├── li > a[href="../es/index.html"]{ES}
│ └── li > a.btn.btn-primary.cta[href="#"]{Reservations}
├── main#main-content
└── script[type="module"][src="/js/main.js"]
```

## Hero Section

```md
section.hero
└── div.container.container.padded
└── div.hero-layout
├── div.hero-copy.stack
│ ├── p.subtitle
│ ├── h1
│ │ ├── span (Animated)
│ │ ├── span (Animated)
│ │ └── span (Animated)
│ └── a.btn.btn-primary.cta
└── ul.cabin-preview-list
└── li (×3)
└── article.cabin-card
├── a > img.cabin-card-img
└── div.cabin-card-body.stack
├── p.cabin-card-title
├── p.cabin-card-desc
└── a.link-arrow
├── span (Cabin Info)
└── img (Arrow icon)
```

## Amenities Section

```md
section.amenities.bg-dark
└── div.container.container.padded
└── ul.amenities-list
└── li (×3)
└── article.amenity-item.stack
├── img.amenity-icon
├── h2
└── p
```

## Social Proof : Testimonials & Bio

```md
section.social-proof
└── div.container.container.padded
├── blockquote.featured-quote
├── cite.quote-author
├── div.social-layout
│ ├── article.bio.stack
│ │ ├── h3
│ │ ├── p
│ │ └── p
│ └── ul.testimonial-list
│ └── li (×3)
│ └── article.testimonial-item
│ ├── img.testimonial-avatar
│ └── div.testimonial-body
│ ├── p.testimonial-text
│ └── p.testimonial-meta (--Author)
└── img.watermark-fern (aria-hidden="true")
```

# `cabins.html`

## Subpage - Breadcrumbs & Intro

```md
section.sub-hero
└── div.container.padded
├── nav (aria-label="Breadcrumb")
│ └── ul.breadcrumbs
│ ├── li > a (Home)
│ └── li (Current Page)
└── div.sub-hero-copy.stack
├── h1 > span (Our Cabins)
└── p.sub-desc
```

## Full Catalog Grid

```md
section.catalog
└── div.container.padded
└── ul.catalog-grid
└── li (×9)
└── article.cabin-card
├── a > img.cabin-card-img
└── div.cabin-card-body.stack
├── p.cabin-card-title
├── p.cabin-card-desc
└── a.link-arrow
├── span
└── img
```

---

# `faq.html`

## Subpage - Breadcrumbs & Intro

```md
section.sub-hero
└── div.container.padded
├── nav (aria-label="Breadcrumb")
│ └── ul.breadcrumbs
│ ├── li > a (Home)
│ └── li > a (FAQ - Current Page)
└── div.sub-hero-copy.stack
├── h1 > span (Frequently Asked Questions)
└── p.sub-desc
```

## FAQ Section with Native Accordions

```md
section.faq.section
└── div.container
└── article.faq-category.stack (×3 categories)
├── h2 (Category Title: Booking & Policies | Amenities & Features | Location & Attractions)
└── details.accordion (×multiple per category)
├── summary.accordion-header (Question)
└── div.accordion-content.stack
└── p (Answer text)
```

**Note:** Uses native HTML5 `<details>`/`<summary>` elements for accordion functionality (no JS required).

---

# `reservations.html`

## Subpage - Breadcrumbs & Intro

```md
section.sub-hero
└── div.container.padded
├── nav (aria-label="Breadcrumb")
│ └── ul.breadcrumbs
│ ├── li > a (Home)
│ └── li > a (Reservations - Current Page)
└── div.sub-hero-copy.stack
├── h1 > span (Book Your Escape)
└── p.sub-desc
```

## Booking Section with Form & Map

```md
section.booking.section
└── div.container.padded
└── div.booking-layout (Two-column layout on desktop)
├── form#booking-form.stack
│ ├── div.form-group (×4 individual fields)
│ │ ├── label > span.required (\*)
│ │ └── input (text, email, select, date, or number)
│ ├── div.form-row (Two-column date inputs)
│ │ ├── div.form-group (Check-in Date)
│ │ └── div.form-group (Check-out Date)
│ ├── div.form-group (Number of Guests)
│ ├── p.form-note (Contact info with mailto link)
│ └── button.btn.btn-primary (Submit)
└── div.map-container
└── iframe (Google Maps embed)
```

**Key IDs:**

- `#booking-form` - Main form element (intercepted by JS)
- `#full-name`, `#email`, `#cabin-select`, `#check-in`, `#check-out`, `#guests` - Form inputs

## Success Modal (Overlay)

```md
div#success-modal.modal-overlay (aria-hidden toggles between true/false)
└── div.modal-card.stack.padded
├── button#modal-close.modal-close (aria-label="Close Modal")
│ └── img (Exit icon)
├── h2 (Success message)
└── p (Confirmation text)
```

**Note:** Modal is triggered by JS on form submission. Uses `.is-visible` class to show/hide.

---

# Shared Components

## Header Navigation (All Pages)

```md
header
└── div.container
├── a.logo (scenic.forests)
└── nav
├── button#menu-btn (aria-label="Toggle Menu", aria-expanded toggles)
│ └── img (Menu icon)
└── ul#nav-list.nav-list (toggles .is-open class on mobile)
├── button#menu-close.btn-close (aria-label="Close Menu")
│ └── img (Exit icon)
├── li > a (Home)
├── li > a (Cabins)
├── li > a (FAQ)
├── li > a (Language Switcher: ES/EN)
└── li > a.btn.btn-primary.cta (Reservations)
```

**Key IDs:**

- `#menu-btn` - Mobile hamburger button
- `#menu-close` - Mobile close button (inside nav)
- `#nav-list` - Navigation list (receives `.is-open` class)

**Note:** `.active` class is applied to current page link. Language switcher links to equivalent page in other language folder.

## Footer (All Pages)

```md
footer.site-footer.section
└── div.container
└── p#copyright-text
├── span#year (Dynamically injected by JS)
└── span.footer-logo (scenic.forests)
```

**Key ID:**

- `#year` - Target for dynamic year injection via `main.js`
