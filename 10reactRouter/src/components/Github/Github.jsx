// import { useState } from "react";
// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  // const [data, setData] = useState("");

  // const githubData = async () => {
  //   const response = await fetch("https://api.github.com/users/banchet18");
  //   const result = await response.json();
  //   setData(result);
  // };
  // useEffect(() => {
  //   githubData();
  // }, []);

  const data = useLoaderData();

  return (
    <div className=" text-center m-4 bg-gray-400 text-white p-4 text-3xl">
      <img src={data.avatar_url} width={300} alt="" />
      Github Followers : {data.followers}
    </div>
  );
};
export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/banchet18`);
  return response.json();
};
