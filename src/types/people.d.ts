interface Person {
  name: string;
  url?: string;
  img?: string;
  role: string;
  status: "active" | "alumni" | "collaborator";
  start?: number;
  end?: number;
  affiliation?: string;
}

interface PeopleData {
  people: Person[];
}

declare module "*.yml" {
  const data: PeopleData;
  export default data;
}
