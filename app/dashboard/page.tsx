import { Card, CardContent } from "@/components/ui/card";
import UserInfo from "./components/use-info";
import Motto from "./components/motto";
import Signature from "./components/signature";
import Date from "./components/date";
export default function Page() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-12 sm:px-10 lg:px-24 grid grid-rows-3 grid-flow-col gap-4 mt-8 h-60">
        <Card className="row-span-3 ...">
          <CardContent>
            <UserInfo></UserInfo>
          </CardContent>
        </Card>
        <Card className="flex justify-center items-center col-span-2 ...">
          <CardContent>
            <Motto></Motto>
          </CardContent>
        </Card>
        <Card className="flex justify-center items-center row-span-2 col-span-1 ...">
          <CardContent>
            <Signature></Signature>
          </CardContent>
        </Card>
        <Card className="flex justify-center items-center row-span-2 col-span-1 ...">
          <CardContent>
            <Signature></Signature>
          </CardContent>
        </Card>
      </section>
      <section className="mx-auto max-w-7xl px-12 sm:px-10 lg:px-24 grid grid-rows-3 grid-flow-col gap-4 mt-8 h-60">
        <Card className="row-span-4 col-span-1">
          <CardContent>
            <Date></Date>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
