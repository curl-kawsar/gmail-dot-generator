# 📧 Gmail Dot Generator

A modern, responsive web application that generates all possible dot variations of your Gmail address. Built with Next.js 15, React 18, and Tailwind CSS.

![Gmail Dot Generator](https://img.shields.io/badge/Gmail-Dot%20Generator-blue?style=for-the-badge&logo=gmail)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwindcss)

## ✨ Features

### 🎯 Core Functionality
- **Generate All Variants**: Creates all possible dot combinations for any Gmail username
- **Real-time Validation**: Instant feedback for Gmail address format
- **Smart Generation**: Optimized performance for different username lengths
- **Copy to Clipboard**: Individual variant copying or bulk copy all variants
- **Download as File**: Export all variants as a text file

### 🎨 User Experience
- **Modern UI**: Clean, Gmail-inspired gradient design
- **Smooth Animations**: Optimized loading and result animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Toast Notifications**: User-friendly feedback for all actions
- **Keyboard Shortcuts**: Press Enter to generate variants
- **Accessibility**: Screen reader friendly with proper ARIA labels

### 🔧 Technical Features
- **Performance Optimized**: Instant generation for short usernames
- **Clean Architecture**: Modular component structure
- **Type Safety**: JSDoc annotations for better development experience
- **SEO Optimized**: Proper meta tags and structured data

## 🚀 Live Demo

Visit the live application: [Gmail Dot Generator](https://gmail-dot-generator.vercel.app)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 18 with Hooks
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Shadcn UI library
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/curl-kawsar/gmail-dot-generator.git
   cd gmail-dot-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 Usage

1. **Enter Gmail Address**: Type any Gmail address (e.g., `kawsar@gmail.com`)
2. **Generate Variants**: Click the "Generate Variants" button or press Enter
3. **Copy Variants**: Use individual copy buttons or "Copy All" for bulk copying
4. **Download**: Export all variants as a text file for later use

### Example Output
For `kawsar@gmail.com`, the generator creates:
- `kawsar@gmail.com`
- `k.awsar@gmail.com`
- `ka.wsar@gmail.com`
- `kaw.sar@gmail.com`
- `k.a.wsar@gmail.com`
- `k.aw.sar@gmail.com`
- `ka.w.sar@gmail.com`
- `k.a.w.sar@gmail.com`

## 🧠 How It Works

Gmail ignores dots (periods) in the username part of email addresses. This means all these variants deliver to the same inbox:
- `username@gmail.com`
- `user.name@gmail.com`
- `u.s.e.r.n.a.m.e@gmail.com`

This tool generates all possible combinations using a binary algorithm that determines dot placement positions.

## 📁 Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── help/           # Help documentation
│   ├── globals.css     # Global styles and animations
│   ├── layout.jsx      # Root layout with navbar/footer
│   └── page.jsx        # Homepage
├── components/
│   ├── shared/
│   │   ├── navbar/     # Navigation component
│   │   └── footer/     # Footer component
│   ├── ui/             # Reusable UI components
│   └── GmailDotGenerator.jsx  # Main generator component
└── lib/
    ├── gmailUtils.js   # Core utility functions
    └── utils.js        # General utilities
```

## 🎨 Customization

### Animations
Modify animation timings in `src/app/globals.css`:
```css
.animate-shimmer {
  animation: shimmer 2s infinite;
}
```

### Colors
Update the gradient colors in `tailwind.config.mjs` or component files.

### Performance
Adjust generation delays in `src/components/GmailDotGenerator.jsx`:
```javascript
const shouldShowLoading = username.length > 4;
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Gmail for the dot-ignoring feature that inspired this tool
- [Shadcn UI](https://ui.shadcn.com/) for the beautiful component library
- [Lucide](https://lucide.dev/) for the clean icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the [Help page](https://gmail-dot-generator.vercel.app/help) for usage instructions
- Visit the [About page](https://gmail-dot-generator.vercel.app/about) for more information

---

**Made with ❤️ for the developer community**
