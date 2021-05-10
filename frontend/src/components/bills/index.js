import React, { useEffect, useState } from "react";
import * as classes from "./bills.module.css";

function Bills({ user }) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [invoicesState, setInvoicesState] = useState([]);
  const { invoices } = user;

  useEffect(() => {
    if (!invoices || !invoices.length) return;
    function todo(invoice) {
      let { amount } = invoice;
      setInvoicesState((prev) => [...prev, invoice]);
      setTotalAmount((prev) => prev + amount);
    }
    invoices.map((invoice) => todo(invoice));
  }, [invoices]);
  return (
    <>
      <h1>Here is a list of your bills</h1>
      <h1 className={classes.total}>Total : {totalAmount}</h1>
      <ul className={classes.flex}>
        {invoices &&
          invoicesState.map((invoice, i) => {
            let style = {
              backgroundImage: `url(${invoice.photo}?raw=true)`,
              backgroundPosition: "cover",
              width: "200px",
              height: "200px",
            };
            return (
              <li key={`bill${i}`} className={classes.cards}>
                <fieldset className={classes.fieldset}>
                  <legend key={i}>{invoice.details}</legend>
                  <div style={style}></div>
                </fieldset>
              </li>
            );
          })}
      </ul>
    </>
  );
}
export default Bills;
