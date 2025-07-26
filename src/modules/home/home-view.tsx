"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";



export default function Home() {
 
  const trpc = useTRPC();
  const {data } = useQuery(trpc.hello.queryOptions({text: "Desk AI World"}));
  return (
    <div className="flex flex-col p-4">
      {data?.greeting}
    </div>
  )
}
