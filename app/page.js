"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((res) => res.json())
      .then((json) => {
        const children = json?.data?.children || [];
        const postData = children.map((child) => child.data);
        setPosts(postData);
      });
  }, []);

  return (
    <div className="bg-gray-100 h-full flex items-center justify-center p-6">
      <div className="space-y-6 grid grid-cols-5 pn:max-sm:grid-cols-1 pp:max-md:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] p-6 rounded-2xl space-y-4 shadow-lg"
          >
            <div className="text-sm text-gray-200">
              <span className="font-medium text-emerald-500">Title:</span>{" "}
              {post.title}
            </div>

            <div className="text-sm text-gray-200">
              <span className="font-medium text-emerald-500">SelfText_HTML:</span>{" "}
              {post.selftext_html
                ? "Has HTML content"
                : "No HTML or empty body"}
            </div>

            <div className="text-sm text-gray-200 break-all">
              <span className="font-medium text-emerald-500">URL:</span>{" "}
              {post.url}
            </div>

            <div className="text-sm text-gray-200">
              <span className="font-medium text-emerald-500">Score:</span>{" "}
              {post.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
