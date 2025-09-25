import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { User, UserPlus } from "lucide-react";
import UserForm from "@/components/forms/user-form";
import UsersTable from "@/components/users-table";

export default async function HalamanPengguna(){
    return(
        <div className="flex flex-col gap-4 p-2 md:p-24">
            <h1 className="text 2x1 font-bold">Data Hafalam al-quran Santri</h1>
            <div>
            <Dialog modal={false}>
            <DialogTrigger asChild>
                <Button>
                    Tambah Data Santri <UserPlus className="size-4"/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Tambah Data Santri</DialogTitle>
                <DialogDescription>
                    penambahan data santri insya allah ke database online
                </DialogDescription>
                <div> 
                <UserForm/>
                </div>
                </DialogHeader>
            </DialogContent>
            </Dialog>
            </div>
            <UsersTable/>
        </div>
    )
}