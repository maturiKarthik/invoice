/** @format */

import React, { useContext, useState } from "react";
import { Grid, Form, Icon, Button, Dropdown } from "semantic-ui-react";
import { AppContext } from "../../AppContext";
import { initialItemsList } from "../../model/initialState";

const AddItemForm = () => {
  const { pdfRenderInfo, productList, dispatch } = useContext(AppContext);
  const [item, setItem] = useState(initialItemsList);

  const handleOnChange = (event) => {
    const keyName = event.target.name;
    const value = event.target.value;
    item[keyName] = parseInt(value);
    setItem({ ...item });
  };

  const addItem = (event) => {
    item["netAmount"] = item["qty"] * item["price"];
    setItem(item);
    pdfRenderInfo["itemLists"] = [...pdfRenderInfo["itemLists"], { ...item }];
    dispatch({
      type: "addItemToList",
      value: { ...pdfRenderInfo },
    });
    onClear();
  };

  const onClear = (event) => {
    setItem(initialItemsList);
  };

  return (
    <>
      {" "}
      <Grid.Column>
        <Form.Field>
          <label>Select Products</label>
          <Dropdown
            clearable
            search
            selection
            options={productList}
            placeholder="Search existing products"
            onChange={(event, data) => {
              if (data.value !== "") {
                const itemDetail = JSON.parse(data.value);
                item["selectedItem"] = itemDetail["itemName"];
                item["qty"] = 1;
                setItem({ ...item, ...itemDetail });
              } else {
                setItem(initialItemsList);
              }
            }}
          />
        </Form.Field>
      </Grid.Column>
      <Grid.Column width={2}>
        <Form.Field size={"mini"}>
          <label>Quantity</label>
          <input
            type="number"
            min={0}
            name="qty"
            value={item["qty"]}
            onChange={(event) => handleOnChange(event)}
            placeholder="0"
          />
        </Form.Field>
      </Grid.Column>
      <Grid.Column>
        <Form.Group inline style={{ paddingTop: "21px" }}>
          <Button positive size="tiny" onClick={(event) => addItem(event)}>
            <Icon name="plus" />
            Add to Bill
          </Button>

          <Button negative size="mini" onClick={onClear}>
            <Icon name="close" />
            clear
          </Button>
        </Form.Group>
      </Grid.Column>
    </>
  );
};

export default AddItemForm;
