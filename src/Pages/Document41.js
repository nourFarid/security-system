import { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../Components/Layout/Breadcrumb";
import Table from "../Components/Layout/Table";
import useTranslate from "../Hooks/Translation/useTranslate";
import Pagination from '../Components/Layout/Pagination';

const DocumentType = () => {
  const { t } = useTranslate();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(5);
  const [totalCount, setTotalCount] = useState(0);
  /* 
    const objTitle = useMemo(
      () => ({
        AddDocumentType: t("Add Document Type"),
        EditDocumentType: t("Edit Document Type"),
        Name: t("Name"),
        Code: t("Code"),
        Save: t("Save"),
        Cancel: t("Cancel"),
        Delete: t("Delete"),
        DeleteConfirmation: t("Are you sure to delete"),
        QuestionMark: t("?"),
        Filter: t("Filter"),
        Reset: t("Reset"),
      }),
      [t]
    );
   */
  const breadcrumbItems = [
    { label: t("Document 41"), link: "/Document41", active: false }
  ];

  const breadcrumbButtons = [
    {
      label: t("Add"),
      icon: "bi bi-plus-circle",
      link: "/Document41/Add",
      class: "btn btn-sm btn-success ms-2 float-end"
    },
  ];

  const columns = [
    { label: t("Code"), accessor: "code" },
    { label: t("Tax Registration Number"), accessor: "supplier.taxRegistrationNumber" },
    { label: t("National ID"), accessor: "supplier.nationalId" },
    { label: t("Supplier Name"), accessor: "supplier.name" },
    { label: t("Address"), accessor: "supplier.address" },
    { label: t("Errand Name"), accessor: "errand.name" },
    { label: t("Errand Code"), accessor: "errand.code" },
    { label: t("Transaction Date"), accessor: "transactionDate" },
    { label: t("Nature of Transaction"), accessor: "transactionNature.name" },
    { label: t("Total Transaction Value"), accessor: "totalAmount" },
    { label: t("Deduction Type"), accessor: "transactionNature.code" },
    { label: t("Collection Date"), accessor: "collectionDate" },
    { label: t("Net Amount"), accessor: "netAmount" },
    { label: t("Deduction Percentage"), accessor: "transactionNature.deductionPercentage" },
    { label: t("Fiscal Year From"), accessor: "fiscalYear.dateFrom" },
    { label: t("Fiscal Year To"), accessor: "fiscalYear.dateTo" }
  ];


  const data = [
    {
      code: "TXN001",
      supplier: {
        taxRegistrationNumber: "123456789",
        nationalId: "29805141234567",
        name: "Ali Mahmoud",
        address: "Cairo, Egypt"
      },
      errand: {
        name: "Nasr City Tax Office",
        code: "ERR001"
      },
      transactionDate: "2025-11-01",
      transactionNature: {
        name: "Service Payment",
        code: "SRV001",
        deductionPercentage: 10
      },
      totalAmount: 15000.0,
      collectionDate: "2025-11-03",
      netAmount: 13500.0,
      fiscalYear: {
        dateFrom: "2025-01-01",
        dateTo: "2025-12-31"
      }
    },
    {
      code: "TXN001",
      supplier: {
        taxRegistrationNumber: "123456789",
        nationalId: "29805141234567",
        name: "Ali Mahmoud",
        address: "Cairo, Egypt"
      },
      errand: {
        name: "Nasr City Tax Office",
        code: "ERR001"
      },
      transactionDate: "2025-11-01",
      transactionNature: {
        name: "Service Payment",
        code: "SRV001",
        deductionPercentage: 10
      },
      totalAmount: 15000.0,
      collectionDate: "2025-11-03",
      netAmount: 13500.0,
      fiscalYear: {
        dateFrom: "2025-01-01",
        dateTo: "2025-12-31"
      }
    }
  ];

  useEffect(() => {
    // fetch data here if needed
  }, []);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} button={breadcrumbButtons} />

      <Table
        columns={columns}
        data={data}
        showActions={false}
        onEdit={() => { }}
        showShow={false}
        onShow={() => { }}
        onDelete={() => { }}
      />
      <Pagination
        pageNumber={pageNumber}
        pageSize={pageSize}
        totalRows={totalCount}
        onPageChange={setPageNumber}
      />
    </>
  );
};

export default DocumentType;
