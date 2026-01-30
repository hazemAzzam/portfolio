import { EmploymentType } from "../value-objects/EmploymentTypes.type";

export class ExperienceEntity {
  public readonly id?: string;
  public readonly name: string;
  public readonly position: string;
  public readonly startDate: string;
  public readonly endDate?: string;
  public readonly location: {
    lat: number;
    lng: number;
    details: string;
  };
  public readonly employementType: EmploymentType;

  constructor(props: ExperienceEntity) {
    this.id = props.id;
    this.name = props.name;
    this.position = props.position;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.employementType = props.employementType;
    this.location = props.location;
  }
}
