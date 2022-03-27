import React, { useState } from "react";
import {
  Container,
  Form,
  Segment,
  Input,
  Select,
  Button,
  Icon,
  Label,
} from "semantic-ui-react";

const metric = [
  { key: 1, value: "g", text: "Grams" },
  { key: 2, value: "Kg", text: "Kg" },
  { key: 2, value: "ton", text: "TON Tonnes" },
  { Key: 3, value: "L", text: "Litres" },
];

const ProductForm = (props) => {
  const [prodDetail, setProductDetail] = useState({
    product: "",
    qty: 0,
  });

  const addProductDetail = () => {
    console.log(prodDetail);
    props.displaySidePBar();
  };

  return (
    <>
      <Container text>
        <Segment raised placeholder size="small">
          <Form>
            <Form.Group widths={"equal"}>
              <Form.Field>
                <label>Select Product</label>
                <Input
                  type={"text"}
                  size="mini"
                  value={prodDetail.product}
                  onChange={(event) =>
                    setProductDetail({
                      ...prodDetail,
                      product: event.target.value,
                    })
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Quantity</label>
                <Input
                  type="number"
                  placeholder="Qty"
                  size="mini"
                  value={prodDetail.qty}
                  onChange={(event) =>
                    setProductDetail({ ...prodDetail, qty: event.target.value })
                  }
                />
              </Form.Field>

              <Form.Field>
                <Form.Group widths={"equal"}>
                  <Button
                    content="Add to Bill"
                    icon="add"
                    color="teal"
                    size="mini"
                    onClick={addProductDetail}
                  />
                  <Button
                    content="clear"
                    icon="close"
                    size="mini"
                    style={{ color: "#5A0A00" }}
                  />
                </Form.Group>
              </Form.Field>
            </Form.Group>
          </Form>
        </Segment>
      </Container>
    </>
  );
};

export default ProductForm;
