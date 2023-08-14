export interface ISourceEntity {
  id: string;
  type: string;
  originId: string;
  originParentId?: string;
  url?: string;
  redirects?: string[];
  properties: Record<string, any | undefined>;
}
