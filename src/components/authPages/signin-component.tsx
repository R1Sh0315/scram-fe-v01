import { useState } from "react";
import { signinService } from "../../services/services";

const SigninComponent: React.FC = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [isBtnDisable, setBtnDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async () => {
    setLoading(true);
    setBtnDisable(true);

    const response = await signinService(userDetails);

    setLoading(false);
    setBtnDisable(false);

    if (response) {
      console.log("Signin successful:", response);
    } else {
      console.error("Signin failed");
    }
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
      <h3>Signin</h3>
      <input
        type="text"
        name="email"
        value={userDetails.email}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        value={userDetails.password}
        onChange={handleChange}
        placeholder="password"
      />

      <button onClick={submitHandler} disabled={isBtnDisable || loading}>
        {loading ? "Submit" : "Submit"}
      </button>
    </>
  );
};

export default SigninComponent;
