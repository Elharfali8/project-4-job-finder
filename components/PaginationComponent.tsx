'use client'

import { AppDispatch, RootState } from '@/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { setCurrentPage } from '@/state/jobs/jobsSlice';

const PaginationComponent = () => {
  const { filteredJobs, currentPage, jobsPerPage } = useSelector((store: RootState) => store.jobs);
  const dispatch = useDispatch<AppDispatch>();

  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / jobsPerPage));

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            onClick={currentPage > 1 ? () => dispatch(setCurrentPage(currentPage - 1)) : undefined}
            className={currentPage <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>

        {/* Page Numbers - Show only 5 pages around the current page */}
        {Array.from({ length: totalPages }, (_, index) => index + 1)
          .filter(page => page >= currentPage - 2 && page <= currentPage + 2) // Show pages near current page
          .map((page) => (
            <PaginationItem key={page} >
              <button
                className={`px-[9px] lg:px-4 py-1 lg:py-2 lg:text-lg border rounded-md ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 dark:text-primary "}`}
                onClick={() => dispatch(setCurrentPage(page))}
              >
                {page}
              </button>
            </PaginationItem>
          ))
        }

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            onClick={currentPage < totalPages ? () => dispatch(setCurrentPage(currentPage + 1)) : undefined}
            className={currentPage >= totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};


export default PaginationComponent
