import {Alert} from "@mui/material"

 const tournamentData = [
    {
      date : "12-09-2022",
      name : "Sunday Party",
      upcome :"Completed",
      price : "₹2 Lakhs",
      time :"8am to 12pm",
      link :"/sunday",
     },
    
     {
      date : "12-09-2022",
      name : "Moday Special",
      upcome :"Upcomeing",
      price : "₹2 Lakhs",
      time :" 8 am to 10am",
      link :"",
      alert:function(){
        return Alert ("some value")
      }
     //link :"/monday"
    },
    {
        date : "12-09-2022",
        name : "Thousday Star",
        price : "₹10000",
        time :"8am to 10am",
        upcome:"upcomeing",
        link:"",
        // link:"/theusday",
        alert:function(){
          return alert ("some value")
        }
    },

    {
        date : "12-09-2022",
        name : "Wenesday",
        price : "₹2 Lakhs",
        time :"8am to 12pm",
        upcome:"upcomeing",
        link:"",
        // link:"/wedday",
        alert:function(){
          return alert ("some value")
        }

      },
      {
        date : "12-09-2022",
        name : "Thusday Masla",
        price : "₹2 Lakhs",
        time :" 8 am to 10am",
        upcome:"upcomeing",
        link:"",
        // link:"/thusday",
        alert:function(){
          return alert ("some value")
        }

      },
      {
        date : "12/08-2022",
        name : "Freedom friday",
        price : "₹2 Lakhs",
        time :" 8 am to 10am",
        upcome:"upcomeing",

        link:"",
        // link:"/friday",
        alert:function(){
          return alert ("some value")
        }

      },
      {
        date : "12-08-2022",
        name : "Saterday San",
        price : "₹2 Lakhs",
        time :" 8 am to 10am",
        upcome:"upcomeing",
        link:"",
        // link:"/saterday"
        alert:function(){
          return alert ("some value")
        }
      }
   

]

//Registaration start:

const registration = [
  {
    tourname:"Sunday Party",
    starttime :"12 pm to 3 pm"
  }
]




//sunday contes

const sunday = [
 {
    totalprice : "₹50,000 Fifty Thousand",
    pay : "₹15",
    spots : "2338 spots left",
    left : "10000 spots",
    value : "40",
    firstprice : "(1st) ₹20,000",
    percentage : "99%",
    time :"Review"

  },

]

export {registration,sunday,tournamentData}

