"use client"

import { ChatbotUiImage } from "@/components/icons/chatbot-ui-image"
import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div>
        <ChatbotUiImage
          theme={theme === "dark" ? "dark" : "light"}
          scale={0.3}
        />
      </div>

      <div className="mt-2 text-4xl font-bold">똑똑한 고양이 미로</div>

      <Link
        className="mt-4 flex w-[200px] items-center justify-center rounded-md bg-blue-500 p-2 font-semibold"
        href="/login"
      >
        미로에게 물어보세요.
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  )
}
