import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Guide from '@/components/Guide';
import BlogPreview from '@/components/BlogPreview';
import MapEmbed from '@/components/MapEmbed';
import Sources from '@/components/Sources';
import TripAdBanner from '@/components/TripAdBanner';
import RecommendedTours from '@/components/RecommendedTours';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      
      {/* 第比利斯携程首页静态广告横幅 */}
      <TripAdBanner id="SB15266995_home" type="home" />
      
      <Gallery />
      <Reviews />
      <Guide />
      
      {/* 第比利斯当地玩乐静态广告横幅 */}
      <TripAdBanner id="SB15266995_tours" type="tours" />
      
      <BlogPreview />
      
      {/* 第比利斯酒店预订静态广告横幅 */}
      <TripAdBanner id="SB15266995_hotels" type="hotels" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <RecommendedTours />
      </div>

      <MapEmbed />
      <Sources />
    </>
  );
}
