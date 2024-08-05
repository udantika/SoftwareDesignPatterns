import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { BellRing, Check, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const AdminUsers = () => {
  const [open, setOpen] = useState(false)
  const orderids = [
    {
      orderid: "INV001",
      paymentPayment: "Paid",
      totalAmount: "$250.00",
      paymentStatus: "Waiting for return",
    },
    {
      orderid: "INV002",
      paymentPayment: "Pending",
      totalAmount: "$150.00",
      paymentStatus: "Returned order",
    },
    {
      orderid: "INV003",
      paymentPayment: "Unpaid",
      totalAmount: "$350.00",
      paymentStatus: "Ordered",
    },
    {
      orderid: "INV004",
      paymentPayment: "Paid",
      totalAmount: "$450.00",
      paymentStatus: "Waiting for order",
    },
    {
      orderid: "INV005",
      paymentPayment: "Paid",
      totalAmount: "$550.00",
      paymentStatus: "Returned order",
    },
    {
      orderid: "INV006",
      paymentPayment: "Pending",
      totalAmount: "$200.00",
      paymentStatus: "Order pending",
    },
    {
      orderid: "INV007",
      paymentPayment: "Unpaid",
      totalAmount: "$300.00",
      paymentStatus: "Returned",
    },
  ]
  return (
    <>
      <Card>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Users</CardTitle>
          {/* <SheetTrigger> */}
          <Button onClick={()=>setOpen(!open)}>
            <Plus className='h-10 w-10 mr-2' /> Add
          </Button>
          {/* </SheetTrigger> */}
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">orderid</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderids.map((orderid) => (
                <TableRow key={orderid.orderid}>
                  <TableCell className="font-medium">{orderid.orderid}</TableCell>
                  <TableCell>{orderid.paymentPayment}</TableCell>
                  <TableCell>{orderid.paymentStatus}</TableCell>
                  <TableCell className="text-right">{orderid.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Orderid
              </Label>
              <Input id="username" value="xxx" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Email
              </Label>
              <Input id="username" value="user@flyrobe" className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
              <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={()=>setOpen(!open)}>Cancel</Button>
              <Button type="submit" className='w-1/2'>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default AdminUsers