import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export const Register = () => {
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center text-primary align-items-center h-100">
          <div
            className="col-md-8 col-lg-6 col-xl-4 mt-2 p-4 rounded"
            style={{ background: "#b8d1d1" }}
          >
            <h2 className="text-center mb-4">Register</h2>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                password: "",
                phone: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string().required("First Name is required!"),
                lastName: Yup.string().required("Last Name is required!"),
                username: Yup.string().required("Username is required!"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is Required!"),
                password: Yup.string()
                  .min(6, "Password must be at least 6 characters")
                  .required("Enter your password!"),
                phone: Yup.string().required("Enter your phone number!"),
              })}
              onSubmit={(values) => {
                console.log("Form values:", values);
              }}
            >
              {(formikProps) => (
                <Form>
                  <div className="form-outline mb-4">
                    <input
                      name="firstName"
                      type="text"
                      className={`form-control form-control-lg ${
                        formikProps.errors.firstName &&
                        formikProps.touched.firstName
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter your first name"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.firstName}
                    />
                    {formikProps.errors.firstName &&
                      formikProps.touched.firstName && (
                        <div className="invalid-feedback">
                          {formikProps.errors.firstName}
                        </div>
                      )}
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      name="lastName"
                      type="text"
                      className={`form-control form-control-lg ${
                        formikProps.errors.lastName &&
                        formikProps.touched.lastName
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter your last name"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.lastName}
                    />
                    {formikProps.errors.lastName &&
                      formikProps.touched.lastName && (
                        <div className="invalid-feedback">
                          {formikProps.errors.lastName}
                        </div>
                      )}
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      name="username"
                      type="text"
                      className={`form-control form-control-lg ${
                        formikProps.errors.username &&
                        formikProps.touched.username
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter your username"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.username}
                    />
                    {formikProps.errors.username &&
                      formikProps.touched.username && (
                        <div className="invalid-feedback">
                          {formikProps.errors.username}
                        </div>
                      )}
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      name="email"
                      type="email"
                      className={`form-control form-control-lg ${
                        formikProps.errors.email && formikProps.touched.email
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter a valid email address"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.email}
                    />
                    {formikProps.errors.email && formikProps.touched.email && (
                      <div className="invalid-feedback">
                        {formikProps.errors.email}
                      </div>
                    )}
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      name="password"
                      type="password"
                      className={`form-control form-control-lg ${
                        formikProps.errors.password &&
                        formikProps.touched.password
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter password"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.password}
                    />
                    {formikProps.errors.password &&
                      formikProps.touched.password && (
                        <div className="invalid-feedback">
                          {formikProps.errors.password}
                        </div>
                      )}
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      name="phone"
                      type="text"
                      className={`form-control form-control-lg ${
                        formikProps.errors.phone && formikProps.touched.phone
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter your phone number"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.phone}
                    />
                    {formikProps.errors.phone && formikProps.touched.phone && (
                      <div className="invalid-feedback">
                        {formikProps.errors.phone}
                      </div>
                    )}
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Register
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};
