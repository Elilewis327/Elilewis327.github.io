"use client";

//@ts-ignore
import Container from "/src/app/Container/Container.tsx"; //@ts-ignore
import FStoreHelper from "/src/app/firestore/firestore.ts"; //@ts-ignore
import { useState } from "react"; //@ts-ignore

const Home = () => {
  const f = new FStoreHelper();
  const [ready, setReady] = useState<boolean>(false);
  const [called, setCalled] = useState<boolean>(false);
  const [posts, setPosts] = useState<Array<any>>([]);

  if (!called){
    setCalled(true);

    f.query("posts").then(() => {

      setPosts(f.data.map((post: any) => 
        <Container title={post.title} key={post.id} content={post.content}  />))

      console.log(posts);

      setReady(true);
    });
  }

  

  if (!ready) return <div>Loading...</div>;
  else {
    return <div>{posts}</div>;
  }
};

export default Home;
