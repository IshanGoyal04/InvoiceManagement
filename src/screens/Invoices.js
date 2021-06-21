import { useEffect, useState } from "react";
import BillForm from "../components/BillingForm";
import ProductForm from "../components/ProductDetailForm";

const Invoice = () => {
  //we are defining different dtates to manage the data in the invoice field
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [currency, setCurrency] = useState("");
  const [region, setRegion] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [igst, setIgst] = useState(0);
  const [gst, setGst] = useState(0);
  const [sgst, setSgst] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSaveClicked(true);
  };

  useEffect(() => {
    // here we are checking for the condition if the city is haryana then different gst will be applied and if other then haryana different gst will be applied
    if (region === "Haryana") {
      setGst(0.09 * parseInt(subtotal));
      setSgst(0.09 * parseInt(subtotal));
    } else if (region === "Other") {
      setIgst(0.18 * parseInt(subtotal));
    }
    setTotal(subtotal + igst + gst + sgst);
  }, [subtotal, region, total, sgst, igst, gst]);

  return (
    <div className="invoice-container">
      <div className="invoice-action">
        <div>
          <div>
            <label>Select Currency</label>
            <select
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            >
              <option value="USD">$</option>
              <option value="INR">&#8377;</option>
            </select>
          </div>

          {currency === "INR" ? (
            <div>
              <label>Select State</label>
              <select
                onChange={(e) => {
                  setRegion(e.target.value);
                }}
              >
                <option value="Haryana">Haryana</option>
                <option value="Other">Out of Haryana</option>
              </select>
            </div>
          ) : (
            <div>
              <label>Select State</label>
              <select onChange={(e) => {}} disabled>
                <option value="Haryana">Haryana</option>
                <option value="Other">Out of Haryana</option>
              </select>
            </div>
          )}
        </div>
        <div className="buttons">
          <button>Preview</button>
          <button onClick={submitHandler}>Save</button>
          <button className="draft">Save as Draft</button>
        </div>
      </div>
      <div className="invoice-form">
        <div className="date">
          <p>Date: 12-04-2021</p>
          <p>Due Date : 12-04-2021</p>
        </div>
        <hr style={{ color: "#E6E8EF" }} />
        <div className="creator">
          <h4>Created By:</h4>
          <select>
            <option>Amit</option>
            <option>Shivani</option>
            <option>Niranjan</option>
          </select>
        </div>
        <div className="detail">
          <div>
            <h4>Bill to:</h4>
          </div>
          <div>
            <BillForm clicked={isSaveClicked}></BillForm>
          </div>
        </div>
        <hr style={{ color: "#E6E8EF" }} />
        {currency && region ? (
          <div>
            <div>
              <ProductForm getTotal={setSubtotal}></ProductForm>
            </div>

            <hr style={{ color: "#E6E8EF" }} />
            <div className="price">
              <table className="data">
                <tbody>
                  {currency === "INR" ? (
                    <>
                      <tr>
                        <td>Subtotal</td>
                        <td>&#8377; {subtotal}</td>
                      </tr>

                      {region === "Haryana" ? (
                        <>
                          <tr>
                            <td>SGST@9%</td>
                            <td>&#8377; {sgst}</td>
                          </tr>
                          <tr>
                            <td>GST@9%</td>
                            <td>&#8377; {gst}</td>
                          </tr>
                        </>
                      ) : (
                        <tr>
                          <td>IGST@18%</td>
                          <td>&#8377; {igst}</td>
                        </tr>
                      )}
                    </>
                  ) : (
                    <>
                      <tr>
                        <td>Subtotal</td>
                        <td>&#8377; {subtotal}</td>
                      </tr>
                      <tr>
                        <td>IGST@18%</td>
                        <td>&#8377; {igst}</td>
                      </tr>
                    </>
                  )}

                  <tr>
                    <td>Total</td>
                    <td>
                      {currency} {total}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          "Please select state and currency"
        )}
        <hr style={{ color: "#E6E8EF" }} />
        <div className="bank-details">
          <div className="bank">
            <p>PAN Number : DDABC0760F</p>
            <p>PAN Number : DDABC0760F</p>
            <p>PAN Number : DDABC0760F</p>
            <p>PAN Number : DDABC0760F</p>
          </div>
          <div className="points">
            <p>Points to Remember</p>
            <textarea type="text" id="points"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
