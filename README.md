# PaperFind

A Persian-language academic article discovery interface built for a focused search experience.

## Current Status

The frontend prototype is complete. Search and filtering currently run against a small in-memory sample dataset. Results are illustrative and must not be used as academic references.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES modules)

## Features

- Persian and English text normalization
- Search across article titles, abstracts, authors, and metadata
- Relevance-based result ranking
- Sorting by relevance and publication year
- Publication-year range filtering with validation
- Responsive layout
- Keyboard-accessible interactions

## Run Locally

Serve the project root with a local development server and open its URL in a browser.

JavaScript ES modules require an HTTP server. Opening `index.html` directly through a `file://` URL is not supported.

## Project Structure

```text
paperfind/
├── index.html
├── README.md
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