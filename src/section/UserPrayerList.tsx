
import axios from "axios";
import { useEffect, useState } from "react";
import PrayerListCard from "../components/PrayerListCard";

interface Prayer {
  id: number;
  user_id: number;
  guest_name: string;
  guest_phone: string | null;
  guest_num_attend: number | null;
  guest_prayer: string;
  created_at: string;
  updated_at: string;
  is_attend_marriage: boolean | null;
  is_attend_party: boolean | null;
}


export default function UserPrayerList() {
  const [prayerList, setPrayerList] = useState<Prayer[] | undefined>()

  useEffect(() => {
    axios.get(import.meta.env.VITE_PROD_API_BASE_URL + "/rsvp/1"
    ).then((res) => {
      setPrayerList(res.data.data)
    })
  }, [])

  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center relative mt-12">
        <div className="max-w-[720px] w-full relative z-50">
          <h1 className="text-center mb-4 text-cust-red-color">Jazakumullah Khaiir Atas Do'a terbaiknya untuk kami..💖</h1>
          {
            prayerList ? 
              prayerList?.map((val, index) => {
                return (
                  <PrayerListCard key={index} propUserName={val.guest_name} propIsAttendParty={val.is_attend_party} propCreatedAt={val.created_at} >
                    {val.guest_prayer}
                  </PrayerListCard>
                )
            })
            : ''
          }
        </div>
      </section >
    </>
  )
}