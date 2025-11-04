import { useState, useEffect } from "react";
import Table from "../Components/Layout/Table";
import Pagination from "../Components/Layout/Pagination";
import axiosInstance from "../Axios/AxiosInstance";

const ExamplePage = () => {
  const [departments, setDepartments] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(5);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDepartments = async (page = 1) => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("Department/paged", {
        params: { pageNumber: page, pageSize },
      });
      const data = res.data;
      setDepartments(data.items);
      setTotalCount(data.totalCount);
      setPageNumber(data.pageNumber);
    } catch (e) {
      setError("Failed to fetch departments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments(pageNumber);
  }, [pageNumber]);

  const columns = [
    { label: "Department ID", accessor: "departmentId" },
    { label: "Department Name", accessor: "departmentName" },
    { label: "Available", accessor: "available" },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Table columns={columns} data={departments} showActions={false} />
      <Pagination
        pageNumber={pageNumber}
        pageSize={pageSize}
        totalRows={totalCount}
        onPageChange={setPageNumber}
      />
    </>
  );
};

export default ExamplePage;
