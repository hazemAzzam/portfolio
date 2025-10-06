"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import React, { useState } from "react";
import { format } from "date-fns";
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
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
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
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import {
  useCreateProject,
  useUpdateProject,
} from "@/app/(dashboard)/projects/_hooks/use-projects";
import { formatDjangoErrors } from "@/lib/error-handler";
import { ProjectType } from "../_types/project-types";

const schema = z.object({
  title: z.string().min(1),
  status: z.enum(["Active", "Completed", "On Hold", "Cancelled"]),
  overview: z.string().min(1),
  description: z.string().min(1),
  achievements: z.array(z.string()).min(1),
  challenges: z.array(z.string()).min(1),
  technologies: z.array(z.string()).optional(),
  startDate: z.string(),
  endDate: z.string().optional(),
  role: z.string().min(1),
  category: z.string().optional(),
  teamSize: z.number().optional(),
  liveUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  images: z.array(z.string()).min(1),
  featured: z.boolean(),
});

export default function ProjectDialog({
  children,
  project,
}: {
  children: React.ReactNode;
  project?: ProjectType;
}) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: project?.title || "",
      status: project?.status || "Active",
      overview: project?.overview || "",
      description: project?.description || "",
      achievements: project?.achievements_list || [],
      challenges: project?.challenges_list || [],
      technologies: project?.technologies || [],
      startDate: project?.startDate || new Date().toISOString(),
      endDate: project?.endDate || "",
      role: project?.role || "",
      category: project?.category || "",
      teamSize: project?.teamSize || 0,
      liveUrl: project?.liveUrl || "",
      githubUrl: project?.githubUrl || "",
      images: project?.images_list || [],
      featured: project?.featured || false,
    },
  });

  const createProjectMutation = useCreateProject();
  const updateProjectMutation = useUpdateProject();

  const [newKeyAchievementDialog, setNewKeyAchievementDialog] = useState(false);
  const [newKeyChallengeDialog, setNewKeyChallengeDialog] = useState(false);
  const [uploadImageDialog, setUploadImageDialog] = useState(false);

  const onSubmit = (data: z.infer<typeof schema>) => {
    if (newKeyAchievementDialog || newKeyChallengeDialog || uploadImageDialog) {
      return;
    }
    // Format dates to YYYY-MM-DD format for Django
    const formattedData = {
      ...data,
      startDate: data.startDate
        ? format(new Date(data.startDate), "yyyy-MM-dd")
        : undefined,
      endDate: data.endDate
        ? format(new Date(data.endDate), "yyyy-MM-dd")
        : undefined,
      // Map field names to match Django backend
      link: data.liveUrl,
    };

    if (project) {
      updateProjectMutation.mutate(
        { data: { ...formattedData, id: project.id } },
        {
          onSuccess: () => {
            form.reset();
          },
        }
      );
    } else {
      createProjectMutation.mutate(
        { data: formattedData },
        {
          onSuccess: () => {
            form.reset();
          },
        }
      );
    }
  };

  const handleAddAchievement = (achievement: string) => {
    const currentAchievements = form.getValues("achievements");
    form.setValue("achievements", [...currentAchievements, achievement]);
  };

  const handleAddChallenge = (challenge: string) => {
    const currentChallenges = form.getValues("challenges");
    form.setValue("challenges", [...currentChallenges, challenge]);
  };

  const handleAddImage = (image: string) => {
    const currentImages = form.getValues("images");
    form.setValue("images", [...currentImages, image]);
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
      <KeyDialog
        title="Images"
        open={uploadImageDialog}
        onOpenChange={setUploadImageDialog}
        onAdd={handleAddImage}
      />
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="max-h-[80vh] max-w-3xl! overflow-y-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <DialogHeader>
                <DialogTitle>New Project</DialogTitle>
                <DialogDescription className="space-y-1 flex flex-col">
                  {/* Form validation errors */}
                  {Object.entries(form.formState.errors).map(
                    ([field, error]) => (
                      <span key={field} className="text-red-500 text-sm">
                        {field}: {error?.message}
                      </span>
                    )
                  )}

                  {/* API errors */}
                  {createProjectMutation.error && (
                    <div className="text-red-500 text-sm space-y-1">
                      {Object.entries(
                        formatDjangoErrors(createProjectMutation.error)
                      ).map(([field, error]) => (
                        <div key={field}>
                          <strong>{field}:</strong> {error}
                        </div>
                      ))}
                    </div>
                  )}
                </DialogDescription>
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
                <FormField
                  control={form.control}
                  name="featured"
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>Featured</FieldLabel>
                      <FieldContent>
                        <Switch
                          {...field}
                          value={field.value ? "true" : "false"}
                          onCheckedChange={field.onChange}
                        />
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
                        <Input {...field} />
                      </FieldContent>
                    </Field>
                  )}
                />
              </Row>
              <Row>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>Description</FieldLabel>
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
                  name="role"
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>Role</FieldLabel>
                      <FieldContent>
                        <Input {...field} />
                      </FieldContent>
                    </Field>
                  )}
                />
                <FormField
                  control={form.control}
                  name="teamSize"
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>Team Size</FieldLabel>
                      <FieldContent>
                        <Input
                          {...field}
                          type="number"
                          value={field.value || ""}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value
                                ? Number(e.target.value)
                                : undefined
                            )
                          }
                        />
                      </FieldContent>
                      <FieldError>
                        {form.formState.errors.teamSize?.message}
                      </FieldError>
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
                          value={
                            field.value ? new Date(field.value) : undefined
                          }
                          onChange={(date) =>
                            field.onChange(
                              date
                                ? date.toISOString()
                                : new Date().toISOString()
                            )
                          }
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
                          disabled={["Active", "On Hold"].includes(
                            form.watch("status")
                          )}
                          value={
                            field.value ? new Date(field.value) : undefined
                          }
                          onChange={(date) =>
                            field.onChange(
                              date
                                ? date.toISOString()
                                : new Date().toISOString()
                            )
                          }
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
                  name="achievements"
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
                  name="challenges"
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
              <Row>
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <KeyDialogField
                      form={form}
                      field={field}
                      data={field.value}
                      openDialog={setUploadImageDialog}
                      title="Images"
                    />
                  )}
                />
              </Row>
              <Row>
                <FormField
                  control={form.control}
                  name="liveUrl"
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>Live URL</FieldLabel>
                      <FieldContent>
                        <Input {...field} />
                      </FieldContent>
                    </Field>
                  )}
                />
              </Row>
              <Row>
                <FormField
                  control={form.control}
                  name="githubUrl"
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>GitHub URL</FieldLabel>
                      <FieldContent>
                        <Input {...field} />
                      </FieldContent>
                    </Field>
                  )}
                />
              </Row>
              <DialogFooter>
                <Button
                  type="submit"
                  disabled={createProjectMutation.isPending}
                >
                  {createProjectMutation.isPending ? "Creating..." : "Save"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
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
      {/* <FieldLabel>Key {title}</FieldLabel> */}
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
          <DialogTitle>Add {title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Textarea
            {...form.register("title")}
            placeholder={`Enter ${title}...`}
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
