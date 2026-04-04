export interface AttributeTableInfo {
  id: string;
  key: string;
  label: string;
  columns: { key: string; label: string }[];
  values: Record<string, string>[];
}
