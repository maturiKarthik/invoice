/** @format */
import CurrentDate from "../billing/CurrentDate";

export const initialState = {
  enterpriseDetails: {},
  customerDetail: {},
  invoiceDate: CurrentDate,
  dueDate: CurrentDate,
  refText: "",
  gst: 0,
  gstAmount: 0,
  itemLists: [],
  taxableAmount: 0,
  totalAmount: 0,
  items: 0,
  itemsQuantity: 0,
};

export const initialItemsList = {
  selectedItem: "",
  qty: 0,
  discount: 0,
  discountAmount: 0,
  netAmount: 0,
};

export const customerInitialState = {
  name: "",
  phone: "",
  email: "",
  gstin: "",
  company: "",
  baddress1: "",
  baddress2: "",
  bcity: "",
  bcstate: "",
  bpincode: "",
  shipping: false,
  saddress1: "",
  saddress2: "",
  scity: "",
  scstate: "",
  spincode: "",
};

export const productInitialState = {
  itemName: "",
  price: 0,
  barcode: "",
  unit: "",
  description: "",
  text: "",
};
