import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactInfo.css";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Enter your first name"),
  lastName: Yup.string().required("Enter your last name"),
  email: Yup.string().email().required("Enter your email"),
  phone: Yup.string()
    .matches(/^[0-9]+$/)
    .min(10)
    .max(13)
    .required("Enter your phone number"),
});

const ContactInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, totalSum } = location.state || {};

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const handleSubmit = (values) => {
   navigate("/shipment_information", {
    state: {
        contactInfo: values,
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
        <div className="contact-info-page">
          <h2>Contact information</h2>
          <div className="contact-field">
            <div className="firstName-field input-styles">
              <label htmlFor="firstName">First name*</label>
              <Field
                name="firstName"
                type="text"
                placeholder="Enter your first name"
              />
              <ErrorMessage name="firstName" component="div"className="error" />
            </div>
            <div className="lastName-field input-styles">
              <label htmlFor="lastName">Last name*</label>
              <Field
                name="lastName"
                type="text"
                placeholder="Enter your last name"
              />
                <ErrorMessage name="lastName" component="div"className="error" />

            </div>
            <div className="email-field input-styles">
              <label htmlFor="email">Email*</label>
              <Field name="email" type="text" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div"className="error" />
            </div>
            <div className="phone-field input-styles">
              <label htmlFor="phone">Phone*</label>
              <Field name="phone" type="text" placeholder="Enter your phone" />
              <ErrorMessage name="phone" component="div"className="error" />
            </div>
          </div>
          <button type="submit" disabled={!(isValid && dirty)}>Next step</button>
        </div>
      </Form>
      )}
    </Formik>
  );
};

export default ContactInfo;
