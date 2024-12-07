import { format } from "date-fns";
import { useEffect, useState } from "react"

interface PrayerListType {
  children: string | Array<string | number>,
  propUserName: string,
  propIsAttendParty: boolean | null,
  propCreatedAt: Date | string
}


export default function PrayerListCard({ children, propUserName, propIsAttendParty, propCreatedAt }: PrayerListType) {
  const [formatedCreatedAt, setFormatedCreatedAt] = useState<string>()
  useEffect(() => {
    setFormatedCreatedAt(format(new Date(propCreatedAt), 'MMMM do, yyyy H:mm:ss'));
  },[])
  return (
    <div className="bg-cust-very-light-blue-color p-8 mb-8">
      <div className="flex gap-2 items-center mb-2">
        <h3 className="custom-heading-2" style={{ fontSize: "16px" }}>{propUserName}</h3>
        <small className="p-1.5 rounded-md bg-cust-blue-color text-cust-very-light-blue-color text-[10px]">
          {propIsAttendParty ? "Hadir" : "Tidak Hadir"}
        </small>
      </div>
      <div className="text-[11px] text-cust-brown-color italic mb-3">
        { formatedCreatedAt }
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}