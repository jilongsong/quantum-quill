import Image from "next/image";
import userAvator from "@/public/assets/images/me.png";
export default function UserInfo() {
  return (
    <div className="flex justify-evenly items-center">
      <div className="p-3">
        <Image src={userAvator} alt="me" width={200} height={200}></Image>
      </div>
      <div className="flex justify-center flex-col pl-4">
        <p className="my-4">A WEB DESIGNER</p>
        <p  className="text-2xl">iDo</p>
        <p className="text-2xl">Song Jilong</p>
        <p className="mt-4">I am a Web Designer based in san francisco.</p>
      </div>
    </div>
  );
}
