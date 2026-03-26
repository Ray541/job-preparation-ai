"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Page() {
  const [backendStatus, setBackendStatus] = useState<string>("Checking...")

  useEffect(() => {
    // Fetch the root route from our backend
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setBackendStatus(data))
      .catch((err) => {
        console.error("Backend connection failed:", err)
        setBackendStatus("Connection failed")
      })
  }, [])

  return (
    <div className="flex min-h-svh p-4">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="mb-4 text-2xl font-bold">Job Preparation AI</h1>
          <p className="mb-2 text-muted-foreground">
            Backend Status:{" "}
            <span className="font-mono font-bold text-primary">
              {backendStatus}
            </span>
          </p>
          <p>The frontend is now successfully fetching from your backend!</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>ctl + alt + z</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
