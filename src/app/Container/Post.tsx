"use client";

import React from "react";

const Post = (props: {
  title: string | undefined;
  id: string;
  content: string | undefined;
}) => {

  let body: any;
  if (props.content === undefined)
    body = 'Nothing to show here..';
  else {
    body = props.content.split('\\n').map((line, index) => (
      <React.Fragment key={index} >
        <span>{line}</span> 
        <br />
      </React.Fragment>
    ));
  }


  return (
    <div
      id={props.id}
      className="p-2 m-0 mb-12 mt-12 grid grid-cols-4 grid-rows-3 gap-x-3 justify-around"
    >
      <div className="text-right self-center block font-bold text-3xl p-2 border-b-2 row-start-1 col-start-3 col-span-2 border-black ">
        {props.title}
      </div>
      <div className="font-extralight text-3xl col-start-1 col-span-2 row-start-3">
        {body}
      </div>
    </div>
  );
};

export default Post;
