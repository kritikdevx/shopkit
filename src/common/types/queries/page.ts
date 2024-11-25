import { HasMetafieldsIdentifier } from '../schemas';
import { Page } from '../schemas/page';

export interface GetPageByIdQueryVariables {
  id: string;
  metafields?: HasMetafieldsIdentifier[];
}

export interface GetPageByHandleQueryVariables {
  handle: string;
  metafields?: HasMetafieldsIdentifier[];
}

export type GetPageQueryVariables =
  | GetPageByIdQueryVariables
  | GetPageByHandleQueryVariables;

export interface GetPageQuery {
  page: Page;
}
