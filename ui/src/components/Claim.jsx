import React from "react";
import { useState, useEffect } from "react";
import { boxDays } from "../data/Days";
import Box from "./Box";
import { TiTime } from "react-icons/ti";
import SlideIn from "./SlideIn";
import { useSelector,useDispatch } from "react-redux";
import {progressClaim,claimPoints,setClaimed} from "../redux/reducers/AppReducer";




// console.log(timeString); // "13:45:22"


const Claim = (props) => {
    const dispatch = useDispatch()

    const Claimed = useSelector(state=>state.App.Claimed)
    const dailyClaim = useSelector(state=>state.App.dailyClaim)

  const [timeLeft, setTimeLeft] = useState("");
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
      
      
      const intervalId = setInterval(() => {
    
      const now = new Date();
      const hours =   23- now.getHours();
      const minutes =59 - now.getMinutes();
      const seconds = 59 - now.getSeconds();
      const timeString = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      setTimeLeft(timeString.includes('-') ? timeString.slice(1,timeString.length): timeString);
    }, 1000);


    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []);


  useEffect(() => {
        
          timeLeft === "00:00:00"
            ? dispatch(setClaimed(true))
            : console.log(timeLeft);
        
  
    // return () => {
    // }
  }, [timeLeft])
  
// FUNCTIOS

 const onClaim = ()=>{

     dispatch(progressClaim())
    dispatch(claimPoints())

    dispatch(setClaimed(false))




    // setIsOpen(true);
    
 }


  return (
    <div className=' flex flex-col items-start text-[13px] mb-5 rectangular-component'>
      <h2 className='mb-5'>{props.title}</h2>
      <div className='flex flex-wrap md:flex-nowrap'>
        {boxDays.map((box) => {
          return <Box key={box.day} day={box.day} sticks={box.points} />;
        })}
      </div>
      <p className='mt-4'>Nice! You gathered 20 Sticks today!</p>
      <p className='mb-2'>
        Continue gathering sticks on <a href='#'>our mobile app</a>
      </p>
      {!Claimed ? (
        <button
          onClick={onClaim}
          disabled={!Claimed}
          className='w-full flex justify-center items-center  rounded bg-gray-800 disabled:bg-gray-500 text-teal-100'
        >
          {" "}
          Come back in <TiTime /> {timeLeft}
        </button>
      ) : (
        <button
          onClick={onClaim}
          disabled={!Claimed}
          className='w-full flex justify-center items-center  rounded bg-gray-800 disabled:bg-gray-500 text-teal-100'
        >
          {" "}
          Collect {dailyClaim} Sticks
        </button>
      )}
      <SlideIn
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />

    </div>
  );
};

export default Claim;
