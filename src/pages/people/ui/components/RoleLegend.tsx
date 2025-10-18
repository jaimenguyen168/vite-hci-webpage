import { useState } from "react";
import { X } from "lucide-react";
import { roleColors, roleLabels } from "@/pages/people/constants/roleConfig.ts";
import { Button } from "@/components/ui/button";

interface RoleLegendProps {
  onSelectedRolesChange?: (roles: string[]) => void;
}

function RoleLegend({ onSelectedRolesChange }: RoleLegendProps) {
  const [expandedRoles, setExpandedRoles] = useState<string[]>([]);

  const handleRoleClick = (roleKey: string) => {
    let newExpandedRoles: string[];

    if (expandedRoles.includes(roleKey)) {
      // Remove role if it's already expanded
      newExpandedRoles = expandedRoles.filter((role) => role !== roleKey);
    } else {
      // Add role if it's not expanded
      newExpandedRoles = [...expandedRoles, roleKey];
    }

    setExpandedRoles(newExpandedRoles);
    onSelectedRolesChange?.(newExpandedRoles);
  };

  const handleCloseAll = () => {
    setExpandedRoles([]);
    onSelectedRolesChange?.([]);
  };

  const hasExpandedRoles = expandedRoles.length > 0;

  return (
    <div className="flex justify-end">
      <div className="p-3">
        <div className="flex flex-wrap gap-3 items-center">
          {/* Close button - only show when any roles are expanded */}
          {hasExpandedRoles && (
            <Button
              onClick={handleCloseAll}
              variant="outline"
              className="size-6 !p-0 !bg-transparent !rounded-full !border-2 !border-gray-300"
            >
              <X className="w-3 h-3 text-gray-400" />
            </Button>
          )}

          {Object.entries(roleLabels).map(([key, label]) => {
            const isExpanded = expandedRoles.includes(key);
            return (
              <div
                key={key}
                className={`
                  cursor-pointer transition-all duration-200 ease-in-out rounded-full
                  flex items-center overflow-hidden
                  hover:scale-105 hover:shadow-lg
                  ${isExpanded ? "px-3 h-6 min-w-[2rem] gap-1.5" : "h-6 gap-1.5"}
                `}
                style={{
                  backgroundColor: isExpanded ? roleColors[key] : "transparent",
                }}
                onClick={() => handleRoleClick(key)}
              >
                {!isExpanded && (
                  <div
                    className="size-6 rounded-full flex-shrink-0"
                    style={{ backgroundColor: roleColors[key] }}
                  />
                )}
                <span
                  className={`
                    text-xs font-medium whitespace-nowrap
                    transition-all duration-300 ease-in-out
                    ${
                      isExpanded
                        ? "opacity-100 transform scale-100 text-white max-w-none"
                        : "opacity-100 transform scale-100 text-gray-600 max-w-0 overflow-hidden"
                    }
                  `}
                  style={{
                    width: isExpanded ? "auto" : "0",
                    marginLeft: isExpanded ? "0" : "-6px",
                  }}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RoleLegend;
