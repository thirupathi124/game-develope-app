



//Home page data
const tournamentData = [
    {
      date : "12-09-2022",
      name : "Sunday Party",
      upcome :"Upcomeing",
      price : "₹2 Lakhs",
      live :"8am to 12pm",
      link :"/sunday",
     },
    
     {
      date : "12-09-2022",
      name : "Moday Special",
      upcome :"Upcomeing",
      price : "₹2 Lakhs",
      live :" 8 am to 10am",
      link :"",
      alert:function(){
        return alert ("some value")
      }
     //link :"/monday"
    },
    {
        date : "12-09-2022",
        name : "Thousday Star",
        price : "₹10000",
        live :"8am to 10am",
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
        live :"8am to 12pm",
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
        live :" 8 am to 10am",
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
        live :" 8 am to 10am",
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
        live :" 8 am to 10am",
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
    totalprice : "₹5000 FiveThousand",
    pay : "₹5",
    spots : "0 spots left",
    left : "1000 spots",
    value : "0",
    firstprice : "(1st) ₹5000",
    percentage : "99%",
    live :"Review"

  },

]

export {registration,sunday,tournamentData}

