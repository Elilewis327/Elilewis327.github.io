"use client";

const Container = (props: {'children' : string | undefined}) => {
  return (
    <div id="container" className='m-auto w-full p-12'>
      {props.children}
    </div>
  );
};

export default Container;
