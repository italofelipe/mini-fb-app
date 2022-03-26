import { Typography } from "@mui/material";
import Input from "@mui/material/Input";
import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import { envMapper } from "../config/envMapper";
import { Firebase } from "../config/firebase";

const Login: NextPage = () => {
  const [accountless, setAccountless] = useState<boolean>(true);
  const [userData, setUserData] = useState<ICreateUserForm>();

  const handleAuth = (event: FormEvent<HTMLFormElement>) => {};

  const handleCreateUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const createUser = new Firebase(envMapper)
      .init()
      .createUser(userData!.email, userData!.password)
      .then((response) => console.log(response))
      .catch((error) => console.error("Deu pau", error));

    console.log("Instancia da classe do Firebase", createUser);
  };

  return (
    <div>
      <Typography variant="h1" fontSize={32}>
        Login Screen
      </Typography>

      <p>Just fill this form and you are ready to go!</p>

      {!accountless ? (
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
      ) : (
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
          <button type="submit">Criar conta</button>
        </form>
      )}

      <Typography>
        Already have an account?{" "}
        <span onClick={() => setAccountless(false)}>Click here to Log In</span>
      </Typography>
    </div>
  );
};

export default Login;
