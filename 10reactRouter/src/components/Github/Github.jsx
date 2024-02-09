import { useState } from "react";
import { useEffect } from "react";

const Github = () => {
  const [data, setData] = useState("");

  const githubData = async () => {
    const response = await fetch("https://api.github.com/users/banchet18");
    const result = await response.json();
    setData(result);
  };
  useEffect(() => {
    githubData();
  }, []);

  return (
    <div className=" text-center m-4 bg-gray-400 text-white p-4 text-3xl">
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
};
export default Github;
