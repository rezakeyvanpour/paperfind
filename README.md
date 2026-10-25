# PaperFind

A Persian-language academic article discovery platform focused on a simple, accessible search experience.

## Status

Frontend prototype in development. Search results use sample data and are not intended for academic citation.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES Modules)

## Features

- Persian-language search interface
- Sample article results with relevance-based ranking
- Sorting by relevance and publication year
- Publication year range filters
- Responsive layout

## Project Structure

```text
paperfind/
├── index.html
├── README.md
├── .gitignore
└── src/
    ├── css/
    │   ├── base.css
    │   ├── components.css
    │   └── main.css
    └── js/
        ├── app.js
        ├── articles.js
        ├── data.js
        ├── filters.js
        ├── search.js
        └── utils.js
```

## Getting Started

Run the project using a local development server, then open the local URL in your browser.

For example, in PyCharm, use its built-in preview or a configured local server that supports JavaScript ES Modules.

## Scope

Current development focuses on the frontend. Backend services, live academic search, and integration with real scholarly sources have not yet been implemented.