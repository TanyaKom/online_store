import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ShipmentInfo.css";

const validationSchema = Yup.object({
  address: Yup.string().required("Enter your address"),
  apartment: Yup.string(),
  city: Yup.string().required("Enter your city"),
  country: Yup.string().required("Choose your country"),
  state: Yup.string().required("Choose your state"),
  zip: Yup.string().required("Enter your zip"),
});

const ShipmentInfo = () => {
  const navigate = useNavigate();
const location = useLocation();
const { contactInfo, cartItems, totalSum } = location.state || {};

  const initialValues = {
    address: "",
    apartment: "",
    city: "",
    country: "",
    state: "",
    zip: "",
  };

  const handleSubmit = (values) => {
    navigate("/order", {
        state: {
            shipmentInfo: values,
            contactInfo: contactInfo,
            cartItems: cartItems,
            totalSum: totalSum,
        },
    });
};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty }) => (
      <Form>
        <div className="shipment-info-page">
          <h2>Shipment information</h2>
          <div className="address-field">
            <div className="fields">
              <div className="city-address-field">
                <div className="address-info styles">
                  <label htmlFor="address">Address (No P.O.Boxes)*</label>
                  <Field
                    name="address"
                    type="text"
                    placeholder="Enter your address"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="app-info styles">
                  <label htmlFor="apartment">
                    Apartment, suite etc. (optional)
                  </label>
                  <Field
                    name="apartment"
                    type="text"
                    placeholder="Enter your appartment information"
                  />
                  <ErrorMessage
                    name="apartment"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="city-info styles">
                  <label htmlFor="city">City*</label>
                  <Field
                    name="city"
                    type="text"
                    placeholder="Enter your city"
                  />
                  <ErrorMessage name="city" component="div" className="error" />
                </div>
              </div>

              <div className="main-fields">
                <div className="country-info styles">
                  <label htmlFor="country/region">Country/Region*</label>
                  <Field as="select" name="country">
                    <option value="" label="Select your country/region" />
                    <option value="USA" label="USA" />
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="state-info styles">
                  <label htmlFor="state">State*</label>
                  <Field as="select" name="state">
                    <option value="Texas" label="Select your state" />
                    <option value="California" label="California" />
                    <option value="New Mexico" label="New Mexico" />
                    <option value="Colorado" label="Colorado" />
                    <option value="Michigan" label="Michigan" />
                    <option value="Washington" label="Washington" />
                  </Field>
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="zip-info styles">
                  <label htmlFor="zip">ZIP code*</label>
                  <Field
                    name="zip"
                    type="text"
                    placeholder="Enter your ZIP code"
                  />
                  <ErrorMessage name="zip" component="div" className="error" />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" disabled={!(isValid && dirty)}>Submit order</button>
        </div>
      </Form>
      )}
    </Formik>
  );
};
export default ShipmentInfo;
