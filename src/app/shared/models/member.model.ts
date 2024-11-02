import { Village } from "./village.model";

export interface Member {
  _id: string;
  name: string;
  phone_no: string;
  phone_no_2: string;
  email: string;
  dob: string;
  password: string;
  profile_image: string;
  education: string;
  profession: string;
  profession_description: string;
  profession_address: string;
  profession_city: string;
  current_residence: string;
  address: string;
  maternal_village: string;
  blood_group: string;
  maternal_surname: string;
  zone: string;
  home_town: Village;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  members: Member[],
  relation_with_the_head_of_the_house: string;
}
