import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const FamilyMemberSidebar = ({ familyMembers, onSelectMember, selectedMember }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Family Members</h2>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex-1 px-2 py-4 space-y-1">
          {familyMembers.map((member) => (
            <Button
              key={member.id}
              className={`w-full justify-start ${selectedMember?.id === member.id ? 'bg-gray-100' : ''}`}
              variant="ghost"
              onClick={() => onSelectMember(member)}
            >
              {member.name}
            </Button>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t border-gray-200">
        <Button className="w-full" onClick={() => onSelectMember(null)}>
          Add New Member
        </Button>
      </div>
    </div>
  );
};

export default FamilyMemberSidebar;