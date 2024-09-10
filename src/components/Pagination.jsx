import React from "react";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (e) => {
    const newPage = Number(e.target.value);
    if (newPage > 0 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn btn-primary"
      >
        Previous
      </button>
      <span className="mx-2">Page</span>
      <input
        type="number"
        min="1"
        max={totalPages}
        value={currentPage}
        onChange={handlePageChange}
        className="form-control d-inline w-auto"
      />
      <span className="mx-2">of {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn btn-primary"
      >
        Next
      </button>
    </div>
  );
};
