export default function TripAdBanner({ id }: { id?: string }) {
  return (
    <div className="w-full flex justify-center items-center py-6 px-4 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <iframe 
        src="https://www.trip.com/partners/ad/SB15266995?Allianceid=7974128&SID=300882170&trip_sub1=%E7%AC%AC%E6%AF%94%E5%88%A9%E6%96%AF" 
        style={{ width: '728px', height: '90px', border: 'none', maxWidth: '100%' }} 
        frameBorder="0" 
        scrolling="no" 
        id={id || "SB15266995"}
        title="Trip.com Advertisement"
      />
    </div>
  );
}