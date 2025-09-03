"use client";
import { api } from "@workspace/backend/_generated/api";
import { useMutation, useQuery } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/web</p>
      
    </div>
  )
}
