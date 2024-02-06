"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import "./nav.css";
import { useConfig } from "@/hooks/use-config";
import { themes } from "@/registry/themes";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

export default function Navbar() {
  
  const { setTheme } = useTheme();
  const [config, setConfig] = useConfig();
  useEffect(() => setTheme("dark"));

  const router = useRouter();
  const pathname = usePathname();
  const navigation: NavItem[] = [
    { name: "Dashboard", href: "/dashboard", current: true },
    { name: "Blog", href: "/blog", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Collection", href: "#", current: false },
    { name: "About", href: "#", current: false },
  ];

  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <>
      <header className="header-bg-css min-h-full">
        <div className="mx-auto max-w-7xl px-10 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex justify-between items-center w-full">
              <div
                onClick={() => {
                  router.push("/dashboard");
                }}
                className="font-mono text-2xl text-white font-bold cursor-pointer"
              >
                Quantum Quill
              </div>
              <div className="flex flex-shrink-0 items-center justify-center">
                <div className="hidden sm:-my-px sm:ml-6 sm:flex  sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      onClick={() => {
                        router.push(item.href);
                      }}
                      className={classNames(
                        pathname === item.href
                          ? " text-white"
                          : "border-transparent text-gray-500 hover:text-white",
                        " inline-flex items-center duration-500 text-base px-1 pt-1 font-medium cursor-pointer"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <Select
                  onValueChange={(
                    value:
                      | "zinc"
                      | "slate"
                      | "stone"
                      | "gray"
                      | "neutral"
                      | "red"
                      | "rose"
                      | "orange"
                      | "green"
                      | "blue"
                      | "yellow"
                      | "violet"
                  ) =>
                    setConfig({
                      ...config,
                      theme: value,
                    })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Themes" />
                  </SelectTrigger>
                    {["zinc", "rose", "blue", "green", "orange"].map(
                      (color) => {
                        const theme = themes.find(
                          (theme) => theme.name === color
                        );
                        if (!theme) {
                          return null;
                        }
                        return (
                          <SelectContent key={theme.name}>
                            <SelectItem value={color}>
                              {color}
                            </SelectItem>
                            </SelectContent>
                        );
                      }
                    )}
                </Select>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
