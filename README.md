# DataTech Analytics Solutions - Product Catalog Website

A modern, responsive web application showcasing a comprehensive catalog of analytics and technology products across various industries including Business Services, Healthcare, Insurance, and Government & Law Enforcement.

![Project Banner](https://via.placeholder.com/800x400/dc2626/ffffff?text=DataTech+Analytics+Solutions)

## Features

- Product Catalog: Browse products with descriptions and features.
- Advanced Filtering: Filter products by industry and alphabetically.
- Responsive Design: Optimized for various devices.
- Modern UI/UX: Engaging design with animations.
- Product Detail Pages: Detailed product information.
- AI-Powered Chat Widget: Integrated n8n chat widget for customer support.

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- Vite
- n8n Chat Widget

## Getting Started

### Prerequisites

- Node.js (version 16.0 or higher)
- npm (version 7.0 or higher) or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd test-ai-chatbot-base/project
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## n8n Chat Widget Integration

The n8n chat widget provides AI-powered customer support directly on the website, enhancing user experience by offering instant assistance. It is configured in [`index.html`](index.html) and connected to an n8n workflow automation via a specified webhook URL.

## Deployment

This project is deployed through Vercel.

### Build for Production
```bash
npm run build
```

The build files will be generated in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Use the integrated chat widget on the website
- Contact BoSar Agency through the chat system

---

Built with React, TypeScript, and Tailwind CSS