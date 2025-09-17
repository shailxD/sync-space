"use client";

import { ReactNode } from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  useAuth,
} from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

interface ConvexClientProviderProps {
  children: ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  throw new Error("Missing NEXT_PUBLIC_CONVEX_URL in your .env.local file");
}

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {/* If signed in, show app */}
        <SignedIn>{children}</SignedIn>

        {/* If signed out, redirect to Clerk sign-in */}
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
