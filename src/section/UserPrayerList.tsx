/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import axios from "axios";
import { useEffect, useState } from "react";
import PrayerListCard from "../components/PrayerListCard";


export default function UserPrayerList() {
  const [prayerList, setPrayerList] = useState()

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
          <h1 className="text-center mb-4 text-cust-red-color">Terima Kasih Atas Do'a terbaiknya untuk kami..💖</h1>
          {
            prayerList.data ? 
              prayerList?.data.map((val) => {
                return (
                  <PrayerListCard propUserName={val.guest_name} propIsAttendParty={val.is_attend_party} propCreatedAt={val.created_at} >
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