import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ArticlesCardSkeleton() {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader>
        <Skeleton className="h-[200px] w-full rounded-md" />
        <CardDescription>
          <Skeleton className="mt-4 h-4 w-24" />
        </CardDescription>
        <CardTitle>
          <Skeleton className="mt-2 h-6 w-3/4" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="mt-2 h-4 w-full" />
          <Skeleton className="mt-1 h-4 w-5/6" />
        </CardDescription>
        <div className="mt-3 flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-12 rounded-full" />
        </div>
      </CardHeader>
    </Card>
  );
}
