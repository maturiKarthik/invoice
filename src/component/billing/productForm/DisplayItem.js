/** @format */

import React, { useContext } from "react";
import { Header, Icon, Table, Input, Form, Button } from "semantic-ui-react";
import { AppContext } from "../../AppContext";

const DisplayItem = () => {
  const { pdfRenderInfo, dispatch } = useContext(AppContext);
  const billingInfo = pdfRenderInfo["itemLists"];
  const removeItem = (event, itemIndex) => {
    const newItemList = pdfRenderInfo["itemLists"].filter(
      (data, index) => index !== itemIndex
    );
    pdfRenderInfo["itemLists"] = newItemList;
    dispatch({
      type: "removeItemFromList",
      value: { ...pdfRenderInfo },
    });
  };

  const handleOnUpdate = (event, index, productKey) => {
    const itemList = pdfRenderInfo["itemLists"];
    const element = itemList[index];
    element[productKey] = parseInt(event.target.value);
    const totalPrice = element["qty"] * element["price"];
    const discountPrice = (totalPrice / 100) * element["discount"];
    element["discountAmount"] = parseFloat(
      Math.round(discountPrice * 100) / 100
    );
    element["netAmount"] = parseFloat(totalPrice - discountPrice);
    itemList[index] = element;
    pdfRenderInfo["itemLists"] = [...itemList];
    dispatch({
      type: "updateItemInList",
      itemIndex: index,
      value: { ...pdfRenderInfo },
      productKey: "qty",
    });
  };

  return (
    <>
      <Table
        basic="very"
        singleLine
        textAlign="center"
        padded
        celled
        compact="very"
        size="small"
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Product Quantity </Table.HeaderCell>
            <Table.HeaderCell> Price Per Unit </Table.HeaderCell>
            <Table.HeaderCell>Price with Tax</Table.HeaderCell>
            <Table.HeaderCell>Discount(%)</Table.HeaderCell>
            <Table.HeaderCell>
              Discount <Icon name="rupee" size="small" />
            </Table.HeaderCell>
            <Table.HeaderCell>Net Amount</Table.HeaderCell>
            <Table.HeaderCell>Tax Amount</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {billingInfo.map((data, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>
                  <Header size={"tiny"}>{data["itemName"]}</Header>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    type="number"
                    min={0}
                    placeholder={0}
                    value={data["qty"]}
                    onChange={(event) => handleOnUpdate(event, index, "qty")}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Form.Field>
                    <Input
                      type={"number"}
                      min={0}
                      placeholder={0}
                      value={data["price"]}
                      onChange={(event) =>
                        handleOnUpdate(event, index, "price")
                      }
                    />
                  </Form.Field>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    min={0}
                    placeholder={0}
                    type="number"
                    value={data["price"]}
                    onChange={(event) => handleOnUpdate(event, index, "price")}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    type="number"
                    min={0}
                    placeholder={0}
                    value={data["discount"]}
                    onChange={(event) =>
                      handleOnUpdate(event, index, "discount")
                    }
                  />
                </Table.Cell>
                <Table.Cell>
                  {/** discount Price value */}
                  {data["discountAmount"]}
                </Table.Cell>
                <Table.Cell>
                  {/** Net Amount */}
                  {data["netAmount"]}
                </Table.Cell>
                <Table.Cell>{/** Tax Amount value */}0.00(0%)</Table.Cell>
                <Table.Cell>
                  {/** Total */}
                  {data["netAmount"]}
                </Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={(event) => removeItem(event, index)}
                    size="mini"
                    icon="trash alternate outline"
                    style={{ color: "red" }}
                  />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default DisplayItem;
