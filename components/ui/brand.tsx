"use client"

import Link from "next/link"
import { FC } from "react"
import { ChatbotUiImage } from "../icons/chatbot-ui-image"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="https://github.com/mirocomestrue/chat-miro"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <ChatbotUiImage
          theme={theme === "dark" ? "dark" : "light"}
          scale={0.3}
        />
      </div>

      <div className="text-4xl font-bold tracking-wide">똑똑한 고양이 미로</div>
    </Link>
  )
}
