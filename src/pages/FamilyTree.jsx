import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FamilyMemberForm from '../components/FamilyMemberForm';
import FamilyTreeVisualization from '../components/FamilyTreeVisualization';

const FamilyTree = () => {
  const [familyMembers, setFamilyMembers] = useState([]);

  const addFamilyMember = (member) => {
    setFamilyMembers([...familyMembers, { ...member, id: Date.now() }]);
  };

  const exportFamilyTree = () => {
    // TODO: Implement export functionality
    console.log("Exporting family tree...");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Family Tree Creator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add Family Member</CardTitle>
          </CardHeader>
          <CardContent>
            <FamilyMemberForm onSubmit={addFamilyMember} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Family Tree Visualization</CardTitle>
          </CardHeader>
          <CardContent>
            <FamilyTreeVisualization familyMembers={familyMembers} />
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Button onClick={exportFamilyTree}>Export Family Tree</Button>
      </div>
    </div>
  );
};

export default FamilyTree;