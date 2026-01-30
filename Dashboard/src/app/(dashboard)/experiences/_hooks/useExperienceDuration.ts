import { useMemo } from "react";

type ExperienceDuration = {
  years: number;
  months: number;
  days: number;
};

type UseExperienceDurationParams = {
  startDate: string | number | Date;
  endDate?: string | number | Date | null;
};

export const useExperienceDuration = ({
  startDate,
  endDate,
}: UseExperienceDurationParams): ExperienceDuration => {
  return useMemo(() => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    // adjust days
    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += prevMonth.getDate();
    }

    // adjust months
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months, days };
  }, [startDate, endDate]);
};

export const useExperienceLabel = (params: UseExperienceDurationParams) => {
  const duration = useExperienceDuration(params);

  return useMemo(() => {
    const parts: string[] = [];

    if (duration.years) {
      parts.push(`${duration.years} year${duration.years > 1 ? "s" : ""}`);
    }

    if (duration.months) {
      parts.push(`${duration.months} month${duration.months > 1 ? "s" : ""}`);
    }

    if (duration.days) {
      parts.push(`${duration.days} day${duration.days > 1 ? "s" : ""}`);
    }

    return parts.join(" ");
  }, [duration.years, duration.months, duration.days]);
};
