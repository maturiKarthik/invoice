/** @format */

import React from "react";
import { Container, Header } from "semantic-ui-react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
import Robot from "../../fonts/RobotoCondensedRegular.ttf";
import RoboLight from "../../fonts/RobotoCondensedLight.ttf";
import RoboBold from "../../fonts/RobotoCondensedBold.ttf";

Font.register({
  family: "Roboto",
  src: Robot,
  fontWeight: "bold",
});

Font.register({
  family: "RoboLight",
  src: RoboLight,
});

Font.register({
  family: "RoboBold",
  src: RoboBold,
});

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    textAlign: "justify",
  },
  cell: {
    color: "black",
    display: "block",
    width: "180px",
    textAlign: "justify",
    fontSize: 10,
    fontFamily: "RoboLight",
  },
  tableOnlyColumn: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    padding: 10,
    fontFamily: "RoboBold",
  },
  mainHeading: {
    display: "block",
    fontSize: 11,
    fontFamily: "Roboto",
    textAlign: "justify",
  },
  tableTitle: {
    display: "block",
    width: "180px",
    fontSize: 11,
    fontFamily: "Roboto",
    textAlign: "center",
  },
  tableCell: {
    fontSize: 9,
    display: "block",
    width: "180px",
    fontFamily: "RoboLight",
    textAlign: "center",
    padding: 3,
    margin: 3,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  footer: {
    position: "absolute",
    fontSize: 9,
    textAlign: "right",
    bottom: 30,
    left: 0,
    right: 0,
    padding: 12,
  },
});

const Contact = (props) => {
  const billInfo = props.billingInfo;

  return (
    <>
      <Header>PDF Invoice</Header>
      <Container>
        <PDFViewer width={900} height={1000} showToolbar="true">
          <Document title={"Title"}>
            <Page
              size="A4"
              style={{ backgroundColor: "#fcfcfc", padding: 15 }}
              wrap
            >
              {/** Header */}
              <View>
                <View style={[styles.header, styles.row]}>
                  <View style={[styles.column, styles.cell]}>
                    <Text style={[styles.mainHeading]}>
                      {billInfo["enterpriseName"]}
                    </Text>
                    <Text>{billInfo["enterpriseAddress"]}</Text>
                  </View>
                  <View style={[styles.column, styles.cell]}>
                    <Text style={{ margin: 2, padding: 2 }}>
                      Co. No : 123456789
                    </Text>
                    <Text style={{ margin: 2, padding: 2 }}>
                      GST ID : {billInfo["enterpriseGstin"]}
                    </Text>
                    <Text style={{ margin: 2, padding: 2 }}>
                      Phone : {billInfo["enterprisePhoneNumber"]}
                    </Text>
                    <Text style={{ margin: 2, padding: 2 }}>
                      Mail : {billInfo["enterpriseEmail"]}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }}
                />
                <View>
                  <Text style={[styles.title]}>TAX INVOICE</Text>
                </View>
                {/* EOD - Header*/}

                {/** Main */}
                <View style={[styles.row]}>
                  <View style={[styles.column, styles.cell]}>
                    <Text style={[styles.mainHeading]}>Bill To :</Text>
                    <Text>{billInfo["shippingAddress"]}</Text>
                    <View style={[styles.column, styles.cell]}>
                      <Text style={{ margin: 1, padding: 1 }}>
                        GST ID: {billInfo["gstin"]}
                      </Text>
                      <Text style={{ margin: 1, padding: 1 }}>
                        Contact Name: {billInfo["name"]}
                      </Text>
                      <Text style={{ margin: 1, padding: 1 }}>
                        Tel: {billInfo["phone"]}
                      </Text>
                    </View>
                  </View>

                  <View style={[styles.column, styles.cell]}>
                    <Text style={{ margin: 2, padding: 2 }}>
                      Invoice No: VJ20130801
                    </Text>
                    <Text style={{ margin: 2, padding: 2 }}>
                      Invoice Date: {billInfo["invoiceDate"]}
                    </Text>
                    <Text style={{ margin: 2, padding: 2 }}>
                      Payment Term: 21 days
                    </Text>
                    <Text style={{ margin: 2, padding: 2 }}>
                      Due Date: {billInfo["dueDate"]}
                    </Text>
                  </View>
                </View>

                {/**EOD - Main */}
                {/** Table Header */}
                <View style={[styles.row]}>
                  <Text style={[styles.tableTitle]}>Item</Text>
                  <Text style={[styles.tableTitle]}>Description</Text>
                  <Text style={[styles.tableTitle]}>Quantity</Text>
                  <Text style={[styles.tableTitle]}>Taxes</Text>
                  <Text style={[styles.tableTitle]}>Unit Prices</Text>
                  <Text style={[styles.tableTitle]}>Disc.(%)</Text>
                  <Text style={[styles.tableTitle]}>Price</Text>
                </View>
                {/**EOD - Table Header */}
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: 2,
                  }}
                />
                {/** Table Content */}
                {billInfo["itemLists"].map((data, index) => {
                  return (
                    <View style={[styles.row]} key={index}>
                      <Text style={[styles.tableCell]}>{index + 1} .</Text>
                      <Text style={[styles.tableCell]}>
                        {data["description"]}
                      </Text>
                      <Text style={[styles.tableCell]}>
                        {data["qty"] + data["unit"]}
                      </Text>
                      <Text style={[styles.tableCell]}>Tx</Text>
                      <Text style={[styles.tableCell]}>
                        {data["price"]}/{data["unit"]}
                      </Text>
                      <Text style={[styles.tableCell]}>
                        {data["discount"]}%
                      </Text>
                      <Text style={[styles.tableCell]}>
                        {data["netAmount"]}
                      </Text>
                    </View>
                  );
                })}

                {/**EOD - Table Content */}

                {/** Row - 6 Border */}
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: 2,
                  }}
                />
                <View style={[styles.row]}>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableCell]}>Net Total(Excl.GST)</Text>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableCell]}>
                    {billInfo["taxableAmount"]}
                  </Text>
                </View>
                {/** Row - 9  */}
                {/** Row - 6 Border */}

                <View style={[styles.row]}>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableCell]}>
                    GST Tax@({billInfo["gst"]}%)
                  </Text>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableCell]}>
                    {billInfo["gstAmount"]}
                  </Text>
                </View>

                {/** Row - 6 Border */}
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }}
                />

                <View style={[styles.row]}>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableTitle]}>Total(Incl GST.)</Text>
                  <Text style={[styles.tableCell]}></Text>
                  <Text style={[styles.tableTitle]}>
                    {billInfo["totalAmount"]}
                  </Text>
                </View>
              </View>
              {/** Footer */}
              <View style={styles.footer}>
                <View style={styles.tableOnlyColumn}>
                  <Text style={styles.footer}>Authorized Signature .</Text>
                  <View
                    style={[
                      styles.row,
                      {
                        height: 10,
                        width: "100vw",
                        padding: 2,
                        marginTop: 6,
                        borderTop: "2px solid black",
                      },
                    ]}
                  ></View>
                  <Text>
                    Terms & condition :Payment of undisputed amounts shall be
                    due twelve (12) days after the date of receipt of invoice
                  </Text>
                  <Text style={{ textDecoration: "underline" }}>
                    Thank you for business
                  </Text>
                </View>
              </View>
              {/** EOD - Footer */}
            </Page>
          </Document>
        </PDFViewer>
      </Container>
    </>
  );
};

export default Contact;
