/** @format */

import React, { useEffect, useState } from "react";
import Nav from "./component/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Billing from "./component/billing";
import ItemSideBar from "./component/sidebar/ItemSideBar";
import { Sidebar, Segment } from "semantic-ui-react";
import CustomerSideBar from "./component/sidebar/CustomerSideBar";
import { v4 as uuid_v4 } from "uuid";
import Contact from "./component/pdfRender";
import Profile from "./component/profile";

import productTestData from "./component/model/ProductTestData";

function App(props) {
  const CUSTOMER_LIST_KEY = "Customer_List";

  const [show, showSideBar] = useState(false);
  const [showP, showPSideBar] = useState(false);
  const [dim, showDim] = useState(false);
  const [billingInfo, setBillingInfo] = useState();
  const [customerList, setCustomerList] = useState(() => {
    const localCustomerStorage = localStorage.getItem(CUSTOMER_LIST_KEY);
    return localCustomerStorage ? JSON.parse(localCustomerStorage) : [];
  });

  const customerSideBarHandler = (data) => {
    showSideBar(!show);
    showDimm();
    if (data !== undefined) {
      const customerListObj = {
        key: uuid_v4(),
        value: JSON.stringify(data),
        text: data.name,
      };

      setCustomerList([...customerList, customerListObj]);
      /** Store customer to LocalStora */
      localStorage.setItem(
        CUSTOMER_LIST_KEY,
        JSON.stringify([...customerList, customerListObj])
      );
    }
  };

  const productSideBarHandler = () => {
    showPSideBar(!showP);
    showDimm();
  };

  const showDimm = () => {
    showDim(!dim);
  };

  useEffect(() => {}, [customerList, billingInfo]);

  const fetchBillingInfoHandler = (data) => {
    const storedCompanyProfile = JSON.parse(
      localStorage.getItem("company_info")
    );
    setBillingInfo({
      ...storedCompanyProfile,
      ...data,
    });
  };

  return (
    <>
      <BrowserRouter>
        <Sidebar.Pushable
          as={Segment}
          style={{ height: "100vh", transform: "none" }}
        >
          <CustomerSideBar
            show={show}
            customerSideBarHandler={customerSideBarHandler}
          />
          <ItemSideBar
            show={showP}
            productSideBarHandler={productSideBarHandler}
          />

          <Sidebar.Pusher dimmed={dim}>
            <Nav />
            <Switch>
              <Route
                path="/billing"
                render={(props) => (
                  <Billing
                    customerSideBarHandler={customerSideBarHandler}
                    productSideBarHandler={productSideBarHandler}
                    customerList={customerList}
                    productsList={productTestData}
                    fetchBillingInfoHandler={fetchBillingInfoHandler}
                  />
                )}
              />
              <Route path={"/profile"} render={(props) => <Profile />} />
            </Switch>
            {billingInfo !== undefined ? (
              <Contact billingInfo={billingInfo} />
            ) : (
              ""
            )}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </BrowserRouter>
    </>
  );
}

export default App;
