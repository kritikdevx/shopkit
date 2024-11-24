import { Menu } from '../schemas/menu';

// Variables
export interface GetMenuQueryVariables {
  handle: string;
}

// Queries
export interface GetMenuQuery {
  menu: Menu;
}
