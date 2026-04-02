import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Guide from '@/components/Guide';
import VisitorTestimonials from '@/components/VisitorTestimonials';
import MapEmbed from '@/components/MapEmbed';
import Sources from '@/components/Sources';

export default function BlogPage1() {
  return (
    <>
      <Hero />
      <Intro />
      <Gallery />
      <Reviews />
      <Guide />
      <VisitorTestimonials />
      <MapEmbed />
      <Sources />
    </>
  );
}