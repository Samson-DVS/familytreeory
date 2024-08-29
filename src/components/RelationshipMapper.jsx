import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const RelationshipMapper = ({ familyMembers, onAddRelationship }) => {
  const [person1, setPerson1] = useState('');
  const [person2, setPerson2] = useState('');
  const [relationshipType, setRelationshipType] = useState('');

  const handleAddRelationship = () => {
    if (person1 && person2 && relationshipType) {
      onAddRelationship({ person1, person2, relationshipType });
      setPerson1('');
      setPerson2('');
      setRelationshipType('');
    }
  };

  return (
    <Card>
      <CardContent className="space-y-4 p-4">
        <h3 className="text-lg font-semibold">Add Relationship</h3>
        <div>
          <Label htmlFor="person1">Person 1</Label>
          <Select onValueChange={setPerson1} value={person1}>
            <SelectTrigger>
              <SelectValue placeholder="Select person" />
            </SelectTrigger>
            <SelectContent>
              {familyMembers.map((member) => (
                <SelectItem key={member.id} value={member.id}>{member.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="relationshipType">Relationship Type</Label>
          <Select onValueChange={setRelationshipType} value={relationshipType}>
            <SelectTrigger>
              <SelectValue placeholder="Select relationship type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="parent">Parent</SelectItem>
              <SelectItem value="child">Child</SelectItem>
              <SelectItem value="sibling">Sibling</SelectItem>
              <SelectItem value="spouse">Spouse</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="person2">Person 2</Label>
          <Select onValueChange={setPerson2} value={person2}>
            <SelectTrigger>
              <SelectValue placeholder="Select person" />
            </SelectTrigger>
            <SelectContent>
              {familyMembers.map((member) => (
                <SelectItem key={member.id} value={member.id}>{member.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleAddRelationship} className="w-full">Add Relationship</Button>
      </CardContent>
    </Card>
  );
};

export default RelationshipMapper;
