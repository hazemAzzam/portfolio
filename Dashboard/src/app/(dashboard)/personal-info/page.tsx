"use client";

import React from "react";
import PersonalInfoForm from "./_components/PersonalInfoForm";
import { usePersonalInfo } from "./_hooks/personal-info-hooks";

export default function PersonalInfo() {
  const { data, isLoading, error } = usePersonalInfo();

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="text-center text-red-500">
          Error loading personal info
        </div>
      </div>
    );
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
