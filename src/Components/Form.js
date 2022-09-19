import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  //console.log(errors);
  const onSubmit = (data) => {
    console.log(data);

    //To remove spaces from the string if exists in the beginning or end
    let output = {
      fullName: data.fullName.trim(),
      email: data.email.trim(),
      password: data.password,
      gender: data.gender,
      courseSelected: data.course,
      mobileNumber: data.mobileNo,
    };
    console.log(output);

    alert(`Form Submitted Successfully with Data as:
        Name: ${output.fullName}
        Email: ${output.email}
        Password: ${output.password}
        Mobile No: ${output.mobileNumber}
        Gender: ${output.gender}
        Course: ${output.courseSelected}
    `);
    resetField("fullName");
    resetField("email");
    resetField("mobileNo");
    resetField("password");
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-heading">
          <h2>Registration Form</h2>

          <div className="field-wrapper">
            <div className="field-content">
              <label htmlFor="fullNameName">Full Name : </label>
              <input
                {...register("fullName", { required: "Full Name is required" })}
                placeholder="Full Name"
                defaultValue=""
              />
              {errors.fullName && <span>*Full Name is required.</span>}
            </div>
            <div className="field-content">
              <label htmlFor="email">Email : </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /[^@\s]+@[^@\s]+\.[^@\s]{3}/,
                    message: "Enter a valid Email.",
                  },
                })}
                placeholder="Email"
                defaultValue=""
              />
              {errors.email?.type === "required" && (
                <span>*Email is required.</span>
              )}
              {errors.email?.type === "pattern" && (
                <span>*Enter a valid email.</span>
              )}
            </div>

            <div className="field-content">
              <label htmlFor="password">Password : </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 7,
                    message: "Password must be seven characters long.",
                  },
                })}
                placeholder="password"
                type="password"
                defaultValue=""
              />
              {errors.password?.type === "required" && (
                <span>*Password is required.</span>
              )}
              {errors.password?.type === "minLength" && (
                <span>*Password must be of min length 7.</span>
              )}
            </div>
            <div className="field-content">
              <label htmlFor="mobileNo">Mobile No : </label>
              <input
                {...register("mobileNo", {
                  required: "Mobile Number is required",
                  maxLength: {
                    value: 10,
                    message:
                      "Mobile number must not be greater than 10 digits.",
                  },
                  minLength: {
                    value: 10,
                    message: "Mobile Number must not be less than 10 digits",
                  },
                })}
                placeholder="Mobile Number"
                type="number"
                defaultValue=""
              />
              {errors.mobileNo?.type === "required" && (
                <span>*Mobile Number is required.</span>
              )}
              {errors.mobileNo?.type === "minLength" && (
                <span>*Mobile Number must not be less than 10 digits.</span>
              )}
              {errors.mobileNo?.type === "maxLength" && (
                <span>*Mobile Number must be greater than 10 digits.</span>
              )}
            </div>
          </div>
          <div className="field-content">
            <label htmlFor="gender">Gender : </label>
            <div className="gender">
              Male
              <input
                type="radio"
                {...register("gender")}
                value="Male"
                defaultChecked
              />
              Female
              <input type="radio" {...register("gender")} value="Female" />
            </div>
          </div>

          <div className="field-content course">
            <label htmlFor="selectCourse">Select Course</label>
            <select {...register("course")}>
              <option value="React">React Js</option>
              <option value="JavaScript">Java Script</option>
              <option value="PHP">PHP</option>
            </select>
          </div>
          <div className="button">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
