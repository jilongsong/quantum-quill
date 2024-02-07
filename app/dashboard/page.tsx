import { Card, CardContent } from "@/components/ui/card";
import './page.css'
import UserInfo from "./components/use-info";
import Motto from "./components/motto";
import Signature from "./components/signature";
import Date from "./components/date";
export default function Page() {
  return (
    <div>
      <section style={{ height: "calc(100vh - 100px)" }} className="transform-3d h-screen py-10 mx-auto max-w-7xl px-12 sm:px-10 lg:px-24 grid grid-rows-3 grid-cols-4 gap-4 grid-flow-row auto-rows-50">
        <Card className="row-span-2 col-span-1">
          <CardContent>
            {/* <UserInfo></UserInfo> */}
          </CardContent>
        </Card>
        <Card className="row-span-1 col-span-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
          <CardContent>
            {/* <UserInfo></UserInfo> */}
          </CardContent>
        </Card>
        <Card className="transform-3d-item flex items-center justify-center row-span-1 col-span-1 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <CardContent>
            <Signature></Signature>
          </CardContent>
        </Card>
        <Card className="row-span-1 col-span-2">
          <CardContent>
            <UserInfo></UserInfo>
          </CardContent>
        </Card>
        <Card className="row-span-2 col-span-1">
          <CardContent>
            {/* <UserInfo></UserInfo> */}
          </CardContent>
        </Card>
        <Card className="row-span-1 col-span-2">
          <CardContent>
            {/* <UserInfo></UserInfo> */}
          </CardContent>
        </Card>
        <Card className="row-span-1 col-span-1">
          <CardContent>
            {/* <UserInfo></UserInfo> */}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
