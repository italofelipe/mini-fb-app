import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (!userToken) router.push("/");
  }, []);
  return (
    <div>
      <h3>Facebook Comments App</h3>
    </div>
  );
};

export default Home;
