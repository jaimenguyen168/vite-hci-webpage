export interface Grant {
  title: string;
  projectNumber: string;
  dateRange: string;
  amount: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  logoAlt: string;
  grants: Grant[];
}

export interface SponsorsData {
  sponsors: Sponsor[];
}
