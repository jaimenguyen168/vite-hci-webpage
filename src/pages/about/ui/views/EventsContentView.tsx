import Title from "@/components/Title.tsx";

const EventsContentView = () => {
  return (
    <div className="w-full mb-8 py-4">
      <Title title="Events" />
      <div className="space-y-4">
        <div className="border-l-4 pl-4" style={{ borderLeftColor: "#9D3747" }}>
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
