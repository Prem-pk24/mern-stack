import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center text-dark align-items-center h-100">
          <div
            className="col-md-8 col-lg-6 col-xl-4 mt-5 p-5 rounded"
            style={{ background: "#b8d1d8" }}
          >
            <h2 className="text-center text-primary mb-4">Login</h2>
            <Formik
              initialValues={{
                email: "",
                password: "",
                rememberMe: false,
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is required!"),
                password: Yup.string()
                  .min(6, "Password must be at least 6 characters")
                  .required("Password is Required!"),
              })}
              onSubmit={(values) => {
                console.log("Form values:", values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="form-outline mb-4">
                    <Field
                      name="email"
                      type="email"
                      className={`form-control form-control-lg ${
                        errors.email && touched.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter a valid email address"
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-outline mb-3">
                    <Field
                      name="password"
                      type="password"
                      className={`form-control form-control-lg ${
                        errors.password && touched.password ? "is-invalid" : ""
                      }`}
                      placeholder="Enter password"
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  <div className="form-check mb-0">
                    <Field
                      name="rememberMe"
                      type="checkbox"
                      className="form-check-input me-2"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <Link to="/register">
                        <span className="link-primary">Register</span>
                      </Link>
                    </p>
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
