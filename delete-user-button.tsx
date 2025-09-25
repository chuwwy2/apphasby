"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { deleteUser } from "@/server/users"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "./components/ui/button"
import { Loader, Loader2, Trash2 } from "lucide-react"

type TipeDataTsbdiDb = {
    userId : string
}

export default function DeleteUserButton(
    {userId} : TipeDataTsbdiDb
) {
    const [isLoading,setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const handleDelete = async()=> {
        try {
            setIsLoading(true)
            await deleteUser(userId)
            toast.success("Alhamdulillah penghapusan data santri di database online telah allah mudahkan")
            setIsOpen(false) //menutup pop up dialog
            router.refresh()
        } catch (error) {
            console.error(error)
            toast.error("tidak berhasil bossquee")
        } finally {
            setIsLoading(false)
        }
    }

  return (
        <Dialog open={isOpen} onOpenChange={setIsOpen} >
            <DialogTrigger>
                <Button variant="ghost">
                    <Trash2 className="size-4"/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Serius Mau Lu Buang Boy</DialogTitle>
                <DialogDescription>
                    ketika anda hapus data ini tidak bisa 
                    di pulihkan, total pikirkan baik baik 
                    bossque jangan sampe gk sengaja kebuang 
                </DialogDescription>
                <Button
                    variant="destructive"
                    disabled={isLoading}
                    onClick={handleDelete}
                >
                {isLoading?<Loader2 className="size-4
                animate-spin"/> : "delate "}
                </Button>
                </DialogHeader>
            </DialogContent>
        </Dialog>
  )
}