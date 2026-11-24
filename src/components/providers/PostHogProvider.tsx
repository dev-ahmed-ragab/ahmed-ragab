"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PostHogReactProvider } from "posthog-js/react";

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!posthogKey) return;

    let url = window.origin + pathname;
    if (searchParams && searchParams.toString()) {
      url = `${url}?${searchParams.toString()}`;
    }

    posthog.capture("$pageview", {
      $current_url: url,
    });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost =
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

    // Initialize only if API key is provided and on client side
    if (typeof window !== "undefined" && posthogKey) {
      posthog.init(posthogKey, {
        api_host: posthogHost,
        person_profiles: "always", // Track anonymous visitors & recruiters across visits
        capture_pageview: false, // Handled manually by PostHogPageView for Next.js App Router
        capture_pageleave: true, // Tracks exact drop-off moments when visitors leave
        autocapture: true, // Automatically captures clicks, inputs, and interactions
        disable_session_recording: false, // Ensures session recording is enabled
        session_recording: {
          maskAllInputs: false, // Can be true if password inputs exist, safe for portfolio
          maskInputOptions: {
            password: true,
          },
        },
        loaded: (ph) => {
          if (process.env.NODE_ENV === "development") {
            // Optional: useful for local debugging
            // ph.debug();
          }
        },
      });
    }
  }, []);

  return (
    <PostHogReactProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PostHogReactProvider>
  );
}
