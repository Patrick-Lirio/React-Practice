import React, { useState } from "react";

const ControlledInputForm = () => {
  /* Option 1 */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // dynamic key update
    });
  }

  /* option 2 */
  //  const [firstName, setFirstName] = useState("");
  //  const [lastName, setLastName] = useState("");
  //  const [email, setEmail] = useState("");

  //   function handleChange(e) {
  //     setFirstName(e.target.value);
  //     setLastName(e.target.value);
  //     setEmail(e.target.value);
  //   }
  return (
    <div className="min-h-screen grid grid-cols-2 gap-4 m-4">
      <div className="flex items-center justify-center bg-gray-300">
        <form
          action=""
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Type your Information
          </h2>

          {/* <!-- firstName --> */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" for="firstName">
              First Name
            </label>
            <input
              type="firstName"
              name="firstName"
              id="firstName"
              placeholder="Enter your First Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.firstName}
              onChange={handleChange}
              //   value={firstName}
              //   onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* <!-- Lastname --> */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" for="lastName">
              Last Name
            </label>
            <input
              type="lastName"
              name="lastName"
              id="lastName"
              placeholder="Enter your Last Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.lastName}
              onChange={handleChange}
              //   value={lastName}
              //   onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* <!-- Email --> */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" for="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.email}
              onChange={handleChange}
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center bg-green-300 p-4">
        <form
          action=""
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Displayed Information
          </h2>

          <div className="grid grid-cols-2 gap-3 m-3">
            <div>
              {/* <!-- firstName --> */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" for="firstName">
                  First Name
                </label>
                {/* <input
                  type="firstName"
                  id="firstName"
                  placeholder="Enter your First Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                /> */}
                <label htmlFor="">{formData.firstName}</label>
                {/* <label htmlFor="">{firstName}</label> */}
              </div>
            </div>
            <div>
              {/* <!-- Lastname --> */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" for="lastName">
                  Last Name
                </label>
                <label htmlFor="">{formData.lastName}</label>
                {/* <label htmlFor="">{lastName}</label> */}
              </div>
            </div>
          </div>

          <div className="flex justify-center-safe mt-6">
            {/* <!-- Email --> */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" for="email">
                Email
              </label>
              <label htmlFor="">{formData.email}</label>
              {/* <label htmlFor="">{email}</label> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ControlledInputForm;
