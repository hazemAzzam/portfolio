"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import React, { useState } from "react";
import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField } from "@/components/ui/form";
import Row from "@/components/ui/row";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { CirclePlus, X } from "lucide-react";
import { Empty, EmptyTitle } from "@/components/ui/empty";
import { DatePicker } from "@/components/ui/date-picker";

const schema = z.object({
  title: z.string().min(1),
  status: z.enum(["Active", "Completed", "On Hold", "Cancelled"]),
  overview: z.string().min(1),
  keyAchievements: z.array(z.string()).min(1),
  keyChallenges: z.array(z.string()).min(1),
  technologies: z.array(z.string()).min(1),
  startDate: z.date(),
  endDate: z.date(),
  role: z.string().min(1),
  category: z.string().min(1),
  teamSize: z.number().min(1),
  liveUrl: z.string().min(1),
  githubUrl: z.string().min(1),
  images: z.array(z.string()).min(1),
  featured: z.boolean(),
});

export default function NewProjetcDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      status: "Active",
      overview: "",
      keyAchievements: [],
      keyChallenges: [],
      technologies: [],
      startDate: new Date(),
      endDate: new Date(),
      role: "",
      category: "",
      teamSize: 0,
      liveUrl: "",
      githubUrl: "",
      images: [],
      featured: false,
    },
  });
  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };
  const [newKeyAchievementDialog, setNewKeyAchievementDialog] = useState(false);
  const [newKeyChallengeDialog, setNewKeyChallengeDialog] = useState(false);

  const handleAddAchievement = (achievement: string) => {
    const currentAchievements = form.getValues("keyAchievements");
    form.setValue("keyAchievements", [...currentAchievements, achievement]);
  };

  const handleAddChallenge = (challenge: string) => {
    const currentChallenges = form.getValues("keyChallenges");
    form.setValue("keyChallenges", [...currentChallenges, challenge]);
  };

  return (
    <>
      <KeyDialog
        title="Achievements"
        open={newKeyAchievementDialog}
        onOpenChange={setNewKeyAchievementDialog}
        onAdd={handleAddAchievement}
      />
      <KeyDialog
        title="Challenges"
        open={newKeyChallengeDialog}
        onOpenChange={setNewKeyChallengeDialog}
        onAdd={handleAddChallenge}
      />
      <Dialog>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="max-h-[80vh] max-w-3xl! overflow-y-auto">
              <DialogHeader>
                <DialogTitle>New Project</DialogTitle>
              </DialogHeader>
              <Row>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>Title</FieldLabel>
                      <FieldContent>
                        <Input {...field} />
                      </FieldContent>
                    </Field>
                  )}
                />
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>Status</FieldLabel>
                      <FieldContent>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Active">Active</SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                            <SelectItem value="On Hold">On Hold</SelectItem>
                            <SelectItem value="Cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </FieldContent>
                    </Field>
                  )}
                />
              </Row>
              <Row>
                <FormField
                  control={form.control}
                  name="overview"
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>Overview</FieldLabel>
                      <FieldContent>
                        <Textarea {...field} />
                      </FieldContent>
                    </Field>
                  )}
                />
              </Row>
              <Row>
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>Start Date</FieldLabel>
                      <FieldContent>
                        <DatePicker
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="Select start date"
                        />
                      </FieldContent>
                    </Field>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>End Date</FieldLabel>
                      <FieldContent>
                        <DatePicker
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="Select end date"
                        />
                      </FieldContent>
                    </Field>
                  )}
                />
              </Row>
              <Row>
                <FormField
                  control={form.control}
                  name="keyAchievements"
                  render={({ field }) => (
                    <KeyDialogField
                      form={form}
                      field={field}
                      data={field.value}
                      openDialog={setNewKeyAchievementDialog}
                      title="Achievements"
                    />
                  )}
                />
              </Row>
              <Row>
                <FormField
                  control={form.control}
                  name="keyChallenges"
                  render={({ field }) => (
                    <KeyDialogField
                      form={form}
                      field={field}
                      data={field.value}
                      openDialog={setNewKeyChallengeDialog}
                      title="Challenges"
                    />
                  )}
                />
              </Row>
            </DialogContent>
          </form>
        </Form>
      </Dialog>
    </>
  );
}

export const KeyDialogField = ({
  form,
  field,
  data,
  openDialog,
  title,
}: {
  form: UseFormReturn<z.infer<typeof schema>>;
  field: FieldValues;
  data: string[];
  openDialog: (open: boolean) => void;
  title: string;
}) => {
  return (
    <Field>
      <FieldLabel>Key {title}</FieldLabel>
      <FieldContent>
        <div className="border border-border rounded-md p-4 w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              {title} ({data.length})
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => openDialog(true)}
            >
              <CirclePlus className="size-5" />
            </Button>
          </div>
          {field.value.length > 0 ? (
            <div className="space-y-2">
              {field.value.map((itemTitle: string, index: number) => (
                <KeyItem
                  key={itemTitle}
                  title={itemTitle}
                  onDelete={() =>
                    form.setValue(
                      field.name,
                      field.value.filter((_: string, i: number) => i !== index)
                    )
                  }
                />
              ))}
            </div>
          ) : (
            <EmptyState title={title} />
          )}
        </div>
      </FieldContent>
    </Field>
  );
};

export const EmptyState = ({ title }: { title: string }) => {
  return (
    <Empty className="border border-dashed p-4 md:p-4 gap-2">
      <EmptyTitle className="text-sm">No {title} added yet</EmptyTitle>
    </Empty>
  );
};

export const KeyItem = ({
  title,
  onDelete,
}: {
  title: string;
  onDelete: () => void;
}) => {
  return (
    <Item
      key={title}
      variant="muted"
      size="sm"
      className="border border-border p-2"
    >
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
      </ItemContent>
      <ItemActions>
        <Button
          variant="outline"
          size="icon"
          className="p-0 size-6"
          onClick={() => {
            onDelete();
          }}
        >
          <X className="size-4" />
        </Button>
      </ItemActions>
    </Item>
  );
};

export function KeyDialog({
  open,
  onOpenChange,
  onAdd,
  title,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (title: string) => void;
  title: string;
}) {
  const form = useForm({
    defaultValues: {
      title: "",
    },
  });

  const handleSubmit = (data: { title: string }) => {
    if (data.title.trim()) {
      onAdd(data.title.trim());
      form.reset();
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Key {title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Textarea
            {...form.register("title")}
            placeholder={`Enter key ${title}...`}
          />
          <div className="flex justify-end gap-2 mt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Add</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
