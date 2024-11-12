export interface Menu {
  id: string;
  handle: string;
  title: string;
  updatedAt: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  title: string;
  url: string;
  items: MenuItem[];
}
