import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Card, CardContent } from "@/components/ui/card";

const FamilyMemberNode = ({ member, onSelect }) => (
  <Card className="w-40 cursor-pointer" onClick={() => onSelect(member)}>
    <CardContent className="p-2 text-center">
      <h3 className="font-bold">{member.name}</h3>
    </CardContent>
  </Card>
);

const renderFamilyTree = (members, relationships, rootMember, onSelect) => {
  const children = relationships
    .filter(rel => rel.parent === rootMember.id)
    .map(rel => members.find(m => m.id === rel.child));
  
  return (
    <TreeNode label={<FamilyMemberNode member={rootMember} onSelect={onSelect} />}>
      {children.map(child => renderFamilyTree(members, relationships, child, onSelect))}
    </TreeNode>
  );
};

const FamilyTreeVisualization = ({ familyMembers, relationships, onSelectMember }) => {
  const rootMembers = familyMembers.filter(m => !relationships.some(rel => rel.child === m.id));

  return (
    <div className="overflow-auto h-[500px]">
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