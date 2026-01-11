# OnPageSEO-Slug

A production-oriented **Next.js App Router** project focused on implementing **SEO-friendly dynamic routing** using clean, human-readable slugs, along with core **on-page SEO best practices**.

This repository demonstrates how modern Next.js applications should structure routes, metadata, and data fetching for scalability, performance, and search engine visibility.

---

## Overview

- Implements dynamic subjects routing using `/subj/[slug]`
- Applies dynamic metadata for improved SEO
- Integrates external API data for realistic content handling
- Deployed on Vercel for optimal Next.js support

---

## Project Structure

```bash
app/
├── layout.jsx                
├── page.jsx                  
├── not-found.jsx             
├── providers.jsx             
├── globals.css               
├── favicon.ico               
│
├── about-us/
│   └── page.jsx              
│
├── privacy-policy/
│   └── page.jsx              
│
├── terms-and-conditions/
│   └── page.jsx              
│
├── subj/
│   ├── page.jsx              
│   └── [slug]/
│       ├── page.jsx          
│       └── tags/
│           └── page.jsx      
│
├── page/
│   └── [pageNo]/
│       └── page.jsx          
│
├── components/
│   ├── Navbar.jsx            
│   ├── Footer.jsx            
│   ├── BackButton.jsx        
│   ├── HomeStats.jsx         
│   └── ThemeToggle.jsx       
│
├── data/
│   └── student_dataset.json
│
├── lib/
    └── posts.repository.js
│   └── slugify.js            
│
public/
├── og/
│   └── default.png           
└── screenshots/              
```
---

## Getting Started
```bash
git clone https://github.com/ayan-x1/OnPageSeo-Slug.git
cd OnPageSeo-Slug
npm install
npm run dev
```
---
