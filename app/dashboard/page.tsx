import {
  Card,
  CardContent,
} from "@/components/ui/card"
import UserInfo from "./components/use-info";
import Signature from "./components/signature";
export default function Page() {
  return (
    <div>
      <main className="mx-auto max-w-7xl px-12 sm:px-10 lg:px-24 grid grid-rows-3 grid-flow-col gap-4 mt-8 h-60">
        <Card className="row-span-3 ...">
          <CardContent>
          <UserInfo></UserInfo>
          </CardContent>
        </Card>
        <Card className="flex justify-center items-center col-span-2 ...">
          <CardContent>
            <Signature></Signature>
          </CardContent>
        </Card>
        <Card className="row-span-2 col-span-2 ...">
          <CardContent>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
