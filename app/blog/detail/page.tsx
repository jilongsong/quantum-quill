"use client";
import { useState, useEffect, useRef } from "react";
import Markdown from "@/components/markdown/index";
import ScrollTop from "@/components/scrollTop";
import './page.css'
import { getURLParameter } from "@/utils";
import { fetchPostDetail } from "@/api/songs";
import { FetchBlogDetailRes } from "@/api/songs/type";

export default function Page() {
 
  const scrollTopDivElement = useRef<HTMLDivElement>(null);

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
      <div className="basis-1/6 text-center">左侧导航</div>
      <div ref={scrollTopDivElement} className="basis-4/6 overflow-y-scroll" style={{ height: "calc(100vh - 100px)" }}><Markdown content={blogDetail?.content} /></div>
      <div className="basis-1/6 text-center">右侧工具</div>
      </div>
      <ScrollTop el={scrollTopDivElement}></ScrollTop>
    </div>
  );
}
