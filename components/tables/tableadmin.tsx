import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getUsers } from "@/server/users"

import React from 'react'

export default async function tableadmin() {
    const users = await getUsers()
  return (
    <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">username</TableHead>
      <TableHead>password</TableHead>
      <TableHead>email</TableHead>
      <TableHead>nama surat</TableHead>
      <TableHead>jumlah ayat</TableHead>
      <TableHead>create at</TableHead>
      <TableHead>update at </TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>  
  </TableHeader>
  <TableBody>

    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
  )
}
