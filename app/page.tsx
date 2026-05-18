import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Heritage } from '@/components/sections/Heritage';
import { Menu } from '@/components/sections/Menu';
import { Gallery } from '@/components/sections/Gallery';
import { Reviews } from '@/components/sections/Reviews';
import { Reserve } from '@/components/sections/Reserve';
import { Events } from '@/components/sections/Events';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Heritage />
        <Menu />
        <Gallery />
        <Reviews />
        <Reserve />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
