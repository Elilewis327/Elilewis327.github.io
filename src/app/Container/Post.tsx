"use client";

import React, { ReactElement, Fragment } from "react";

const Post = (props: {
  title: string | undefined;
  tag: string;
  content: string | undefined;
}) => {
  // process new lines, links, etc
  let body: ReactElement[] = [];

  if (props.content !== undefined) {
    
    body.push(findLinks(props.content));
    body.push(findNewlines(props.content))

  }

  return (
    <div
      id={props.tag}
      className="p-2 m-0 mb-12 mt-12 grid grid-cols-5 grid-rows-2 gap-x-3 justify-around"
    >
      <div className="text-left self-center block font-bold text-3xl p-2 border-b-2 row-start-1 col-start-2 col-span-3 border-black ">
        {props.title}
      </div>
      <div className="font-extralight text-3xl col-start-2 col-span-3 row-start-2">
        {body}
      </div>
    </div>
  );
};

const findLinks = (
  data: string,
): ReactElement[] => {

  let link: ReactElement[];

  if (
    !data.includes("[") ||
    !data.includes("]") ||
    !data.includes("(") ||
    !data.includes(")")
  )
    return [<Fragment>{data}</Fragment>];

  const titleStart: number = data.indexOf("[");
  const titleEnd: number = data.indexOf("]", titleStart);
  const linkStart: number = data.indexOf("(", titleEnd);
  const linkEnd: number = data.indexOf(")", linkStart);

  link = [(
    <Fragment>
      <a href={data.slice(linkStart + 1, linkEnd)}>
        {data.slice(titleStart + 1, titleEnd)}
      </a>
    </Fragment>
  )];

  findLinks(data.slice(linkEnd).forEach( item => link.push(item));

  return link;
};

const findNewlines = (
  data: string,
): ReactElement[] => {

  let line: ReactElement[];

  if (!data.includes("\\n")) return [<Fragment>{data}</Fragment>];

  const lineBreak: number = data.indexOf("\\n");


  line = [(
    <Fragment key={}>
      <span>{data.slice(0,lineBreak)}</span>
      <br />
    </Fragment>
  )];

  findNewlines(data.slice(0,lineBreak)).forEach( item => link.push(item));

  return line;
};

export default Post;
