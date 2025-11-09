import { useState } from "react";
import { X } from "lucide-react";
import { roleColors, roleLabels } from "@/pages/people/constants/roleConfig.ts";
import { Button } from "@/components/ui/button";

interface RoleLegendProps {
  onSelectedRolesChange?: (roles: string[]) => void;
}

function RoleLegend({ onSelectedRolesChange }: RoleLegendProps) {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const handleRoleClick = (roleKey: string) => {
    let newSelectedRoles: string[];

    if (selectedRoles.includes(roleKey)) {
      // Remove role if it's already selected
      newSelectedRoles = selectedRoles.filter((role) => role !== roleKey);
    } else {
      // Add role if it's not selected
      newSelectedRoles = [...selectedRoles, roleKey];
    }

    setSelectedRoles(newSelectedRoles);
    onSelectedRolesChange?.(newSelectedRoles);
  };

  const handleClearAll = () => {
    setSelectedRoles([]);
    onSelectedRolesChange?.([]);
  };

  const hasSelectedRoles = selectedRoles.length > 0;

  return (
    <div className="flex justify-center lg:justify-end">
      <div className="p-3 w-full lg:w-auto">
        {/* Mobile: Grid layout that fits container */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
            {Object.entries(roleLabels).map(([key, label]) => {
              const isSelected = selectedRoles.includes(key);
              return (
                <Button
                  key={key}
                  className={`
                    rounded-full !text-sm text-center
                    transition-all duration-200 ease-in-out
                    border-2 hover:scale-105
                    ${
                      isSelected
                        ? "text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }
                  `}
                  style={{
                    backgroundColor: isSelected ? roleColors[key] : "white",
                    borderColor: roleColors[key],
                  }}
                  onClick={() => handleRoleClick(key)}
                >
                  {label}
                </Button>
              );
            })}
            {/* Clear button for mobile - centered below */}
            {hasSelectedRoles && (
              <Button
                onClick={handleClearAll}
                variant="outline"
                className="px-4 flex-1 !border-gray-300 hover:!bg-gray-50 !rounded-full !text-sm !bg-white text-center hover:scale-105"
              >
                <X className="size-4" />
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Desktop: Regular flex layout */}
        <div className="hidden lg:flex lg:flex-wrap lg:gap-3 lg:items-center">
          {Object.entries(roleLabels).map(([key, label]) => {
            const isSelected = selectedRoles.includes(key);
            return (
              <Button
                key={key}
                className={`
                  px-4 rounded-full !text-base font-medium
                  transition-all duration-200 ease-in-out
                  border-2 hover:scale-105 hover:shadow-md
                  ${
                    isSelected
                      ? "text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }
                `}
                style={{
                  backgroundColor: isSelected ? roleColors[key] : "white",
                  borderColor: roleColors[key],
                }}
                onClick={() => handleRoleClick(key)}
              >
                {label}
              </Button>
            );
          })}

          {hasSelectedRoles && (
            <Button
              onClick={handleClearAll}
              variant="outline"
              className="size-6 !p-0 !bg-transparent !rounded-full !border-2 !border-gray-300 hover:!bg-gray-100"
            >
              <X className="w-3 h-3 text-gray-400" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RoleLegend;
