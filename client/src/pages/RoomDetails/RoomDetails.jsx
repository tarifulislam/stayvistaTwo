import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import RoomHeader from "../../components/RoomElement/RoomHeader";
import RoomInfo from "../../components/RoomElement/RoomInfo";
import RoomReservation from "../../components/RoomElement/RoomReservation";
// https://raw.githubusercontent.com/shakilahmedatik/stayVista-starter-template/main/client/public/rooms.json

const RoomDetails = () => {
    const {id} = useParams()
    const [rooms, setRooms] = useState({})
    const [loading, setLoading] = useState(false)
  
      useEffect(()=>{
          setLoading(true)
          fetch("/rooms.json")
          .then(res => res.json())
          .then(data => {
            const singleRoom = data.find(rooms => rooms._id === id)
            setRooms(singleRoom)
            setLoading(false)
          })
      },[id]) 
  
      // console.log(rooms);
      if(loading){
           return <Loader></Loader>
     }

    return (
        <div>
           <Container>
            <Helmet>
                <title>
                    {rooms?.title}
                </title>
            </Helmet>
           <div className=" max-w-screen-lg mx-auto">
                <div className=" flex flex-col gap-6">
                    <RoomHeader rooms={rooms}></RoomHeader>
                </div>
                <div className=" grid grid-col  md:grid-cols-7 gap-10 mt-6">
                    <RoomInfo rooms={rooms}></RoomInfo>

                    <div className="  col-span-3 order-first md:order-last ">
                        <RoomReservation rooms={rooms}></RoomReservation>
                    </div>
                </div>
           </div>
           </Container>
        </div>
    );
};

export default RoomDetails;