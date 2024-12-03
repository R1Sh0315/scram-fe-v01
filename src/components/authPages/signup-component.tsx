import { useState } from "react";

const SignupComponent: React.FC = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    password: "",
  });

  const submitHandler = () => {
    console.info(userDetails);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <h3>SignUp</h3>
      <input
        type="text"
        name="name"
        value={userDetails.name}
        onChange={handleChange}
        placeholder="username"
      />
      <input
        type="password"
        name="password"
        value={userDetails.password}
        onChange={handleChange}
        placeholder="password"
      />

      <button onClick={() => submitHandler()}>Submit</button>
    </>
  );
};

export default SignupComponent;
