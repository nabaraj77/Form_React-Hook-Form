import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data);

    //To remove spaces from the string if exists in the beginning or end
    let output = {
      fullName: data.fullName.trim(),
      email: data.email.trim(),
      password: data.password,
      gender: data.gender,
      courseSelected: data.course,
    };
    console.log(output);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-heading">
          <h2>Registration Form</h2>

          <div className="field-wrapper">
            <div className="field-content">
              <label htmlFor="firstName">Full Name : </label>
              <input
                {...register("fullName", { required: "Full Name is required" })}
                placeholder="Full Name"
              />
              {errors.fullName && <span>*Full Name is required.</span>}
            </div>
            <div className="field-content">
              <label htmlFor="email">Email : </label>
              <input
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
              />
              {errors.email && <span>*Email is required.</span>}
            </div>

            <div className="field-content">
              <label htmlFor="password">Password : </label>
              <input
                {...register("password", { required: "Password is required" })}
                placeholder="password"
                type="password"
              />
              {errors.password && <span>*Password is required.</span>}
            </div>
          </div>

          {/* <input
            {...register("password")}
            placeholder="password"
            type="password"
          /> */}
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
