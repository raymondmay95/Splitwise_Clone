import React, { useEffect, useState } from "react";
import * as classes from "./bills.module.css";

function Bills({ user }) {
  // console.log(user);
  const [totalAmount, setTotalAmount] = useState(0);
  const [invoicesState, setInvoicesState] = useState([]);
  const data = user.current.invoices;
  if (data) var { invoices } = data;

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
    user && (
      <div className={classes.outer_flex}>
        <h1>Here is a list of your bills</h1>
        <br />
        <h1 className={classes.total}>Total : ${totalAmount}</h1>
        <br />
        <ul className={classes.flex}>
          {invoices &&
            invoicesState.map((invoice, i) => {
              let style = {
                backgroundImage: `url(${invoice.photo}?raw=true)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: 60,
                height: 60,
              };
              return (
                <li key={`bill${i}`} className={classes.cards}>
                  <fieldset className={classes.fieldset}>
                    <legend key={i}>{invoice.details}</legend>
                    <div style={style}></div>
                    <ul className={classes.cards}>
                      <li>amount: {invoice.amount}</li>
                      <li>group: {invoice.groupId}</li>
                      <li>updated: {invoice.updatedAt.slice(0, 10)}</li>
                    </ul>
                  </fieldset>
                </li>
              );
            })}
        </ul>
      </div>
    )
  );
}
export default Bills;
