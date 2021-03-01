import { useSelector } from "react-redux";

function INVOICE_COMPONENT({ setReup }) {
  const invoices = useSelector((state) => state.invoices);

  function payHandler(e, amount) {
    e.preventDefault();
    setReup((reup) => reup - amount);
  }

  let elements = <div></div>;
  if (Array.isArray(invoices)) {
    elements = invoices.map((ele) => (
      <ul className="invoice_container">
        <li class="invoice">{ele.details}</li>
        <li class="amount">
          ${ele.amount}
          <button onClick={(e) => payHandler(e, ele.amount)} id="pay-btn">
            pay
          </button>
        </li>
      </ul>
    ));
  }
  return <div>{elements}</div>;
}
export default INVOICE_COMPONENT;
