import UserForm from '@/components/forms/user-form'
import { Button } from '@/components/ui/button'
import { DialogHeader } from '@/components/ui/dialog'
import UsersTable from '@/components/users-table'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { UserPlus } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
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
                <DialogTitle>isi dewek cape gweh</DialogTitle>
                <DialogDescription>
                    penambahan data santri insya allah ke database online
                </DialogDescription>
                <div> 
                <UserForm/>
                </div>d
                </DialogHeader>
            </DialogContent>
            </Dialog>
            </div>
            <UsersTable/>
        </div>
  )
}
