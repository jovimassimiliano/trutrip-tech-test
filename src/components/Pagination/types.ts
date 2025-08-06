export type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
  totalPage: number;
};
