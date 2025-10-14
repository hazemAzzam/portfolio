"use client";

import React from "react";
import PersonalInfoForm from "./_components/PersonalInfoForm";
import { usePersonalInfo } from "./_hooks/personal-info-hooks";
import { redirect } from "next/navigation";

export default function PersonalInfo() {
  const { data, isLoading, isError } = usePersonalInfo();

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (isError) {
    redirect("/login");
  }

  return (
    <div className="p-4">
      <PersonalInfoForm
        data={
          data || {
            id: "",
            name: "",
            proffessionalTitle: "",
            email: "",
            phone: "",
            address: "",
            bio: "",
            linkedin: "",
            github: "",
            createdAt: "",
            updatedAt: "",
          }
        }
      />
    </div>
  );
}
