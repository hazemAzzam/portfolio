export interface GetAllExperiencesDto {
  id: string;
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  employment_type: string;
  location: {
    lat: number;
    lng: number;
    details: string;
  };
}
