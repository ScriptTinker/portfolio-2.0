import { Card, Label, TextInput } from "flowbite-react";
import { LoginButton } from "./Buttons";

const LoginForm = () => {
  return (
    <div className="">
      <Card>
        <div>
          <Label>Email</Label>
          <TextInput placeholder="Enter your email here..."></TextInput>

          <Label>Password</Label>
          <TextInput
            type="password"
            placeholder="Enter your password here"
          ></TextInput>
        </div>
        <LoginButton>Log in!</LoginButton>
      </Card>
    </div>
  );
};

export default LoginForm;
