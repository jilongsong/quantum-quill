"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, Suspense, useRef } from "react";
import { marked } from "marked";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import Skeleton from "@/components/skeleton";
import { cn } from "@/lib/utils";
import { fetchPostList } from "@/api/posts/index";
import { blogItem } from "@/api/posts/type";
import Nodata from "@/components/nodata";
import { useRouter } from "next/navigation";



const BlogItem = ({ blog }: { blog: blogItem }) => {

  const router = useRouter();

  const viewBlogDetail = (id: string) => () => {
    router.push(`/blog/detail?blogId=${id}`);
  };

  return (
    <>
      <div className="flex flex-col gap-2 p-4 pt-0">
        <div
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent cursor-pointer",
            false && "bg-muted"
          )}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold" onClick={viewBlogDetail(blog.blogId)}>{blog.title}</div>
                {false && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                )}
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
              <div className="line-clamp-2 my-2 overflow-hidden text-xs text-muted-foreground">
                {blog.content}
              </div>
            </div>

            {blog.images.length > 0 ? (
              <div className="ml-2">
                <img style={{ borderRadius: "6px", width:'3000px' }} src={blog.images[0]} alt="" />
              </div>
            ) : null}
          </div>
          <div
                className={cn(
                  "flex items-center w-full justify-between ml-auto text-xs",
                  false ? "text-foreground" : "text-muted-foreground"
                )}
              >
                <Badge>{blog.type}</Badge>
                <span>{blog.publicationDate}</span>
              </div>
        </div>
      </div>
    </>
  );
};

const extractImageSrc = (str: string) => {
  const imgSrcRegex = /<img[^>]+src=['"]([^'"]+)['"]/g;
  const matches = [];
  let match;

  while ((match = imgSrcRegex.exec(str)) !== null) {
    matches.push(match[1]);
  }
  return matches;
};

const translateHtmlToText = (html: string) => {
  return html.replace(/(<([^>]+)>)/g, "");
};

export default function MailList({ articleType }: { articleType: string }) {
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [blogList, setBlogList] = useState<blogItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (page: number) => {
    try {
      setLoading(true);
      const result = await fetchPostList({
        limit: page,
        size: 10,
        type: articleType || "",
      });
      result.blogList?.forEach((item) => {
        item.content = marked.parse(item.content) as string;
        item.images = extractImageSrc(item.content);
        item.content = translateHtmlToText(item.content);
      });
      setBlogList((prevList) => [...prevList, ...(result.blogList ?? [])]);
      setTotal(result.total);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [articleType, currentPage]);


  const handleScroll = () => {
    if (
      scrollAreaRef.current &&
      scrollAreaRef.current.scrollHeight - scrollAreaRef.current.scrollTop ===
        scrollAreaRef.current.clientHeight
    ) {
      // 判断是否滚动到底部，如果已到底部，则加载下一页数据
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    console.log('xxxxxxxxxxxx', scrollAreaRef)
    if (scrollAreaRef.current) {
      scrollAreaRef.current.addEventListener("scroll", handleScroll);
      return () => {
        scrollAreaRef.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollAreaRef]);

  return (
   <div style={{ height: "calc(100vh - 100px)" }}>
     <Suspense fallback={<div>Loading...</div>}>
      <ScrollArea className="h-full" ref={scrollAreaRef}>
        {loading ? (
          <>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
          </>
        ) : total > 0 ?  (
          blogList?.map((item) => (
            <BlogItem key={item.id} blog={item}></BlogItem>
          ))
        ) : (<>
       <Nodata></Nodata>
        </>)}
      </ScrollArea>
    </Suspense>
   </div>
  );
}
