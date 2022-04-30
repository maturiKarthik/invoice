/** @format */

import React, { useContext } from "react";
import { Header, Icon, Table, Input, Form, Button } from "semantic-ui-react";
import BillingContext from "../BillingContext";

const DisplayItem = () => {
  const { billingInfo, dispatch } = useContext(BillingContext);

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
          {billingInfo["itemLists"].map((data, index) => {
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
                    onChange={(event) => {
                      dispatch({
                        type: "update",
                        itemIndex: index,
                        value: parseFloat(event.target.value),
                        productKey: "qty",
                      });
                    }}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Form.Field>
                    <input
                      type={"number"}
                      min={0}
                      placeholder={0}
                      value={data["price"]}
                      onChange={(event) => {
                        dispatch({
                          type: "update",
                          itemIndex: index,
                          value: parseFloat(event.target.value),
                          productKey: "price",
                        });
                      }}
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
                    onChange={(event) =>
                      dispatch({
                        type: "update",
                        itemIndex: index,
                        value: parseFloat(event.target.value),
                        productKey: "price",
                      })
                    }
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
                      dispatch({
                        type: "update",
                        itemIndex: index,
                        value: parseFloat(event.target.value),
                        productKey: "discount",
                      })
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
                    onClick={(event) =>
                      dispatch({ type: "remove", value: index })
                    }
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
