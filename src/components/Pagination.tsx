import { useState } from "react";

export default function Pagination({ page, totalPage, onNext, onPrev }: { page: number, totalPage: number, onNext: (page: number) => void, onPrev: (page: number) => void }) {

    const [currentPage, setCurrentPage] = useState(page);

    const handleNext = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
            onNext(currentPage + 1);
        }
    }

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            onPrev(currentPage - 1);
        }
    }

    return (
        <div className="flex w-full justify-center lg:justify-end gap-5">
            <button className="bg-red-600 hover:bg-red-500 px-5 py-2 rounded text-white" onClick={handlePrev}>Prev</button>
            <button className="bg-red-600 hover:bg-red-500 px-5 py-2 rounded text-white" onClick={handleNext}>Next</button>
        </div>
    )

}