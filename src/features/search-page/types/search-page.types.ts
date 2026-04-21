export interface AsideFilter {
  legend: string;
  name: string;
  options: AsideFilterOption[];
}

export interface AsideFilterOption {
  id: string;
  label: string;
}
