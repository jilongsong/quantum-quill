"use client";
import { useState } from "react";
import Markdown from "@/components/markdown/index";

export default function Page() {
  const [content, setContent] = useState("## 1111");
  return (
    <div>
      <h1>Collection</h1>
      <Markdown content={content} />
    </div>
  );
}
