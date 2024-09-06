import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FamilyMemberForm from '../components/FamilyMemberForm';
import FamilyTreeVisualization from '../components/FamilyTreeVisualization';
import RelationshipForm from '../components/RelationshipForm';

const FamilyTree = () => {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [relationships, setRelationships] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  const addFamilyMember = (member) => {
    setFamilyMembers([...familyMembers, { ...member, id: Date.now().toString() }]);
  };

  const updateFamilyMember = (updatedMember) => {
    setFamilyMembers(familyMembers.map(member => 
      member.id === updatedMember.id ? updatedMember : member
    ));
    setSelectedMember(null);
  };

  const deleteFamilyMember = (memberId) => {
    setFamilyMembers(familyMembers.filter(member => member.id !== memberId));
    setRelationships(relationships.filter(rel => rel.parent !== memberId && rel.child !== memberId));
    setSelectedMember(null);
  };

  const addRelationship = (relationship) => {
    setRelationships([...relationships, relationship]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Family Tree Creator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Add/Edit Family Member</h2>
            <FamilyMemberForm 
              onSubmit={selectedMember ? updateFamilyMember : addFamilyMember}
              initialData={selectedMember}
              onDelete={deleteFamilyMember}
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Add Relationship</h2>
            <RelationshipForm 
              familyMembers={familyMembers}
              onAddRelationship={addRelationship}
            />
          </CardContent>
        </Card>
      </div>
      <Card className="mt-4">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">Family Tree</h2>
          <FamilyTreeVisualization 
            familyMembers={familyMembers}
            relationships={relationships}
            onSelectMember={setSelectedMember}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default FamilyTree;