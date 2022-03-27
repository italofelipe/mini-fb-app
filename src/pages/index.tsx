import { Typography } from "@mui/material";
import Input from "@mui/material/Input";
import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import { envMapper } from "../config/envMapper";
import { Firebase } from "../config/firebase";

const Login: NextPage = () => {
  const [accountless, setAccountless] = useState<boolean>(true);
  const [userData, setUserData] = useState<ICreateUserForm>();
  const [error, setError] = useState<UserValidationError | null>();

  const handleAuth = (event: FormEvent<HTMLFormElement>) => {};

  const handleCreateUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const createUser = new Firebase(envMapper)
      .createUser(userData!.email, userData!.password)
      .then(() => setAccountless(false))
      .catch((error) => {
        console.error("Deu pau", error);
        setError({
          error: true,
          message: "There was an error processing the request",
          field: null,
        });
      });

    console.log("Instancia da classe do Firebase", createUser);
  };

  return (
    <div>
      <Typography variant="h1" fontSize={32}>
        Login Screen
      </Typography>

      <p>Just fill this form and you are ready to go!</p>

      {!accountless ? (
        <>
          <Typography variant="h2">
            Whoa, you already made your facebbok account!
          </Typography>

          <form onSubmit={(event) => handleAuth(event)}>
            <Input
              placeholder="Email"
              value={userData?.email}
              onChange={(e) =>
                setUserData({ ...userData!, email: e.target.value })
              }
            />
            <Input
              placeholder="Password"
              value={userData?.password}
              onChange={(e) =>
                setUserData({ ...userData!, password: e.target.value })
              }
            />
            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={(event) => handleCreateUser(event)}>
            <Input
              placeholder="Email"
              value={userData?.email}
              onChange={(e) =>
                setUserData({ ...userData!, email: e.target.value })
              }
            />
            <Input
              placeholder="Password"
              value={userData?.password}
              onChange={(e) =>
                setUserData({ ...userData!, password: e.target.value })
              }
            />
            {error && (
              <Typography variant="subtitle1" color="#DD805F">
                {error.message}
              </Typography>
            )}
            <button type="submit">Criar conta</button>
          </form>
        </>
      )}

      <Typography>
        Already have an account?{" "}
        <span onClick={() => setAccountless(false)}>Click here to Log In</span>
      </Typography>
    </div>
  );
};

export default Login;
