import Alert from "@mui/material/Alert"

 const tournamentData = [
    {
      date : "00-00-0000",
      name : "Sunday Party",
      upcome :"Completed",
      price : "₹2 Lakhs",
      time :"0am to 0pm",
      link :"",
      // link :"/sunday",
      
      alert:function(){
        return <Alert severity="success">eerer</Alert>

      
          
      }
     },
    
     {
      date : "00-00-000",
      name : "Moday Special",
      upcome :"Upcomeing",
      price : "₹2 Lakhs",
      time :"0am to 0am",
      // link :"",
      link :"/monday",

      // alert:function(){
      //   return alert("Soon Update.... Join Our Telegram ")
      // }
    },
    {
        date : "00-00-000",
        name : "Thousday Star",
        price : "₹10000",
        time :"0am to 0am",
        upcome:"Upcomeing",
        link:"",
        // link:"/theusday",
        alert:function(){
          return alert("Soon Update.... Join Our Telegram ")
        }
    },

    {
        date : "00-00-000",
        name : "Wenesday",
        price : "₹2 Lakhs",
        time :"0am to 0pm",
        upcome:"Upcomeing",
        link:"",
        // link:"/wedday",
        alert:function(){
          return alert("Soon Update.... Join Our Telegram ")
        }

      },
      {
        date : "00-00-000",
        name : "Thusday Masla",
        price : "₹2 Lakhs",
        time :"0am to 0am",
        upcome:"Upcomeing",
        link:"",
        // link:"/thusday",
        alert:function(){
          return alert("Soon Update.... Join Our Telegram ")
        }

      },
      {
        date : "12/08-2022",
        name : "Freedom friday",
        price : "₹2 Lakhs",
        time :"0am to 0am",
        upcome:"Upcomeing",

        link:"",
        // link:"/friday",
        alert:function(){
          return alert("Soon Update.... Join Our Telegram ")
        }

      },
      {
        date : "00-00-0000",
        name : "Saterday San",
        price : "₹2 Lakhs",
        time :" 0am to 0am",
        upcome:"Upcomeing",
        link:"",
        // link:"/saterday"
        alert:function(){
          return alert("Soon Update.... Join Our Telegram ")
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
    spots : "0 spots left",
    left : "10 spots",
    value : 90,
    firstprice : "(1st) ₹20,000",
    percentage : "99%",
    live :"Review"

  },

]

export {registration,sunday,tournamentData}

