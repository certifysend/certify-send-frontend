import React, { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!form.firstName) validationErrors.firstName = "First Name is required";
    if (!form.lastName) validationErrors.lastName = "Last Name is required";
    if (!form.email) validationErrors.email = "Email is required";

    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted", form);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-5xl">
        <div className="w-full md:w-1/2 p-10 px-20">
          <h2 className="text-2xl font-semibold text-gray-900">Sign up to Certifysend</h2>
          <p className="text-gray-600 mt-2">Enter your credentials to create your account</p>
        
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-700 font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <label className="text-gray-700 font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your last name"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>

            <div>
              <label className="text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#5570F1] text-white p-3 rounded-md font-semibold hover:bg-blue-700"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6">
            <p className="text-center text-gray-600">Or</p>
            <div className="flex flex-col space-y-3 mt-4">
              <button className="w-full flex items-center justify-center border p-3 rounded-md hover:bg-gray-200">
                <img src="/img/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center border p-3 rounded-md hover:bg-gray-200">
                <img src="/img/twitter-icon.png" alt="Twitter" className="w-5 h-5 mr-2" />
                Continue with Twitter
              </button>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-4">
            Already have an account? <a href="/login" className="text-[#5570F1]">Log in</a>
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-[#5570F1] flex items-center justify-center p-10 relative">
          
        </div>
      </div>
    </div>
  );
};

export default SignUp;
