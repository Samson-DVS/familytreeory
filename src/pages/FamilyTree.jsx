import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FamilyMemberForm from '../components/FamilyMemberForm';
import FamilyTreeVisualization from '../components/FamilyTreeVisualization';
import FamilyMemberSidebar from '../components/FamilyMemberSidebar';
import RelationshipMapper from '../components/RelationshipMapper';

const FamilyTree = () => {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [relationships, setRelationships] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  const addFamilyMember = (member) => {
    setFamilyMembers([...familyMembers, { ...member, id: Date.now() }]);
  };

  const updateFamilyMember = (updatedMember) => {
    setFamilyMembers(familyMembers.map(member => 
      member.id === updatedMember.id ? updatedMember : member
    ));
  };

  const deleteFamilyMember = (memberId) => {
    setFamilyMembers(familyMembers.filter(member => member.id !== memberId));
    setRelationships(relationships.filter(rel => rel.person1 !== memberId && rel.person2 !== memberId));
    setSelectedMember(null);
  };

  const addRelationship = (relationship) => {
    setRelationships([...relationships, relationship]);
  };

  const exportFamilyTree = () => {
    // TODO: Implement export functionality
    console.log("Exporting family tree...");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <FamilyMemberSidebar 
        familyMembers={familyMembers}
        onSelectMember={setSelectedMember}
        selectedMember={selectedMember}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Family Tree Creator</h1>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 space-y-6">
                <Card>
                  <CardContent>
                    <FamilyMemberForm 
                      onSubmit={selectedMember ? updateFamilyMember : addFamilyMember}
                      initialData={selectedMember}
                      onDelete={deleteFamilyMember}
                    />
                  </CardContent>
                </Card>
                <RelationshipMapper 
                  familyMembers={familyMembers}
                  onAddRelationship={addRelationship}
                />
              </div>
              <Card className="w-full md:w-2/3">
                <CardContent>
                  <FamilyTreeVisualization 
                    familyMembers={familyMembers}
                    relationships={relationships}
                    onSelectMember={setSelectedMember}
                  />
                </CardContent>
              </Card>
            </div>
            <div className="mt-6">
              <Button onClick={exportFamilyTree}>Export Family Tree</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FamilyTree;
