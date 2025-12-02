import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PersonCard from "@/pages/people/ui/components/PersonCard.tsx";
import RoleLegend from "@/pages/people/ui/components/RoleLegend.tsx";
import type { Person } from "@/pages/people/types.ts";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router-dom";
import { Title } from "@/components/customs/title.tsx";

interface CurrentMembersViewProps {
  activeMembers: Person[];
}

const CurrentMembersView = ({ activeMembers }: CurrentMembersViewProps) => {
  const navigate = useNavigate();
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const filteredMembers =
    selectedRoles.length > 0
      ? activeMembers.filter((person: Person) =>
          person.roles?.some((role: string) => selectedRoles.includes(role)),
        )
      : activeMembers;

  const handleSelectedRolesChange = (roles: string[]) => {
    setSelectedRoles(roles);
  };

  return (
    <article className="w-full mb-8">
      {/* Main heading with proper hierarchy */}
      <header>
        <Title title="Current Members" />
        <p className="sr-only">
          Our current research team includes {activeMembers.length} members
          across various roles and specializations.
        </p>
      </header>

      {/* Navigation/Filter section */}
      <nav aria-label="Filter members by role">
        <RoleLegend onSelectedRolesChange={handleSelectedRolesChange} />
      </nav>

      {/* Members grid section */}
      <section aria-label="Research team members">
        <AnimatePresence mode="wait">
          {filteredMembers.length > 0 ? (
            <motion.div
              key="members-grid"
              className="grid grid-cols-2 xl:grid-cols-3 gap-6 mb-16 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              role="list"
              aria-label={`${filteredMembers.length} team members`}
            >
              <AnimatePresence>
                {filteredMembers.map((person, index) => (
                  <div key={`${person.name}-${index}`} role="listitem">
                    <PersonCard
                      person={person as unknown as Person}
                      index={index}
                    />
                  </div>
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
              role="status"
              aria-live="polite"
            >
              <h2 className="text-xl text-gray-600 font-medium">
                No members found for the selected roles.
              </h2>
              <p className="text-gray-500 mt-2">
                Try selecting different roles or clear filters to see all
                members.
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>

      {/* Call-to-action section */}
      <section aria-labelledby="join-us-heading">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Card className="bg-gray-100 border-none shadow-sm rounded-[64px]">
            <CardContent className="px-12 py-3 text-center">
              <h2 id="join-us-heading" className="sr-only">
                Join Our Research Team
              </h2>
              <p className="text-xl leading-relaxed font-outfit text-gray-800 mb-6 max-w-4xl mx-auto">
                Meet our current members—students and researchers who bring
                creativity, curiosity, and collaboration to every project.
                Together, we explore ideas, share knowledge, and support one
                another's growth as we advance our lab's research and impact.
              </p>

              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/join")}
                className="px-8 py-3 text-base !bg-transparent font-medium rounded-full !border-2 !border-gray-600 text-gray-700 hover:!bg-gray-600 hover:!text-white hover:!border-gray-700 transition-colors"
                aria-describedby="join-description"
              >
                Apply to Join Us
              </Button>
              <p id="join-description" className="sr-only">
                Click to access our application form and join our research team
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </article>
  );
};

export default CurrentMembersView;
