const EventsContentView = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Events</h2>
      <div className="space-y-4">
        <div className="border-l-4 pl-4" style={{ borderLeftColor: '#9D3747' }}>
          <h3 className="text-xl font-semibold text-gray-900">
            Upcoming Event Title
          </h3>
          <p className="text-sm text-gray-600">Date: TBD</p>
          <p className="text-gray-700 mt-2">
            Description of the upcoming event...
          </p>
        </div>
      </div>
    </div>
  );
};
export default EventsContentView;
