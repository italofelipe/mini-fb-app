import Input from "@mui/material/Input";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import type { NextPage } from "next";
import { FormEvent, useEffect, useState } from "react";

const Login: NextPage = () => {
  const [accountless, setAccountless] = useState<boolean>(true);
  const [userData, setUserData] = useState<ICreateUserForm>();

  const firebaseConfig = {
    apiKey: "AIzaSyAr8mdO560MWfkymLODRAh9OLmNLMo81nc",
    authDomain: "facebook-comments-50cd4.firebaseapp.com",
    databaseURL: "https://facebook-comments-50cd4-default-rtdb.firebaseio.com",
    projectId: "facebook-comments-50cd4",
    storageBucket: "facebook-comments-50cd4.appspot.com",
    messagingSenderId: "261501086824",
    appId: "1:261501086824:web:92a1d484495e8212131fdd",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const handleAuth = (event: FormEvent<HTMLFormElement>) => {};

  const handleCreateUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, userData!.email, userData!.password)
      .then((response) => console.log(response))
      .catch((error) => console.error("Deu pau", error));
  };

  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);
  return (
    <div>
      <h3>Login Screen</h3>

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

      <p>
        Already have an account?{" "}
        <span onClick={() => setAccountless(false)}>Click here to Log In</span>
      </p>
    </div>
  );
};

export default Login;
