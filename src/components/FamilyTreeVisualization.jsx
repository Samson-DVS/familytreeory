import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const FamilyTreeVisualization = ({ familyMembers }) => {
  return (
    <div className="space-y-4">
      {familyMembers.map((member) => (
        <Card key={member.id}>
          <CardContent className="p-4">
            <h3 className="font-bold">{member.name}</h3>
            <p>Born: {member.dateOfBirth}</p>
            {member.dateOfDeath && <p>Died: {member.dateOfDeath}</p>}
            <p>Gender: {member.gender}</p>
            <p>Relationship: {member.relationship}</p>
            {member.notes && <p>Notes: {member.notes}</p>}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FamilyTreeVisualization;