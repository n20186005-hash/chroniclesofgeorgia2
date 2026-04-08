export default function TripAdBanner({ id, type = 'home' }: { id?: string, type?: 'home' | 'tours' | 'hotels' }) {
  const adConfig = {
    home: {
      src: "https://www.trip.com/partners/ad/SB15266995?Allianceid=7974128&SID=300882170&trip_sub1=%E7%BE%85%E8%A8%A5%E6%B2%B3%E5%8F%A3",
      defaultId: "SB15266995"
    },
    tours: {
      src: "https://www.trip.com/partners/ad/SB15271426?Allianceid=7974128&SID=300882170&trip_sub1=",
      defaultId: "SB15271426"
    },
    hotels: {
      src: "https://www.trip.com/partners/ad/SB15271076?Allianceid=7974128&SID=300882170&trip_sub1=%E7%AC%AC%E6%AF%94%E5%88%A9%E6%96%AF",
      defaultId: "SB15271076"
    }
  };

  const config = adConfig[type];

  return (
    <div className="w-full flex justify-center items-center py-6 px-4 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <iframe 
        src={config.src} 
        style={{ width: '728px', height: '90px', border: 'none', maxWidth: '100%' }} 
        frameBorder="0" 
        scrolling="no" 
        id={id || config.defaultId}
        title={`Trip.com ${type} Advertisement`}
      />
    </div>
  );
}