"use client";

import { PostHogProvider } from "posthog-js/react";
import posthog from "@/lib/posthog";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      {children}
    </PostHogProvider>
  );
}
