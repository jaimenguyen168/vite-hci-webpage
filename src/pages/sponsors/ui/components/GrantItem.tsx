interface Grant {
  title: string;
  projectNumber: string;
  dateRange: string;
  amount: string;
}

interface GrantItemProps {
  grant: Grant;
  isCollapsed?: boolean;
}

const GrantItem = ({ grant, isCollapsed = true }: GrantItemProps) => {
  if (isCollapsed) {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-red-500 rounded flex-shrink-0"></div>
        <span className="text-sm font-medium text-gray-900 leading-relaxed">GRANT ONE: Name</span>
      </div>
    );
  }

  return (
    <div className="flex items-start space-x-3">
      <div className="w-2 h-2 bg-green-400 rounded flex-shrink-0 mt-2"></div>
      <div className="flex-1">
        <p className="text-sm text-gray-900 font-medium leading-relaxed">"{grant.title}"</p>
        <p className="text-sm text-green-600 font-medium leading-relaxed">({grant.projectNumber})</p>
        <p className="text-sm text-gray-600 leading-relaxed">{grant.dateRange}, {grant.amount}</p>
      </div>
    </div>
  );
};

export default GrantItem;
