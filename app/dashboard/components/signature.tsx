import Image from "next/image";
import userSignature from "@/public/assets/images/songjilong.png";

export default function Signature() {
  return (
    <div className="flex items-center overflow-hidden">
     <Image src={userSignature} alt="me" width={200} height={200}></Image>
    </div>
  );
}
