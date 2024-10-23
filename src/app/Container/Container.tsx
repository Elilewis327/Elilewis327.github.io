"use client";

const Container = (props: {
  title: string | null;
  key: string;
  content: string | null;
}) => {
  return (
    <div id={props.key}>
      <div className="font-bold">{props.title}</div>
      <div className="font-light">{props.content}</div>
    </div>
  );
};

export default Container;
