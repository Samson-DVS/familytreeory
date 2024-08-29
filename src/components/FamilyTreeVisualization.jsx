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

const renderFamilyTree = (members, rootMember, onSelect) => {
  const children = members.filter(m => m.parentId === rootMember.id);
  
  return (
    <TreeNode label={<FamilyMemberNode member={rootMember} onSelect={onSelect} />}>
      {children.map(child => renderFamilyTree(members, child, onSelect))}
    </TreeNode>
  );
};

const FamilyTreeVisualization = ({ familyMembers, onSelectMember }) => {
  const rootMembers = familyMembers.filter(m => !m.parentId);

  return (
    <div className="overflow-auto h-full">
      <Tree
        lineWidth={'2px'}
        lineColor={'#bbb'}
        lineBorderRadius={'10px'}
        label={<div>Family Tree</div>}
      >
        {rootMembers.map(root => renderFamilyTree(familyMembers, root, onSelectMember))}
      </Tree>
    </div>
  );
};

export default FamilyTreeVisualization;
