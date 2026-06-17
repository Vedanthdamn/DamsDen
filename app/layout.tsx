import type { Metadata } from 'next';
import { Cormorant_Garamond, Cinzel, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SoundProvider } from '@/context/SoundContext';
import { CurtainProvider } from '@/context/CurtainContext';
import Navbar from '@/components/layout/Navbar';
import CurtainTransition from '@/components/layout/CurtainTransition';
import Footer from '@/components/layout/Footer';
import DigitalTwin from '@/components/ui/DigitalTwin';
import CursorGlow from '@/components/ui/CursorGlow';
import StarField from '@/components/ui/StarField';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-label',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vedanth Dama',
  description: 'Engineer · Builder · Student of Systems',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVars = [
    cormorant.variable,
    cinzel.variable,
    inter.variable,
    jetbrainsMono.variable,
  ].join(' ');

  return (
    <html lang="en" className={fontVars}>
      <body className="bg-void text-silver noise">
        <SoundProvider>
          <CurtainProvider>
            <StarField />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <CurtainTransition />
            <DigitalTwin />
            <CursorGlow />
          </CurtainProvider>
        </SoundProvider>
      </body>
    </html>
  );
}
