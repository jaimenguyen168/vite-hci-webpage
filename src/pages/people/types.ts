export interface PeopleData {
  people: Person[];
  seo: PeopleSEOData;
}

export interface Person {
  name: string;
  url?: string | null;
  img?: string;
  roles: string[];
  status: string;
  start?: number | null;
  end?: number | null;
  affiliation: string;
  now?: string | null;
}

export interface PeopleSEOData {
  current: {
    title: string;
    description: string;
    keywords: string;
  };
  alumni: {
    title: string;
    description: string;
    keywords: string;
  };
  collaborators: {
    title: string;
    description: string;
    keywords: string;
  };
}
