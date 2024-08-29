import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Card, CardContent } from "@/components/ui/card";

const FamilyMemberNode = ({ member, onSelect }) => (
  <Card className="w-48 cursor-pointer" onClick={() => onSelect(member)}>
    <CardContent className="p-2 text-center">
      <h3 className="font-bold">{member.name}</h3>
      <p className="text-sm">{member.dateOfBirth} - {member.dateOfDeath || 'Present'}</p>
    </CardContent>
  </Card>
);

const renderFamilyTree = (members, relationships, rootMember, onSelect) => {
  const children = relationships
    .filter(rel => rel.person1 === rootMember.id && rel.relationshipType === 'child')
    .map(rel => members.find(m => m.id === rel.person2));
  
  const spouse = relationships
    .find(rel => (rel.person1 === rootMember.id || rel.person2 === rootMember.id) && rel.relationshipType === 'spouse');
  
  const spouseMember = spouse ? members.find(m => m.id === (spouse.person1 === rootMember.id ? spouse.person2 : spouse.person1)) : null;

  return (
    <TreeNode label={
      <div className="flex items-center space-x-2">
        <FamilyMemberNode member={rootMember} onSelect={onSelect} />
        {spouseMember && <FamilyMemberNode member={spouseMember} onSelect={onSelect} />}
      </div>
    }>
      {children.map(child => renderFamilyTree(members, relationships, child, onSelect))}
    </TreeNode>
  );
};

const FamilyTreeVisualization = ({ familyMembers, relationships, onSelectMember }) => {
  const rootMembers = familyMembers.filter(m => !relationships.some(rel => rel.person2 === m.id && rel.relationshipType === 'child'));

  return (
    <div className="overflow-auto h-full">
      <Tree
        lineWidth={'2px'}
        lineColor={'#bbb'}
        lineBorderRadius={'10px'}
        label={<div>Family Tree</div>}
      >
        {rootMembers.map(root => renderFamilyTree(familyMembers, relationships, root, onSelectMember))}
      </Tree>
    </div>
  );
};

export default FamilyTreeVisualization;
