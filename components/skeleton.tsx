import { Skeleton } from "@/components/ui/skeleton"
export default function SkeletonList() {
  return (
    <div className="flex flex-col items-start mx-4 mb-4 gap-2 rounded-lg border p-3 text-left text-sm transition-all">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[550px]" />
        <Skeleton className="h-4 w-[550px]" />
      </div>
    </div>
  );
}
