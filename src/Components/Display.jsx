import React from "react";
import { useGetAllPostQuery } from "../Services/Post";

function Display() {
  const responseInfo = useGetAllPostQuery();
  console.log(responseInfo);

  return (
    <>
      <h1>React Redux API</h1>
      responseInfo.isLoading ? <h1>Loading..</h1> :
      {responseInfo.data.map((post) => {
        return (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        );
      })}
    </>
  );
}

export default Display;
