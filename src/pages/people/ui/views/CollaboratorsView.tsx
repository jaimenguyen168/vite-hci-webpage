import { AnimatePresence, motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import type { Person } from "@/pages/people/types.ts";
import { getInitials } from "@/lib/utils.ts";
import Title from "@/components/Title.tsx";

function CollaboratorCard({
  person,
  index = 0,
}: {
  person: Person;
  index?: number;
}) {
  const handleCardClick = () => {
    if (person.url) {
      window.open(person.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
      className="w-full h-full"
    >
      <Card
        className={`h-full text-center transition-shadow ${
          person.url ? "cursor-pointer hover:bg-accent/50" : ""
        }`}
        onClick={handleCardClick}
      >
        <CardHeader>
          <div className="flex justify-center">
            <Avatar className="size-20 lg:size-32">
              <AvatarFallback className="text-4xl font-bold bg-gray-200 text-gray-600">
                {getInitials(person.name)}
              </AvatarFallback>
            </Avatar>
          </div>

          <h3 className="text-base lg:text-lg font-bold">{person.name}</h3>

          {person.affiliation && (
            <p className="text-muted-foreground text-sm lg:text-base">
              {person.affiliation}
            </p>
          )}
        </CardHeader>

        {/*<CardContent className="-mt-2">*/}
        {/*  <div className="space-y-1">*/}
        {/*    {person.start && (*/}
        {/*      <p className="text-muted-foreground text-xs lg:text-sm">*/}
        {/*        {`${person.start}${person.end ? ` - ${person.end}` : " - Present"}`}*/}
        {/*      </p>*/}
        {/*    )}*/}
        {/*  </div>*/}
        {/*</CardContent>*/}
      </Card>
    </motion.div>
  );
}

interface CollaboratorsViewProps {
  collaborators: Person[];
}

const CollaboratorsView = ({ collaborators }: CollaboratorsViewProps) => {
  return (
    <div className="w-full mb-8">
      <Title title="Collaborators" />

      {collaborators.length > 0 ? (
        <motion.div
          className="grid grid-cols-2 xl:grid-cols-3 gap-6 mb-16 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {collaborators.map((person, index) => (
              <CollaboratorCard
                key={index}
                person={person as unknown as Person}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          className="text-center py-16 mt-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xl text-gray-600 font-medium">
            No collaborators found.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default CollaboratorsView;
