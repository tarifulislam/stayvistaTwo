/* eslint-disable react/prop-types */

import { formatDistance } from "date-fns";
import Button from './../Button/Button';
import Calenders from "./Calenders";
import { useState } from "react";

    const RoomReservation = ({rooms}) => {

    // const totalDays = parseInt(
    //     formatDistance(new Date(rooms?.to), new Date(rooms?.from)).split(' ')[0]
    // )
    //       // Total Price Calculation
    // const totalPrice = totalDays * rooms?.price


    const [value, setValue] = useState({
        startDate: new Date(rooms?.from),
        endDate: new Date(rooms?.to),
        key: "selection"
    
    })


    return (
        <div className=" rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
            <div className=" flex items-center p-4 gap-1">
                <div className=" text-2xl  font-semibold">$ {rooms?.price}</div>
                <div className=" font-light text-neutral-500">night</div>
            </div>
            <hr />
            <div className=" flex justify-center">
                <Calenders ></Calenders>
            </div>
            <hr />
            <div className="p-4">
                <Button label ={'Reserve'}/>
            </div>
            <div className=" p-4 flex items-center justify-between  font-semibold text-lg">
                <div>Total</div>
                <div>{rooms?.price}$</div>
            </div>
        </div>
    );
};

export default RoomReservation;