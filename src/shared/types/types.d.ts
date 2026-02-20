declare global {
  namespace FSD {
    type GetRes = {
      success: boolean;
      current_page: number;
      per_page: number;
      total_pages: number;
      total_items: number;
      data: FSDItem[];
    };

    type GetReq = void;

    interface FSDItem {
      _id: string;
      name: string;
      description: string;
    }

    type PostReq = {
      name: string;
      description: string;
    };

    type PostRes = {
      success: boolean;
      data: FSDItem;
    };
  }
}

export {};
