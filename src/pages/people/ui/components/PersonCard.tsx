import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { roleColors, roleLabels } from "@/pages/people/constants/roleConfig.ts";
import type { Person } from "@/pages/people/types.ts";
import { getImagePath, getInitials } from "@/lib/utils.ts";

function PersonCard({ person, index = 0 }: { person: Person; index?: number }) {
  const [hoveredRoleIndex, setHoveredRoleIndex] = useState<number | null>(null);

  const roles = Array.isArray(person.roles) ? person.roles : [];

  const handleCardClick = () => {
    if (person.url) {
      window.open(person.url, "_blank", "noopener,noreferrer");
    }
  };

  console.log("Image", person.img);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: -20 }}
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
              <AvatarImage
                src={getImagePath(person.img)}
                alt={person.name}
                className="object-cover"
              />
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

        <CardContent className="-mt-2">
          {/* Role indicators */}
          <div className="flex justify-center items-center gap-2 mb-3 flex-wrap">
            <AnimatePresence>
              {roles.map((role, index) => {
                const isExpanded = hoveredRoleIndex === index;
                return (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      cursor-pointer rounded-full
                      flex items-center justify-center overflow-hidden
                      ${isExpanded ? "px-4 h-6 lg:h-8 min-w-[2rem]" : "size-6 lg:size-8"}
                    `}
                    style={{ backgroundColor: roleColors[role] || "#6b7280" }}
                    title={!isExpanded ? roleLabels[role] || role : undefined}
                    onMouseEnter={() => setHoveredRoleIndex(index)}
                    onMouseLeave={() => setHoveredRoleIndex(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <motion.span
                      className="text-white text-xs font-medium whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {roleLabels[role] || role}
                    </motion.span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/*/!* Additional info *!/*/}
          {/*<div className="space-y-1">*/}
          {/*  {person.start && (*/}
          {/*    <p className="text-muted-foreground text-xs lg:text-sm">*/}
          {/*      {person.status === "alumni" && !person.end*/}
          {/*        ? person.start*/}
          {/*        : `${person.start}${person.end ? ` - ${person.end}` : " - Present"}`}*/}
          {/*    </p>*/}
          {/*  )}*/}

          {/*  {person.now && person.status === "alumni" && (*/}
          {/*    <p className="text-muted-foreground text-sm">Now: {person.now}</p>*/}
          {/*  )}*/}
          {/*</div>*/}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default PersonCard;
