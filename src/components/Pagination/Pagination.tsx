import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Button";
import { PaginationProps } from "./types";

const Pagination = ({
  currentPage,
  onChangePage,
  totalPage,
}: PaginationProps) => {
  return (
    <div className="flex items-center">
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          onChangePage(currentPage - 1);
        }}
        disabled={currentPage === 1}
        className="flex items-center space-x-2"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Previous</span>
      </Button>
      <span className="text-sm text-gray-600 px-4">
        Page {currentPage} of {totalPage}
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          onChangePage(currentPage + 1);
        }}
        disabled={currentPage === totalPage}
        className="flex items-center space-x-2"
      >
        <span>Next</span>
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Pagination;
