import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FamilyMemberForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const submitForm = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register('name', { required: true })} />
      </div>
      <div>
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <Input id="dateOfBirth" type="date" {...register('dateOfBirth')} />
      </div>
      <div>
        <Label htmlFor="dateOfDeath">Date of Death (if applicable)</Label>
        <Input id="dateOfDeath" type="date" {...register('dateOfDeath')} />
      </div>
      <div>
        <Label htmlFor="gender">Gender</Label>
        <Select onValueChange={(value) => register('gender').onChange({ target: { value } })}>
          <SelectTrigger>
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="relationship">Relationship to User</Label>
        <Input id="relationship" {...register('relationship')} />
      </div>
      <div>
        <Label htmlFor="notes">Additional Notes</Label>
        <Input id="notes" {...register('notes')} />
      </div>
      <Button type="submit">Add Family Member</Button>
    </form>
  );
};

export default FamilyMemberForm;