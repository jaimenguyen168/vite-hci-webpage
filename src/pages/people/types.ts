export interface Person {
  name: string;
  url?: string | null; // Tina returns nullable strings
  img?: string | null; // Tina returns nullable strings
  roles: string[]; // Keep as required array, but we'll handle null in the component
  status: string;
  start?: number | null; // Tina returns nullable numbers
  end?: number | null; // Tina returns nullable numbers
  affiliation: string;
  now?: string | null; // Tina returns nullable strings
}
