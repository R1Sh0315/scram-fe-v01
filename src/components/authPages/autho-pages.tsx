import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { setSignUp } from "../../redux/scramSlice";
import { AuthPageProps } from "../../utils/interface";
import SigninComponent from "./signin-component";
import SignupComponent from "./signup-component";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "98vh",
  padding: theme.spacing(0),
  ...theme.typography.body2,
  textAlign: "center",
}));

const AuthTab = styled(Paper)(({ theme }) => ({
  width: "60%",
  height: "10vh",
  margin: theme.spacing(10),
  ...theme.typography.body2,
  textAlign: "center",
}));

const AuthBtnGroupComponent: React.FC<AuthPageProps> = (props) => {
  const isSignup = useSelector(
    (state: { scramStates: { sstate: { signUpState: boolean } } }) =>
      state.scramStates.sstate.signUpState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    props.setSignupState(isSignup);
  }, [isSignup]);
  return (
    <Stack direction="row" margin={2} sx={{ border: "1px solid black" }}>
      <button
        style={{ width: "100%", margin: "2px" }}
        onClick={() => dispatch(setSignUp(!isSignup))}
        disabled={isSignup}
      >
        Sign in
      </button>
      <button
        style={{ width: "100%", margin: "2px" }}
        onClick={() => dispatch(setSignUp(!isSignup))}
        disabled={!isSignup}
      >
        Sign up
      </button>
    </Stack>
  );
};

const AuthPage = () => {
  const [isSignUp, setSignUp] = useState(false);

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={0}
    >
      <DemoPaper sx={{ background: "#242424" }} square={false}>
        rounded corners
      </DemoPaper>

      <DemoPaper sx={{ background: "#242424" }} square={false}>
        <Stack justifyContent={"end"} direction="row" spacing={0}>
          <AuthTab sx={{ background: "#f4f4f4" }} square={false}>
            <AuthBtnGroupComponent
              setSignupState={(val: boolean) => setSignUp(val)}
            />
            {isSignUp ?<SigninComponent />:<SignupComponent /> }
          </AuthTab>
        </Stack>
      </DemoPaper>
    </Stack>
  );
};

export default AuthPage;
