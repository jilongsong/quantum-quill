import Image from "next/image";
import nodata from "@/public/assets/images/nodata.svg";
export default function Nodata() {
  return (
    <div className="w-full h-full flex justify-center mt-10">
      <div className="text-center">
      <Image src={nodata} alt="暂无数据" width={200} height={200}></Image>
        <span >No Data</span>
      </div>
    </div>
  );
}
