import './globals.css';

export const metadata = {
  title: 'AI SaaS Dashboard',
  description: 'Orange light theme AI dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
