import React, { useEffect, useState } from "react";
import Nav from "./component/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Billing from "./component/billing";
import ItemSideBar from "./component/billing/ItemSideBar";
import { Sidebar, Segment } from "semantic-ui-react";
import CustomerSideBar from "./component/billing/CustomerSideBar";
import { v4 as uuid_v4 } from "uuid";

function App(props) {
  const CUSTOMER_LIST_KEY = "Customer_List";

  const [show, showSideBar] = useState(false);
  const [showP, showPSideBar] = useState(false);
  const [dim, showDim] = useState(false);
  const storedCustomerData = JSON.parse(
    localStorage.getItem(CUSTOMER_LIST_KEY)
  );

  const [customerList, setCustomerList] = useState(
    storedCustomerData.length > 0 ? [...storedCustomerData] : []
  );

  const customerSideBarHandler = (data) => {
    showSideBar(!show);
    showDimm();
    if (data != undefined) {
      const customerListObj = {
        key: uuid_v4(),
        value: JSON.stringify(data),
        text: data.name,
      };

      setCustomerList([...customerList, customerListObj]);
    }
  };

  const productSideBarHandler = () => {
    showPSideBar(!showP);
    showDimm();
  };

  const showDimm = () => {
    showDim(!dim);
  };

  /** Store customer to LocalStora */
  useEffect(() => {
    //console.log(customerList);

    if (customerList.length > 0) {
      localStorage.setItem(CUSTOMER_LIST_KEY, JSON.stringify(customerList));
    }
  }, [customerList]);

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
                render={(props) => (
                  <Billing
                    customerSideBarHandler={customerSideBarHandler}
                    productSideBarHandler={productSideBarHandler}
                    customerList={customerList}
                  />
                )}
              />
            </Switch>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </BrowserRouter>
    </>
  );
}

export default App;
