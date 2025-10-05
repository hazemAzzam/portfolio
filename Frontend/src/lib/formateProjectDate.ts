export const formatProjectDate = (startDate: string, endDate?: string) => {
  const start = new Date(startDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  const end = endDate
    ? new Date(endDate).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "Present";
  return `${start} - ${end}`;
};
