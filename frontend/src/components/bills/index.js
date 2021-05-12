import React, { useEffect, useState } from "react";
import * as classes from "./bills.module.css";

function Bills({ user }) {
  // console.log(user);
  const [totalAmount, setTotalAmount] = useState(0);
  const [invoicesState, setInvoicesState] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const data = user.current.invoices;
  if (data) var { invoices } = data;

  function pay(e, i) {
    e.stopPropagation();
    let target = document.getElementById(i);
    let amount = e.target.value;
    setTotalAmount((prev) => prev - amount);
    user.current.accountBalance -= amount;
    target.remove();
  }

  useEffect(() => {
    if (!invoices || !invoices.length) return;
    function todo(invoice) {
      let { amount } = invoice;
      setInvoicesState((prev) => [...prev, invoice]);
      setTotalAmount((prev) => prev + amount);
      setLoaded(true);
    }
    invoices.map((invoice) => todo(invoice));
  }, [invoices]);
  return loaded ? (
    <div className={classes.outer_flex}>
      <h1>Here is a list of your bills</h1>
      <br />
      <h1 className={classes.total}>Total Due: ${totalAmount}</h1>
      <h3 className={classes.total}>
        Account Balance: ${user.current.accountBalance}
      </h3>
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
              <li id={i} key={`bill${i}`} className={classes.cards}>
                <fieldset className={classes.fieldset}>
                  <legend key={i}>{invoice.details}</legend>
                  <div style={style}></div>
                  <ul className={classes.ul_cards}>
                    <li>amount: {invoice.amount}</li>
                    <li>group: {invoice.groupId}</li>
                    <li>updated: {invoice.updatedAt.slice(0, 10)}</li>
                    <li onClick={(e) => pay(e, i)} value={invoice.amount}>
                      Pay
                    </li>
                  </ul>
                </fieldset>
              </li>
            );
          })}
      </ul>
    </div>
  ) : (
    <h1>No Bills</h1>
  );
}
export default Bills;
