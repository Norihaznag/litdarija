// app/layout.js
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
export const metadata = {
  title: 'DarijaLearn - Learn new skills in Moroccan Darija',
  description: 'High-quality courses in finance, web development, construction, and more - all in your language!',
  keywords: 'Darija, Moroccan, education, online courses, learning, finance, web development, construction',
  authors: [{ name: 'DarijaLearn Team' }],
  openGraph: {
    title: 'DarijaLearn - Learn new skills in Moroccan Darija',
    description: 'High-quality courses in finance, web development, construction, and more - all in your language!',
    url: 'https://darijalearn.com',
    siteName: 'DarijaLearn',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DarijaLearn - Learn new skills in Moroccan Darija',
    description: 'High-quality courses in finance, web development, construction, and more - all in your language!',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </head>
      <body>
         <Header />
        {children}
              <Footer />

      </body>
    </html>
  );
}