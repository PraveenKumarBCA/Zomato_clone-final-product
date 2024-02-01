import { useEffect, useState } from "react";

const Praveen=()=>{
    const [selectedTickBox,SetselectedTickBox]=useState([])
    const [countState,setCountState]=useState([])
    const [reps,Setreps]=useState([]);
    const [Lbs,SetLbs]=useState([]);
    // const [time,Settime]=useState({
    //     minutes:"",
    //     seconds:""
    // })
    const [time,setTime]=useState()
    const [workoutTracker,SetWorkoutTracker]=useState([])
    let startTime=2
    let Time=startTime *60
    let newTime=Time;
    let timeBox=document.querySelector(".timeBox")
    const myfun=()=>{

        let sec=Time % 60
        setTime(sec)
       if(sec == 56){
        clearInterval()
       }
        Time=Time-1
    }
    let timer
    let counts=0

    const  StartInterval=()=>{
        timer=setInterval(()=>{
            console.log(counts)
            counts++
        },1000)

    }
    const StopInterval=()=>{
        console.log("clear clicked")
        clearInterval(timer)
    }
    let count=0
    const wokoutPlus=()=>{
        count +=1
        countState.push(count)
        setCountState([...countState])
    }
    const wokoutMinus=()=>{
        countState.pop()
        setCountState([...countState])
        workoutTracker.pop()
        SetWorkoutTracker([...workoutTracker])

    }
    const repsBox=(event,index)=>{
        let val=Number.isInteger(Number(event.target.value))
       if(val === true){
        // reps.splice(index,1,Number(event.target.value))
        // Setreps([...reps])
        reps[index]=Number(event.target.value)
        Setreps([...reps])
        workoutTracker[index]={...workoutTracker[index],[`Reps ${index+1}`]:event.target.value}
    }

    }
    const LbsBox=(event,index)=>{
        let val=Number.isInteger(Number(event.target.value))
        if(val === true){
            Lbs[index]=Number(event.target.value)
            SetLbs([...Lbs])
            workoutTracker[index]={...workoutTracker[index],[`Lbs ${index+1}`]:event.target.value}
        }
    }

    const tickBtn=(event,index)=>{
        let res=selectedTickBox.includes(index)
        if(res == false){
            SetselectedTickBox([...selectedTickBox,index])
            StartInterval()

        }
        else{
          let fil=  selectedTickBox.filter((item)=> item !==index)
          SetselectedTickBox([...fil])
            
        }
        // console.log(selectedTickBox)
        let tickBox=document.querySelector(".tick-box")
        // tickBox.style.backgroundColor="red"
        // console.log(selectedTickBox)

    }


    return(
        <>
        <section className="workout-box">
            <p>Wednessday</p>
            <p>bench Press</p>
            <section className="d-flex justify-content-between">
                <p>Sets</p>
                <p>lbs</p>
                <p>Reps</p>
            </section>
            {
                countState.map((item,index)=>{
                    return(
                        <>
            <section className="d-flex justify-content-between input-box mb-2" key={index}>
                <p>{index+1}</p>
                <input type="text" name="" id=""  value={Lbs[index]}  onChange={(event)=>{LbsBox(event,index)}} maxLength={4}/>
                <input type="text" name="" id="" value={reps[index]} onChange={(event)=>{repsBox(event,index)}} maxLength={2}/>
                <div className="tick-box d-flex justify-content-center align-items-center" style={{backgroundColor:selectedTickBox.includes(index) == true ? "red" : ""}}><span className="fa-solid fa-check" onClick={(event)=>{tickBtn(event,index)}}></span></div>
            </section>
                        </>
                    )
                })
            }
            <p className="fa-solid fa-plus wokout-plus" onClick={wokoutPlus}></p>
            <p className="fa-solid fa-minus wokout-minus"  onClick={wokoutMinus}></p>
        </section>
        <input type="text" name="" id="" className="timeBox" value={time} onChange={()=>{}}/>
        <button onClick={StopInterval}>Clear</button>
        <button onClick={StartInterval}>Start</button>
        </>
    )
}
export default Praveen;