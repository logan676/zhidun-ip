# 知盾知识产权官网 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a responsive static website for 知盾知识产权 (ZhiDun IP) — an intellectual property agency targeting the Chinese domestic market.

**Architecture:** Single-page application with client-side routing. All content stored as static data files. Tailwind CSS for responsive styling with a professional dark-blue + gold design theme.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, React Router v6, Lucide React icons

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`

**Step 1: Initialize Vite project**

Run:
```bash
cd /Users/HONGBGU/Documents/zhidun-ip
npm create vite@latest . -- --template react-ts
```

**Step 2: Install dependencies**

Run:
```bash
npm install react-router-dom lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

**Step 3: Configure Tailwind via Vite plugin**

Update `vite.config.ts`:
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Update `src/index.css` to use Tailwind:
```css
@import "tailwindcss";
```

**Step 4: Configure custom theme colors**

Add to `src/index.css`:
```css
@theme {
  --color-navy: #1a365d;
  --color-navy-light: #2a4a7f;
  --color-navy-dark: #0f2340;
  --color-gold: #d4a84b;
  --color-gold-light: #e8c675;
}
```

**Step 5: Verify dev server runs**

Run: `npm run dev`
Expected: Vite dev server starts at localhost:5173

**Step 6: Initialize git and commit**

Run:
```bash
git init
echo "node_modules\ndist\n.DS_Store" > .gitignore
git add .
git commit -m "init: scaffold React + TypeScript + Vite + Tailwind project"
```

---

### Task 2: Static Data Layer

**Files:**
- Create: `src/data/services.ts`
- Create: `src/data/company.ts`
- Create: `src/data/navigation.ts`

**Step 1: Create navigation data**

`src/data/navigation.ts`:
```ts
export interface NavItem {
  label: string
  path: string
}

export const navItems: NavItem[] = [
  { label: '首页', path: '/' },
  { label: '专利服务', path: '/patent' },
  { label: '商标服务', path: '/trademark' },
  { label: '版权服务', path: '/copyright' },
  { label: '法律服务', path: '/legal' },
  { label: '关于我们', path: '/about' },
  { label: '联系我们', path: '/contact' },
]
```

**Step 2: Create company data**

`src/data/company.ts` — company info including name, slogan, phone, email, address, stats (服务企业 5000+, 代理案件 20000+, 行业经验 15 年, 专业团队 50+), advantages, team members, milestones.

**Step 3: Create services data**

`src/data/services.ts` — structured data for all 4 service categories (patent, trademark, copyright, legal), each with: title, description, icon name, service types array, process steps array, FAQ array.

**Step 4: Commit**

```bash
git add src/data/
git commit -m "feat: add static data layer for navigation, company, and services"
```

---

### Task 3: Layout Components (Header + Footer)

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/components/Layout.tsx`
- Create: `src/components/ScrollToTop.tsx`

**Step 1: Build Header component**

Desktop: Logo (left) + horizontal nav (right) + phone number CTA button.
Mobile: Logo (left) + hamburger icon (right) → slide-down menu.
Sticky header with white background + subtle shadow on scroll.

**Step 2: Build Footer component**

3-column layout on desktop (company info | quick links | contact info), stacked on mobile.
Dark navy background. Gold accent on hover links. 备案号 at bottom.

**Step 3: Build Layout component**

Wraps `<Header />` + `<Outlet />` + `<Footer />` + `<ScrollToTop />`.
ScrollToTop resets scroll position on route change.

**Step 4: Wire into App.tsx with React Router**

```tsx
<BrowserRouter>
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/patent" element={<Patent />} />
      <Route path="/trademark" element={<Trademark />} />
      <Route path="/copyright" element={<Copyright />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  </Routes>
</BrowserRouter>
```

**Step 5: Verify header/footer render, navigation works**

Run: `npm run dev`, click through all nav links.

**Step 6: Commit**

```bash
git add src/components/ src/App.tsx
git commit -m "feat: add Header, Footer, Layout with responsive navigation"
```

---

### Task 4: Home Page

**Files:**
- Create: `src/pages/Home.tsx`
- Create: `src/components/HeroSection.tsx`
- Create: `src/components/ServiceCard.tsx`
- Create: `src/components/StatsSection.tsx`
- Create: `src/components/WhyChooseUs.tsx`
- Create: `src/components/CTASection.tsx`

**Step 1: Build HeroSection**

Full-width banner with navy gradient background. Large white heading text (公司 slogan). Gold CTA button "免费咨询". Responsive: text sizes scale down on mobile.

**Step 2: Build ServiceCard + service overview grid**

4 cards in a row (desktop), 2 per row (tablet), 1 per row (mobile). Each card: icon (Lucide) + title + short description + "了解更多" link. Hover: subtle shadow lift + gold bottom border.

**Step 3: Build StatsSection**

Number counters (5000+, 20000+, 15年, 50+) in a row. Navy background, white text, gold numbers.

**Step 4: Build WhyChooseUs**

Grid of advantage items with icons. White background section.

**Step 5: Build CTASection**

Full-width gold gradient background. "立即咨询" button + phone number.

**Step 6: Assemble Home page and verify**

Run: `npm run dev`, check desktop and mobile layouts.

**Step 7: Commit**

```bash
git add src/pages/Home.tsx src/components/
git commit -m "feat: add Home page with hero, services, stats, CTA sections"
```

---

### Task 5: Service Pages (Patent, Trademark, Copyright, Legal)

**Files:**
- Create: `src/pages/Patent.tsx`
- Create: `src/pages/Trademark.tsx`
- Create: `src/pages/Copyright.tsx`
- Create: `src/pages/Legal.tsx`
- Create: `src/components/PageBanner.tsx`
- Create: `src/components/ServiceTypeGrid.tsx`
- Create: `src/components/ProcessFlow.tsx`
- Create: `src/components/FAQAccordion.tsx`

**Step 1: Build reusable PageBanner**

Navy gradient banner with page title + breadcrumb. Reused across all inner pages.

**Step 2: Build ServiceTypeGrid**

Card grid showing service sub-types. Each card: icon + title + description.

**Step 3: Build ProcessFlow**

Horizontal step indicator (desktop) / vertical timeline (mobile). Shows numbered steps with connecting lines.

**Step 4: Build FAQAccordion**

Expandable Q&A list. Click question to toggle answer. Only one open at a time.

**Step 5: Compose 4 service pages**

Each page: `<PageBanner>` + intro text + `<ServiceTypeGrid>` + `<ProcessFlow>` + `<FAQAccordion>`. Data sourced from `src/data/services.ts`.

**Step 6: Verify all 4 pages render correctly**

Run: `npm run dev`, navigate to each service page, check mobile.

**Step 7: Commit**

```bash
git add src/pages/ src/components/
git commit -m "feat: add Patent, Trademark, Copyright, Legal service pages"
```

---

### Task 6: About Page

**Files:**
- Create: `src/pages/About.tsx`
- Create: `src/components/Timeline.tsx`

**Step 1: Build About page sections**

Sections: 公司简介 (text + image placeholder) | 团队介绍 (team member cards with photo placeholder, name, title) | 企业资质 (list/grid of certifications) | 发展历程 (timeline component).

**Step 2: Build Timeline component**

Vertical timeline with alternating left/right items (desktop), all-left (mobile). Year marker + event description.

**Step 3: Verify and commit**

```bash
git add src/pages/About.tsx src/components/Timeline.tsx
git commit -m "feat: add About page with company intro, team, and timeline"
```

---

### Task 7: Contact Page

**Files:**
- Create: `src/pages/Contact.tsx`

**Step 1: Build Contact page**

Left column: contact info cards (phone, email, address, business hours).
Right column: contact form (name, phone, email, message, submit button).
Form is front-end only (no backend) — shows success toast on submit.

**Step 2: Add map embed placeholder**

Placeholder div styled as a map area. Can be replaced with actual map embed later.

**Step 3: Verify and commit**

```bash
git add src/pages/Contact.tsx
git commit -m "feat: add Contact page with form and contact info"
```

---

### Task 8: Responsive Polish + SEO

**Files:**
- Modify: `index.html` (meta tags)
- Modify: various components for responsive tweaks

**Step 1: Add SEO meta tags to index.html**

Title: "知盾知识产权 - 专利商标版权代理". Description, keywords, Open Graph tags.

**Step 2: Responsive testing and fixes**

Test all pages at 375px (mobile), 768px (tablet), 1280px (desktop). Fix any layout issues.

**Step 3: Add smooth scroll and page transitions**

Smooth scroll behavior. Subtle fade-in on section load (CSS only).

**Step 4: Build verification**

Run: `npm run build`
Expected: Successful build in `dist/` folder.

**Step 5: Final commit**

```bash
git add .
git commit -m "feat: add SEO meta tags, responsive polish, and build verification"
```

---

## Summary

| Task | Description | Estimated Steps |
|------|-------------|-----------------|
| 1 | Project Scaffolding | 6 |
| 2 | Static Data Layer | 4 |
| 3 | Layout (Header/Footer) | 6 |
| 4 | Home Page | 7 |
| 5 | Service Pages (x4) | 7 |
| 6 | About Page | 3 |
| 7 | Contact Page | 3 |
| 8 | Responsive + SEO | 5 |
| **Total** | | **41 steps** |
