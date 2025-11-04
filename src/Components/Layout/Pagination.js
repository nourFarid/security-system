import { useEffect, useState } from "react";
import useTranslate from './../../Hooks/Translation/useTranslate';

const Pagination = ({ pageNumber, pageSize, totalRows, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(pageNumber);
  const totalPages = Math.ceil(totalRows / pageSize);
  const { t } = useTranslate();

  useEffect(() => {
    setCurrentPage(pageNumber);
  }, [pageNumber]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  const next = () => currentPage < totalPages && goToPage(currentPage + 1);
  const previous = () => currentPage > 1 && goToPage(currentPage - 1);
  const first = () => goToPage(1);
  const last = () => goToPage(totalPages);

  const totalRowsShown = Math.min(pageSize, totalRows - (currentPage - 1) * pageSize);

  return (
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <button className="page-link" onClick={first} disabled={currentPage === 1}>
          &lt;&lt;
        </button>
      </li>

      <li className="page-item">
        <button className="page-link" onClick={previous} disabled={currentPage === 1}>
          &lt;
        </button>
      </li>

      <li className="page-item active">
        <button className="page-link">{currentPage}</button>
      </li>

      {currentPage < totalPages && (
        <li className="page-item">
          <button className="page-link" onClick={() => goToPage(currentPage + 1)}>
            {currentPage + 1}
          </button>
        </li>
      )}

      <li className="page-item">
        <button className="page-link" onClick={next} disabled={currentPage >= totalPages}>
          &gt;
        </button>
      </li>

      <li className="page-item">
        <button className="page-link" onClick={last} disabled={currentPage >= totalPages}>
          &gt;&gt;
        </button>
      </li>

      <li className="page-item">
        <span className="page-link">
          {t("Showing")} : {totalRowsShown}
        </span>
      </li>
    </ul>
  );
};

export default Pagination;
