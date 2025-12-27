# Structure and notes

## `index.html` class structure

```md
body
├── header.container
│   ├── a.logo[href="index.html"]{scenic.forests}
│   └── nav
│       ├── button#menu-btn[aria-label="Toggle Menu"][aria-expanded="false"]
│       │   └── img[src="/images/menu.svg"][alt=""]
│       └── ul#nav-list.nav-list
│           ├── li > a.active[href="index.html"]{Home}
│           ├── li > a[href="./cabins.html"]{Cabins}
│           ├── li > a[href="#"]{FAQ}
│           ├── li > a[href="../es/index.html"]{ES}
│           └── li > a.btn.btn-primary.cta[href="#"]{Reservations}
├── main#main-content
└── script[type="module"][src="/js/main.js"]
```

## Hero Section

```md
section.hero
└── div.container.container.padded
    └── div.hero-layout
        ├── div.hero-copy.stack
        │   ├── p.subtitle
        │   ├── h1
        │   │   ├── span (Animated)
        │   │   ├── span (Animated)
        │   │   └── span (Animated)
        │   └── a.btn.btn-primary.cta
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
    │   ├── article.bio.stack
    │   │   ├── h3
    │   │   ├── p
    │   │   └── p
    │   └── ul.testimonial-list
    │       └── li (×3)
    │           └── article.testimonial-item
    │               ├── img.testimonial-avatar
    │               └── div.testimonial-body
    │                   ├── p.testimonial-text
    │                   └── p.testimonial-meta (--Author)
    └── img.watermark-fern (aria-hidden="true")
```

# `cabins.html`

## Subpage - Breadcrumbs & Intro

```md
section.sub-hero
└── div.container.padded
    ├── nav (aria-label="Breadcrumb")
    │   └── ul.breadcrumbs
    │       ├── li > a (Home)
    │       └── li (Current Page)
    └── div.sub-hero-copy.stack
        ├── h1 > span (Our Cabins)
        └── p.sub-desc
```

## Full Cataloge Grid

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


