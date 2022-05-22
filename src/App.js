/** @format */

import React, { useEffect, useState, useReducer } from "react";
import Nav from "./component/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Billing from "./component/billing";
import ItemSideBar from "./component/sidebar/ItemSideBar";
import { Sidebar, Segment } from "semantic-ui-react";
import CustomerSideBar from "./component/sidebar/CustomerSideBar";
import Profile from "./component/profile";
import { AppContext } from "./component/AppContext";
import { initialState } from "./component/model/initialState";
import { PdfRenderReducer } from "./component/reducer/PdfRenderReducer";

function App(props) {
  const CUSTOMER_LIST_KEY = "Customer_List";
  const PRODUCT_LIST_KEY = "Product_List";

  const [customerSideBar, showCustomerSideBar] = useState(false);
  const [productSideBar, showProductSideBar] = useState(false);
  const [dim, showDim] = useState(false);
  const [pdfRenderInfo, dispatch] = useReducer(PdfRenderReducer, initialState);
  const [customerList, setCustomerList] = useState(() => {
    const localCustomerStorage = localStorage.getItem(CUSTOMER_LIST_KEY);
    return localCustomerStorage ? JSON.parse(localCustomerStorage) : [];
  });

  const [productList, setProductList] = useState(() => {
    const localProductState = localStorage.getItem(PRODUCT_LIST_KEY);
    return localProductState ? JSON.parse(localProductState) : [];
  });

  useEffect(() => {
    console.log(pdfRenderInfo);
  }, [pdfRenderInfo, productList, customerList]);

  return (
    <>
      <AppContext.Provider
        value={{
          pdfRenderInfo,
          dispatch,
          customerList,
          setCustomerList,
          customerSideBar,
          showCustomerSideBar,
          productSideBar,
          showProductSideBar,
          dim,
          showDim,
          productList,
          setProductList,
          PRODUCT_LIST_KEY,
          CUSTOMER_LIST_KEY,
        }}
      >
        <BrowserRouter>
          <Sidebar.Pushable
            as={Segment}
            style={{ height: "100vh", transform: "none" }}
          >
            <CustomerSideBar />
            <ItemSideBar />
            <Sidebar.Pusher dimmed={dim}>
              <Nav />
              <Switch>
                <Route path="/billing" render={(props) => <Billing />} />
                <Route path={"/profile"} render={(props) => <Profile />} />
              </Switch>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
