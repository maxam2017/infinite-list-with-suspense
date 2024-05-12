import { Suspense } from "react";

import { PageOfJokes } from "@/components/page-of-jokes";
import { Shimmer } from "@/components/shimmer";

export const runtime = "edge";
export const dynamic = "force-static";

export default function Page() {
  return (
    <div className="space-y-6">
      <Suspense fallback={<Shimmer />}>
        <PageOfJokes />
      </Suspense>
    </div>
  );
}
