"use client"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

function BackButton() {
    const router =  useRouter()
    return (
        <div onClick={() => router.back()} className="btn btn-neutral">
            <ChevronLeft />
            Back
        </div>
    )
}
export default BackButton
