



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
      link :"/sunday",
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
    starttime :"12pm to 3pm"
  }
]




//sunday contes

const sunday = [
 {
    totalprice : "₹10000 TenThousand",
    pay : "₹0",
    spots : "0 spots left",
    left : "1000 spots",
    value : "70",
    firstprice : "(1st) ₹5000",
    percentage : "24%",
    live :""

  },

]

export {registration,sunday,tournamentData}

