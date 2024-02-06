"use client";
import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CommandMenus from "./components/command-menu";
import BlogList from "./components/blog-list";
import PostNav from "./components/post-nav";

export default function Page() {
  const [articleType, setArticleType] = useState<string>("");

  return (
    <div className="min-h-full mt-4">
      <div className="mx-auto max-w-7xl px-6 sm:px-2">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={20}>
            <CommandMenus
              selectType={(type: string) => setArticleType(type)}
            ></CommandMenus>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={60}>
            <BlogList articleType={articleType}></BlogList>
          </ResizablePanel>
          <ResizablePanel defaultSize={20}>
            <PostNav></PostNav>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
