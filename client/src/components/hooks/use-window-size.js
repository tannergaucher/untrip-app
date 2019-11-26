import { useState, useEffect, useCallback } from "react"

export default function useWindowSize() {
  const isClient = typeof window === "object"

  const memoizedGetSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }, [isClient])

  const [windowSize, setWindowSize] = useState(memoizedGetSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(memoizedGetSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isClient, memoizedGetSize])

  return windowSize
}
