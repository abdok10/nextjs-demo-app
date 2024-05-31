"use client";

import { useEffect, useState } from "react";

function Post() {
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1")
      const result = await response.json();
      setPost(result);
    };

    fetchPost();
  }, []);

  return (
    <div className="mt-5">
      <h3>{post.title}</h3>
    </div>
  );
}

export default Post;
