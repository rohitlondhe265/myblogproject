"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function NavigationEventsImplementation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (process.env.GA_MEASUREMENT_ID) {
      window.gtag("event", "page_view");
    }
  }, [pathname, searchParams]);

  return null;
}

export default function TrackPageViews() {
  return (
    <Suspense fallback={null}>
      <NavigationEventsImplementation />
    </Suspense>
  );
}
