export interface PeopleData {
  images: {
    heroes: HeroImage[];
  };
  people: Person[];
}

export interface HeroImage {
  src: string;
  alt: string;
  title?: string;
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
