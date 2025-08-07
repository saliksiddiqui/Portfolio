# 🚀 Salik's Portfolio - Modern Developer Portfolio

A stunning, fully responsive developer portfolio built with **React.js**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Features a modern design system, smooth animations, dark mode toggle, and clean architecture.

![Portfolio Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=Salik's+Portfolio+Preview)

## ✨ Features

- 🎨 **Modern Design System** - Custom color palette with HSL tokens
- 🌓 **Dark/Light Mode Toggle** - Seamless theme switching
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 🎯 **Performance Optimized** - Fast loading and smooth interactions
- 📧 **Contact Form** - EmailJS integration for direct messaging
- 🔧 **Clean Architecture** - Professional folder structure
- ♿ **Accessible** - ARIA labels and keyboard navigation
- 🔍 **SEO Optimized** - Meta tags and structured data

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Tools & Libraries
- **EmailJS** - Email service integration
- **React Router** - Client-side routing
- **ESLint** - Code linting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation with dark mode toggle
│   ├── Hero.jsx        # Hero section with animations
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Featured projects
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer with social links
├── contexts/           # React contexts
│   └── ThemeContext.jsx # Dark mode context
├── pages/              # Page components
│   ├── Index.jsx       # Main portfolio page
│   └── NotFound.jsx    # 404 page
├── assets/             # Static assets
├── styles/             # Additional styles
└── utils/              # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/salik/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎨 Design System

The portfolio uses a comprehensive design system with:

- **Color Palette**: Modern blue to purple gradient scheme
- **Typography**: Inter font family with JetBrains Mono for code
- **Spacing**: Consistent spacing scale
- **Animations**: Smooth transitions and micro-interactions
- **Components**: Reusable UI components with variants

### Color Tokens (HSL)

```css
/* Light Mode */
--primary: 236 72% 79%
--primary-glow: 248 100% 88%
--background: 0 0% 100%
--foreground: 240 10% 3.9%

/* Dark Mode */
--primary: 236 72% 79%
--background: 240 10% 3.9%
--foreground: 0 0% 98%
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🌓 Dark Mode Implementation

Dark mode is implemented using:

- React Context for state management
- CSS custom properties for theming
- Local storage for persistence
- Smooth transitions between themes

## 📧 Contact Form Setup

To enable the contact form with EmailJS:

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
2. **Create a service and template**
3. **Update the EmailJS configuration** in `src/components/Contact.jsx`:

```javascript
// Replace with your EmailJS credentials
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const USER_ID = 'your_user_id';
```

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your GitHub repository** to Netlify
2. **Set build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy automatically** on every push

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your hosting provider

## 🔧 Customization

### Personal Information

Update your personal information in:

- `src/components/Hero.jsx` - Name and tagline
- `src/components/About.jsx` - Bio and stats
- `src/components/Contact.jsx` - Contact details
- `src/components/Footer.jsx` - Social links

### Projects

Add your projects in `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description...',
    tech: ['React', 'Node.js'],
    github: 'https://github.com/your-repo',
    demo: 'https://your-demo.com'
  }
];
```

### Skills

Update your skills in `src/components/Skills.jsx`:

```javascript
const skills = [
  {
    name: 'Your Skill',
    icon: YourIcon,
    level: 85
  }
];
```

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with Vite
- **Loading Speed**: Fast with code splitting
- **SEO**: Optimized meta tags and structure

## 🔒 Security

- **No sensitive data** in frontend code
- **Environment variables** for API keys
- **HTTPS** recommended for production
- **Content Security Policy** headers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help:

- **Email**: salik@gmail.com
- **GitHub**: [Your GitHub Profile](https://github.com/salik)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/salik)

## 🙏 Acknowledgments

- **React Team** for the amazing library
- **Tailwind CSS** for the utility-first approach
- **Framer Motion** for smooth animations
- **Vite** for the fast build tool

---

**Made with ❤️ by Salik using React.js & Tailwind CSS**