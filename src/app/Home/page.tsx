"use client";

//@ts-ignore
import Container from "/src/app/Container/Container.tsx"; //@ts-ignore
import FStoreHelper from "/src/app/firestore/firestore.ts"; //@ts-ignore
import Post from "/src/app/Container/Post.tsx"; //@ts-ignore
import { useState } from "react"; //@ts-ignore

const Home = () => {
  const db = new FStoreHelper();
  const [ready, setReady] = useState<boolean>(false);
  const [called, setCalled] = useState<boolean>(false);
  const [posts, setPosts] = useState<Array<any>>([]);

  if (!called) {
    setCalled(true);

    db.query("posts").then(() => {

      setPosts(db.data.map((post: any) =>
        <Post title={post.title} key={post.id} id={post.id} content={post.content} />))

      setReady(true);
    });
  }



  if (!ready) return <div className="pl-12" > Loading... </div>;
  else {
    return (
    <Container>
      {posts}
      {posts}
    </Container>
    )
  }
};

export default Home;
