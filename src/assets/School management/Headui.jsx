import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axiosInstance from "../Registration/api"
import { useEffect, useState } from "react"

function Headui() {
     const [school, setSchool] = useState(null)

     useEffect(() => {
    
        const fetchschooldetails = async  () => {
            try {
                const response = await axiosInstance.get("/api/v1/superadmin/schools")
                setSchool(response.data.data)
            } catch (error) {
                console.error("Error fetching school data", error)
            }
        }
        fetchschooldetails()
     }, [])
  return (
    <div>
        <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Registered Schools Details</DialogTitle>
      <DialogDescription>
        {school ? (
            <div className="mt-4 space-y-2 text-sm">
                  <p><strong>Name:</strong> {school.name}</p>
                  <p><strong>moeRegNo:</strong> {school.type}</p>
                  <p><strong>kpsaRegNo:</strong> {school.location}</p>
                  <p><strong>name:</strong> {school.population}</p>
                  <p><strong>phone :</strong> {school.registrationDate}</p>
                  <p><strong>curriculumType :</strong> {school.registrationDate}</p>
                  <p><strong>category :</strong> {school.registrationDate}</p>
                  <p><strong>type :</strong> {school.registrationDate}</p>
                  <p><strong>composition :</strong> {school.registrationDate}</p>
                  <p><strong>location :</strong> {school.registrationDate}</p>
                  <p><strong>address :</strong> {school.registrationDate}</p>
                  <p><strong>website :</strong> {school.registrationDate}</p>
                  <p><strong>region :</strong> {school.registrationDate}</p>
                  <p><strong>county :</strong> {school.registrationDate}</p>
                  <p><strong>subCounty :</strong> {school.registrationDate}</p>
                </div>):(
                    <p>Loading school details...</p>)}
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default Headui