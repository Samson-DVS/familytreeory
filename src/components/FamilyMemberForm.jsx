import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FamilyMemberForm = ({ onSubmit, initialData, onDelete }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset({ name: '' });
    }
  }, [initialData, reset]);

  const submitForm = (data) => {
    onSubmit(initialData ? { ...data, id: initialData.id } : data);
    if (!initialData) reset({ name: '' });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register('name', { required: true })} />
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