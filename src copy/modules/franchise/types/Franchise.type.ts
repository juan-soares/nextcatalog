export interface Franchise {
  id: string;
  label: string;
  logo: string;
  slug: string;
  parentFranchise?: Franchise;
}
