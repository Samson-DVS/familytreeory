import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const RelationshipForm = ({ familyMembers, onAddRelationship }) => {
  const [parent, setParent] = useState('');
  const [child, setChild] = useState('');

  const handleAddRelationship = () => {
    if (parent && child) {
      onAddRelationship({ parent, child });
      setParent('');
      setChild('');
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="parent">Parent</Label>
        <Select onValueChange={setParent} value={parent}>
          <SelectTrigger>
            <SelectValue placeholder="Select parent" />
          </SelectTrigger>
          <SelectContent>
            {familyMembers.map((member) => (
              <SelectItem key={member.id} value={member.id}>{member.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="child">Child</Label>
        <Select onValueChange={setChild} value={child}>
          <SelectTrigger>
            <SelectValue placeholder="Select child" />
          </SelectTrigger>
          <SelectContent>
            {familyMembers.map((member) => (
              <SelectItem key={member.id} value={member.id}>{member.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleAddRelationship} className="w-full">Add Relationship</Button>
    </div>
  );
};

export default RelationshipForm;