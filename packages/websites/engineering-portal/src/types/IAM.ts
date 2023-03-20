export interface IAMGroup {
  id: string;
  name: string;
  email: string;
}

export interface IAM {
  email: string;
  name: string;
  geo: {
    country: string;
  };
  groups: IAMGroup[];
}
