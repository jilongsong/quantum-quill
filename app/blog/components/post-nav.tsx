import { useRouter } from "next/navigation";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function PostNav() {
  const router = useRouter();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Write a  node</CardTitle>
          <CardDescription>Do you want to write something today?</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full" onClick={()=>router.push('/post')}>Create</Button>
        </CardFooter>
      </Card>
    </>
  );
}
