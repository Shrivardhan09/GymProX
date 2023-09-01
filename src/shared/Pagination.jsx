import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Pagination = ({ page, totalPages, handlePreviousPage, handleNextPage, renderPaginationButtons }) => {
    return (
        <div className="flex justify-center items-center w-full mt-7 relative">
            <>
                <button onClick={handlePreviousPage} disabled={page === 1} className="absolute left-20 ">
                    <ArrowLeft size={34} />
                </button>
                <div className="flex justify-evenly gap-5 rounded-full sm:hidden xs:hidden">{renderPaginationButtons()}</div>
                <button onClick={handleNextPage} disabled={page === totalPages} className="absolute right-20 ">
                    <ArrowRight size={34} />
                </button>
            </>
        </div>
    );
};

export default Pagination;
