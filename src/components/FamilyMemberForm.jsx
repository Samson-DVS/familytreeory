import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const FamilyMemberForm = ({ onSubmit, initialData, onDelete }) => {
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (initialData) {
      Object.keys(initialData).forEach(key => {
        setValue(key, initialData[key]);
      });
    } else {
      reset();
    }
  }, [initialData, setValue, reset]);

  const submitForm = (data) => {
    onSubmit(initialData ? { ...data, id: initialData.id } : data);
    if (!initialData) reset();
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
        <Select onValueChange={(value) => setValue('gender', value)}>
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
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea id="notes" {...register('notes')} />
      </div>
      <div className="flex justify-between">
        <Button type="submit">{initialData ? 'Update' : 'Add'} Family Member</Button>
        {initialData && (
          <Button type="button" variant="destructive" onClick={() => onDelete(initialData.id)}>
            Delete
          </Button>
        )}
      </div>
    </form>
  );
};

export default FamilyMemberForm;
