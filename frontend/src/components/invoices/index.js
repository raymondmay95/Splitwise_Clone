import { useState } from "react";
import { useSelector } from "react-redux";
import DashboardSidebar from "../DashboardSidebar";

function Invoice_Component() {
  const invoices = useSelector((state) => state.invoices);
  let elements = <div></div>;
  if (Array.isArray(invoices)) {
    elements = invoices.map((ele) => (
      <ul className="invoice_container">
        <li class="invoice">{ele.details}</li>
        <li class="amount">${ele.amount}</li>
      </ul>
    ));
  }
  return <div>{elements}</div>;
}
export default Invoice_Component;
