import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PersonCard from "@/pages/people/ui/components/PersonCard.tsx";
import RoleLegend from "@/pages/people/ui/components/RoleLegend.tsx";
import type { Person } from "@/pages/people/types.ts";
import Title from "@/components/Title.tsx";

interface AlumniViewProps {
  alumniMembers: Person[];
}

const AlumniView = ({ alumniMembers }: AlumniViewProps) => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const filteredAlumni =
    selectedRoles.length > 0
      ? alumniMembers.filter((person: Person) =>
          person.roles?.some((role: string) => selectedRoles.includes(role)),
        )
      : alumniMembers;

  const handleSelectedRolesChange = (roles: string[]) => {
    setSelectedRoles(roles);
  };

  return (
    <div className="w-full mb-8">
      <Title title="Alumni" />

      <RoleLegend onSelectedRolesChange={handleSelectedRolesChange} />

      <AnimatePresence mode="wait">
        {filteredAlumni.length > 0 ? (
          <motion.div
            key="alumni-grid"
            className="grid grid-cols-2 xl:grid-cols-3 gap-6 mb-16 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence>
              {filteredAlumni.map((person, index) => (
                <PersonCard
                  key={index}
                  person={person as unknown as Person}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : selectedRoles.length > 0 ? (
          <motion.div
            key="empty-state"
            className="text-center py-16 mt-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xl text-gray-600 font-medium">
              No alumni found for the selected roles.
            </p>
            <p className="text-gray-500 mt-2">
              Try selecting different roles or clear filters to see all alumni.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default AlumniView;
