# 🚀 Karan Patel - Salesforce Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live-karanpatel.live-00D9FF?style=for-the-badge&logo=netlify)](https://karanpatel.live/?utm_source=github&utm_medium=readme&utm_campaign=portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/patelkaran0104)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/PatelKaran0104)

> A bold, vibrant portfolio showcasing Salesforce development expertise with a **Neobrutalism design aesthetic**.

---

## 🌟 **Live Site**

**🔗 [karanpatel.live](https://karanpatel.live/?utm_source=github&utm_medium=readme&utm_campaign=portfolio)**

Experience the portfolio in action - featuring bold borders, heavy shadows, vibrant colors, and playful rotations that define the neobrutalism style!

---

## 🎨 **Design Philosophy**

This portfolio embraces **Neobrutalism** - a modern design trend characterized by:

- ✨ **Bold Black Borders** (4-6px) on every element
- 🎭 **Heavy Shadows** (8-16px offset) for depth
- 🌈 **Vibrant Colors** (Cyan, Yellow, Rose, Orange, Emerald)
- 🔄 **Playful Rotations** (-2° to 3°) for dynamic feel
- 💪 **High Contrast** for maximum impact
- 🎯 **No Gradients or Blur** - pure, raw aesthetics

---

## 🛠️ **Tech Stack**

### **Frontend**
- ⚛️ **React 18.3.1** - Component-based UI
- 📘 **TypeScript 5.5.3** - Type safety
- ⚡ **Vite 5.4.2** - Lightning-fast build tool
- 🎨 **Tailwind CSS 3.4.1** - Utility-first styling

### **Icons & Assets**
- 🎯 **Lucide React 0.344.0** - Beautiful icon library
- 📸 **Custom Profile Image** - Professional headshot

### **Features**
- 📧 **EmailJS Integration** - Contact form with email notifications
- 📊 **Google Analytics** - Traffic monitoring
- 🔍 **SEO Optimized** - Meta tags, structured data, sitemap
- 📱 **Fully Responsive** - Mobile, tablet, desktop

### **Deployment**
- 🌐 **Netlify** - Continuous deployment from GitHub
- 🔒 **SSL/HTTPS** - Secure connection
- 🌍 **Custom Domain** - karanpatel.live

---

## 📂 **Project Structure**

```
neobrutalism-portfolio/
├── public/
│   ├── karan.jpg                    # Profile image
│   ├── icons8-resume-website-*.png  # Favicons
│   ├── robots.txt                   # SEO crawling rules
│   └── sitemap.xml                  # Site structure
├── src/
│   ├── components/
│   │   ├── About.tsx               # About section with stats
│   │   ├── Contact.tsx             # Contact form with EmailJS
│   │   ├── Footer.tsx              # Footer with social links
│   │   ├── Header.tsx              # Navigation header
│   │   ├── Hero.tsx                # Landing section
│   │   ├── Portfolio.tsx           # Projects & certifications
│   │   └── Services.tsx            # Expertise showcase
│   ├── hooks/
│   │   └── useScrollAnimation.ts   # Scroll animation hook
│   ├── App.tsx                     # Main app component
│   ├── index.css                   # Global styles
│   └── main.tsx                    # App entry point
├── .env                            # Environment variables (not in git)
├── .env.example                    # Example env file
├── netlify.toml                    # Netlify configuration
├── tailwind.config.js              # Tailwind CSS config
├── tsconfig.json                   # TypeScript config
├── vite.config.ts                  # Vite configuration
└── package.json                    # Dependencies
```

---

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/PatelKaran0104/neobrutalism-portfolio.git
   cd neobrutalism-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📧 **Contact Form Setup**

The portfolio uses **EmailJS** for serverless contact form handling.

### **Setup Steps:**

1. Create account at [EmailJS](https://dashboard.emailjs.com/sign-up)
2. Add email service (Gmail, Outlook, etc.)
3. Create email templates:
   - **Notification template** - Receives form submissions
   - **Auto-reply template** - Sends confirmation to users
4. Copy your credentials to `.env`
5. Test the form!


---

## 🎯 **Features**

### **🏠 Hero Section**
- Bold name display with neobrutalism styling
- Professional profile image
- Key skills highlighted
- Clear call-to-action buttons

### **💼 Services**
- Salesforce expertise showcase
- Custom development capabilities
- Integration solutions
- Process automation

### **👤 About**
- Professional stats (2+ years, 4+ projects, 4 certifications)
- Core values
- Mission statement
- Skills breakdown

### **📁 Portfolio**
- Project showcase with live demos
- Salesforce certifications
- Technical skills
- Achievement highlights

### **📬 Contact**
- Functional contact form
- Email integration
- Phone & location info
- Social media links
- Professional availability status

### **🦶 Footer**
- Quick navigation links
- Social media icons
- Service summary
- Copyright info

---

## 🎨 **Color Palette**

| Color | Hex | Usage |
|-------|-----|-------|
| 🟦 Cyan | `#67E8F9` | Primary accent, links |
| 🟨 Yellow | `#FDE047` | Highlights, CTAs |
| 🟥 Rose | `#FB7185` | Secondary accent |
| 🟧 Orange | `#FB923C` | Cards, sections |
| 🟩 Emerald | `#86EFAC` | Success states |
| ⬛ Black | `#000000` | Borders, text |
| ⬜ White | `#FFFFFF` | Backgrounds |

---

## 📱 **Responsive Design**

Fully responsive breakpoints:
- 📱 **Mobile:** < 640px
- 📱 **Tablet:** 640px - 1024px
- 💻 **Desktop:** > 1024px

Optimized for:
- iPhone & Android devices
- iPad & tablets
- Desktop monitors (1080p, 1440p, 4K)

---

## 🔍 **SEO Features**

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (social sharing)
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Geographic tags (Fulda, Germany)
- ✅ Google Analytics integration
- ✅ Semantic HTML
- ✅ Fast loading times (187KB bundle)

---

## 🏗️ **Build & Deployment**

### **Local Build**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

### **Deploy to Netlify**

**Automatic deployment from GitHub:**
1. Connect repository to Netlify
2. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Add environment variables
4. Deploy!

**Manual deployment:**
```bash
npm run build
netlify deploy --prod
```

---

## 📊 **Performance**

- ⚡ **Build Size:** 187.81 KB (gzipped: 56.85 KB)
- 🚀 **First Load:** < 1s on 4G
- 📱 **Mobile Score:** 95+ (Lighthouse)
- 💻 **Desktop Score:** 98+ (Lighthouse)
- ♿ **Accessibility:** WCAG 2.1 AA compliant

---

## 🤝 **Connect With Me**

- 🌐 **Portfolio:** [karanpatel.live](https://karanpatel.live/?utm_source=github&utm_medium=readme&utm_campaign=portfolio)
- 💼 **LinkedIn:** [@patelkaran0104](https://linkedin.com/in/patelkaran0104)
- 🐙 **GitHub:** [@PatelKaran0104](https://github.com/PatelKaran0104)
- 📧 **Email:** khpatel0104@gmail.com
- 📱 **Phone:** +49 1521 0894179
- 📍 **Location:** Fulda, Germany

---

## 📜 **License**

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 **Acknowledgments**

- **Design Inspiration:** Neobrutalism web design trend
- **Icons:** [Lucide React](https://lucide.dev)
- **Fonts:** System fonts (Arial Black, sans-serif)
- **Hosting:** [Netlify](https://netlify.com)
- **Email Service:** [EmailJS](https://emailjs.com)
- **Analytics:** [Google Analytics](https://analytics.google.com)

---

## 📝 **Changelog**

### **v1.0.0** (November 2025)
- 🎉 Initial release
- ✨ Neobrutalism design implementation
- 📧 EmailJS contact form integration
- 🔍 SEO optimization
- 📱 Mobile responsive design
- 🚀 Netlify deployment
- 🌐 Custom domain setup (karanpatel.live)
- 📊 Google Analytics integration

---

## 🐛 **Found a Bug?**

If you find a bug or have a suggestion, please [open an issue](https://github.com/PatelKaran0104/neobrutalism-portfolio/issues).

---

## 💡 **Want to Use This Template?**

Feel free to fork this repository and customize it for your own portfolio! Just remember to:

1. Update personal information (name, email, phone, etc.)
2. Replace profile image
3. Update project showcases
4. Set up your own EmailJS account
5. Configure your own Google Analytics
6. Update meta tags and SEO information

---

<div align="center">

### **⭐ Star this repo if you like it!**

**Built with ❤️ by Karan Patel**

[View Live Site →](https://karanpatel.live/?utm_source=github&utm_medium=readme&utm_campaign=portfolio)

</div>
