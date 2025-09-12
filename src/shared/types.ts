export interface ApiErrorResponseDTo {
   type: string;
   title: string;
   status: number;
   detail: string;
   instance: string;
   timestamp: string;
   code: string;
}

export interface PaginatedResponse<T> {
   content: T[];
   totalElements: number;
   totalPages: number;
   size: number;
   number: number;
   numberOfElements: number;
   first: boolean;
   last: boolean;
   empty: boolean;
   sort?: { empty: boolean; sorted: boolean; unsorted: boolean };
   pageable?: {
      offset: number;
      pageSize: number;
      pageNumber: number;
      paged: boolean;
      unpaged: boolean;
      sort: { empty: boolean; sorted: boolean; unsorted: boolean };
   };
}
