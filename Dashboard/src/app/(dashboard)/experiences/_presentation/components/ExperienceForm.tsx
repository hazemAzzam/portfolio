import { FormProvider, useFormContext, UseFormReturn } from "react-hook-form";
import { FormTextInput } from "@/components/controlled/form-text-input";
import MapLocationMenu from "./MapLocationMenu";
import { ExperienceSchema } from "../schemas/experience.schema";
import { FormSelect } from "@/components/controlled/form-select";
import { EmploymentTypes } from "../../_domain/value-objects/EmploymentTypes.type";

export const ExperienceFormProvider = ({
  children,
  form,
  onSubmit,
}: {
  children: React.ReactNode;
  form: UseFormReturn<ExperienceSchema>;
  onSubmit: (data: ExperienceSchema) => void;
}) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {children}
      </form>
    </FormProvider>
  );
};

export const ExperienceFormBody = () => {
  const form = useFormContext<ExperienceSchema>();
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <FormTextInput name="name" label="Name" />
        <FormTextInput name="position" label="Position" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormTextInput type="date" name="startDate" label="Start Date" />
        <FormTextInput type="date" name="endDate" label="End Date" />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <MapLocationMenu
          onSubmit={(location: {
            lat: number;
            lng: number;
            details: string;
          }) => {
            form.setValue("location.details", location.details);
            form.setValue("location.lat", location.lat);
            form.setValue("location.lng", location.lng);
          }}
        >
          <FormTextInput name="location.details" label="Location" />
        </MapLocationMenu>
        <FormSelect
          name="employmentType"
          label="Emplyment Type"
          triggerClassName="w-full"
          options={EmploymentTypes.map((employmentType) => ({
            value: employmentType,
            label: employmentType,
          }))}
        />
      </div>
    </>
  );
};
