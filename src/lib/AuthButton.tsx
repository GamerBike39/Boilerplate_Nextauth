import { FC } from "react";
import { getAuthSession } from "./auth";
import { LoginButton, LogoutButton } from "./auth_buttons";

interface authButtonProps {}

const AuthButton: FC<authButtonProps> = async ({}) => {
  const session = await getAuthSession();

  if (session?.user) {
    return <LogoutButton />;
  }

  return <LoginButton />;
};

export default AuthButton;
