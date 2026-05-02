export interface Filter {
  key: string;
  label: string;
  type: "single" | "multi";
  options: string[];
}
