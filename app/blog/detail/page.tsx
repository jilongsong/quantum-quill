"use client";
import { useState, useEffect } from "react";
import Markdown from "@/components/markdown/index";
import { getURLParameter } from "@/utils";
import { fetchPostDetail } from "@/api/posts";
import { FetchBlogDetailRes } from "@/api/posts/type";
export default function Page() {
  const blogId = getURLParameter("blogId") || "";

  const [blogDetail, setBlogDetail] = useState<FetchBlogDetailRes | null>(null);

  const fetchData = async () => {
    const result = await fetchPostDetail({ blogId });
    if (!result) return;
    setBlogDetail(result);
  };

  useEffect(() => {
    fetchData();
  }, [blogId]);

  fetchPostDetail;

  return (
    <div className="min-h-full mt-4">
      <div className="flex flex-row h-full mx-auto max-w-7xl px-6 sm:px-2">
      <div className="basis-1/5 text-center">左侧导航</div>
      <div className="basis-3/5 overflow-y-scroll" style={{ height: "calc(100vh - 100px)" }}><Markdown content={blogDetail?.content} /></div>
      <div className="basis-1/5 text-center">右侧工具</div>
      </div>
    </div>
  );
}
