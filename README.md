# VSS Website

A modern corporate website for an IT services company specializing in Dynamics 365, managed services, and custom software development.

## Features

- Modern, responsive design
- Dynamic animations using Framer Motion
- Mobile-friendly navigation
- Service showcase sections
- Contact and social media integration

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd vsswebsite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
vsswebsite/
├── app/
│   ├── components/
│   │   └── Navbar.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## Customization

- Update the color scheme in `tailwind.config.js`
- Modify the content in `app/page.tsx`
- Add new components in `app/components/`
- Update the navigation in `app/components/Navbar.tsx`

## Deployment

The site can be deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or AWS Amplify.

## License

This project is licensed under the MIT License. 