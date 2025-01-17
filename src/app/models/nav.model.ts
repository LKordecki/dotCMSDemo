export interface NavigationItem {
  children?: NavigationItem[];  
  code?: string | null;
  folder: string;
  hash: number;
  host: string;
  href: string;
  languageId: number;
  order: number;
  target: string;
  title: string;
  type: string;
}


export interface NavigationResponse {
  entity: {
    children: NavigationItem[];
    code: string | null;
    folder: string;
    hash: number;
    host: string;
    href: string;
    languageId: number;
    order: number;
    target: string;
    title: string;
    type: string;
  };
  errors: any[];
  i18nMessagesMap: Record<string, string>;
  messages: any[];
  pagination: any;
  permissions: any[];
}