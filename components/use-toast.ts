import { useState } from "react"

interface Toast {
  title?: string
  description?: string
  action?: React.ReactNode
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = ({ title, description, action }: Toast) => {
    setToasts((current) => [...current, { title, description, action }])
  }

  return {
    toast,
    toasts,
    dismiss: (index: number) => {
      setToasts((current) => current.filter((_, i) => i !== index))
    },
  }
}

