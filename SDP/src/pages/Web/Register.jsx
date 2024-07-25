import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

 
const Register = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">

    <Card className="w-[350px]">
   <CardHeader>
     <CardTitle>Register</CardTitle>
   </CardHeader>
   <CardContent>
     <form>
       <div className="grid w-full items-center gap-4">
         <div className="flex flex-col space-y-1.5">
           <Label htmlFor="name">Name</Label>
           <Input id="name" placeholder="Enter Name" />
         </div>
         <div className="flex flex-col space-y-1.5">
           <Label htmlFor="name">Email</Label>
           <Input id="name" placeholder="Enter Email" />
         </div>
         <div className="flex flex-col space-y-1.5">
           <Label htmlFor="framework">Password</Label>
           <Input id="password" placeholder="Enter password" />
         </div>
         <div className="flex flex-col space-y-1.5">
           <Label htmlFor="name">Phone no</Label>
           <Input id="name" placeholder="Enter Phone no" />
         </div>

       </div>
     </form>
   </CardContent>
   <CardFooter className="flex justify-between">
     {/* <Button variant="outline">Cancel</Button> */}
     <Button>Register</Button>
   </CardFooter>
 </Card>
 </div>
  )
}

export default Register