// entities/requests/types.ts
export namespace FSD {
  export type GetRes = {
    success: boolean;
    current_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
    data: FSDItem[]; // конкретизируем элементы
  };

  export type GetReq = void;

  export type FSDItem = {
    _id: string;
    name: string;
    description: string;
  };

  export type PostReq = {
    name: string;
    description: string;
  };

  export type PostRes = {
    success: boolean;
    data: FSDItem;
  };
}
