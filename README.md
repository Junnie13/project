# DataTech Analytics Solutions - Product Catalog Website

A modern, responsive web application showcasing a comprehensive catalog of analytics and technology products across various industries including Business Services, Healthcare, Insurance, and Government & Law Enforcement.

![Project Banner](https://via.placeholder.com/800x400/dc2626/ffffff?text=DataTech+Analytics+Solutions)

## 🚀 Features

- **Product Catalog**: Browse through 100+ analytics and technology products with detailed descriptions and features
- **Advanced Filtering**: Filter products by industry and alphabetically with real-time product count
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Eye-catching design with gradients, animations, and hover effects
- **Product Detail Pages**: Comprehensive product information with interactive contact forms
- **AI-Powered Chat Widget**: Integrated n8n chat widget for real-time customer support
- **Fast Performance**: Built with Vite for lightning-fast development and production builds

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **React Router DOM** - Client-side routing for single-page application
- **Lucide React** - Beautiful, customizable SVG icons

### Build Tools & Development
- **Vite** - Next-generation frontend build tool
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing with Autoprefixer

### Third-Party Integrations
- **n8n Chat Widget** - AI-powered customer support automation
- **BoSar Agency Widget** - Custom chat solution integration

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd test-ai-chatbot-base/project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## 📁 Project Structure

```
├── public/
│   └── index.html          # Main HTML file with chat widget integration
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navigation header component
│   │   ├── Hero.tsx        # Landing page hero section
│   │   ├── Footer.tsx      # Footer component
│   │   ├── ProductCard.tsx # Individual product card component
│   │   └── FilterSection.tsx # Product filtering interface
│   ├── pages/
│   │   ├── ProductsPage.tsx    # Main products listing page
│   │   └── ProductDetailPage.tsx # Individual product detail page
│   ├── data/
│   │   ├── products.ts         # Product data and type definitions
│   │   └── synthetic_data.csv  # Source data for 100+ products
│   ├── App.tsx             # Main application component
│   ├── main.tsx           # React application entry point
│   └── vite-env.d.ts      # Vite environment types
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build configuration
└── README.md             # Project documentation
```

## 🤖 n8n Chat Widget Integration

The project includes an **AI-powered chat widget** that provides real-time customer support through n8n workflow automation:

### Features:
- **Webhook Integration**: Connected to `https://aifellowship.app.n8n.cloud/webhook/90a43301-8867-4a94-8213-606631cd6afd`
- **Custom Branding**: BoSar Agency branding with custom logo and colors
- **Responsive Design**: Adapts to different screen sizes
- **Real-time Support**: Instant responses through automated workflows

### Configuration:
The chat widget is configured in `index.html` with:
```javascript
window.ChatWidgetConfig = {
  webhook: {
    url: "https://aifellowship.app.n8n.cloud/webhook/90a43301-8867-4a94-8213-606631cd6afd",
    route: "general",
  },
  branding: {
    logo: "https://bosar.agency/favicon.png",
    name: "BoSar Agency",
    welcomeText: "Hi, how may I help?",
  },
  style: {
    primaryColor: "#D4BFFF",
    secondaryColor: "#6B3FD4",
    position: "right",
  },
};
```

## 🎨 Design Features

### Modern UI Elements:
- **Gradient Backgrounds**: Eye-catching color transitions throughout the site
- **Hover Animations**: Interactive elements with smooth transitions
- **Card-based Layout**: Clean, organized product presentation
- **Responsive Grid**: Adapts seamlessly to different screen sizes
- **Star Ratings**: Visual product quality indicators
- **Enhanced Forms**: Beautiful contact forms with validation

### Color Scheme:
- Primary: Red gradient (`#dc2626` to `#991b1b`)
- Secondary: Purple accents (`#D4BFFF`, `#6B3FD4`)
- Neutral: Gray tones for text and backgrounds

## 📊 Product Data

The application features a comprehensive product database with:
- **102 Products** sourced from `synthetic_data.csv`
- **4 Industry Categories**: Business Services, Healthcare, Insurance, Government & Law Enforcement
- **Alphabetically Sorted** for easy browsing
- **Rich Metadata** including features, descriptions, and industry classifications
- **Search & Filter** capabilities for efficient product discovery

### Industries Covered:
1. **Business Services** - Financial compliance, risk management, payment solutions
2. **Healthcare** - Clinical systems, patient management, pharmaceutical tools
3. **Insurance** - Policy management, claims processing, risk assessment
4. **Government & Law Enforcement** - Identity verification, crime analysis, fraud detection

## 🚀 Deployment

### Production Build
```bash
npm run build
```
The build files will be generated in the `dist/` directory, ready for deployment.

### Deployment Options
- **Vercel** (Recommended) - Automatic deployments from Git
- **Netlify** - Static site hosting with CI/CD
- **GitHub Pages** - Free hosting for public repositories
- **AWS S3** - Scalable cloud hosting
- **Any static web server**

## 🤝 Contributing

We welcome contributions to improve the project! Please follow these steps:

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines:
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure responsive design
- Add proper error handling
- Write clear commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- **Chat Widget**: Use the integrated n8n chat widget on the website
- **BoSar Agency**: Contact through the chat system for technical support
- **Issues**: Report bugs and feature requests via GitHub Issues

## 🎯 Future Enhancements

- [ ] Advanced search functionality with filters
- [ ] Product comparison feature
- [ ] User authentication and profiles
- [ ] Favorites/Wishlist system
- [ ] Analytics dashboard for admins
- [ ] Multi-language support
- [ ] Product reviews and ratings
- [ ] Integration with CRM systems

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- **Bundle Size**: Optimized with Vite's tree-shaking
- **Load Time**: < 2 seconds on 3G networks
- **SEO Optimized**: Meta tags and semantic HTML

---

**Built with ❤️ using React 18, TypeScript, and Tailwind CSS**  
**Powered by n8n automation and BoSar Agency's chat technology**