const express = require('express');
const { raw } = require('express');
const app = express();

const sampledata = 
    {
        "repdata": [
          {
              "id": "1",
              "name": "Nikhil Garakapati",
              "username": "Nikhil",
              "email": "nikhil@gmail.com",
              "representative region": "ANDHRA PRADESH",
              "representative hq": "Chittor",
              "representative area": "Chittor",
              "customer name": "VasaviMeds",
              "customer pincode": "4343434",
              "customer phone": "11111111",
              "phone": "1212121212"
          },
          {
              "id": "2",
              "name": "Nikhil Garakapati",
              "username": "Nikhil",
              "email": "nikhil@gmail.com",
              "representative region": "ANDHRA PRADESH",
              "representative hq": "Chittor",
              "representative area": "Chittor",
              "customer name": "MegaMeds",
              "customer pincode": "4343434",
              "customer phone": "22222222",
              "phone": "1212121212"
          },
          {
              "id": "3",
              "name": "Nikhil Garakapati",
              "username": "Nikhil",
              "email": "nikhil@gmail.com",
              "representative region": "ANDHRA PRADESH",
              "representative hq": "Chittor",
              "representative area": "Tirupati",
              "customer name": "SuperMeds",
              "customer pincode": "12121212",
              "customer phone": "3333333",
              "phone": "1212121212"
          },
          {
              "id": "4",
              "name": "Rajesh Kumar",
              "username": "Rajesh",
              "email": "rajesh@gmail.com",
              "representative region": "ANDHRA PRADESH",
              "representative hq": "Anantapur",
              "representative area": "Anantapur",
              "customer name": "South Elvis Meds",
              "customer pincode": "76767676",
              "customer phone": "44444444",
              "phone": "2323232"
          },
          {
              "id": "5",
              "name": "Rajesh Kumar",
              "username": "Rajesh",
              "email": "rajesh@gmail.com",
              "representative region": "ANDHRA PRADESH",
              "representative hq": "Anantapur",
              "representative area": "Dharmavaram",
              "customer name": "Balaji Meds",
              "customer pincode": "354355",
              "customer phone": "55555555",
              "phone": "2323232"
          },
          {
              "id": "6",
              "name": "Suresh Singh",
              "username": "Suresh",
              "email": "suresh@gmail.com",
              "representative region": "ANDHRA PRADESH",
              "representative hq": "Kurnool",
              "representative area": "Kurnool",
              "customer name": "South Christy Meds",
              "customer pincode": "533434",
              "customer phone": "6666666",
              "phone": "8723473737"
          },
          {
              "id": "7",
              "name": "Suresh Singh",
              "username": "Suresh",
              "email": "suresh@gmail.com",
              "representative region": "ANDHRA PRADESH",
              "representative hq": "Kurnool",
              "representative area": "Atamakur",
              "customer name": "Homewealth Meds",
              "customer pincode": "5454544",
              "customer phone": "77777777",
              "phone": "8723473737"
          },
          {
              "id": "8",
              "name": "Suresh Singh",
              "username": "Suresh",
              "email": "suresh@gmail.com",
              "representative region": "ANDHRA PRADESH",
              "representative hq": "Kurnool",
              "representative area": "Kurnool",
              "customer name": "VijayaMeds",
              "customer pincode": "533434",
              "customer phone": "8888888",
              "phone": "8723473737"
          },
          {
              "id": "9",
              "name": "Suresh Singh",
              "username": "Suresh",
              "email": "suresh@gmail.com",
              "representative region": "ANDHRA PRADESH",
              "representative hq": "Kurnool",
              "representative area": "Kurnool",
              "customer name": "Supriya Meds",
              "customer pincode": "533434",
              "customer phone": "9999999",
              "phone": "8723473737"
          },
          {
              "id": "10",
              "name": "Aman Kumar",
              "username": "Aman",
              "email": "aman@gmail.com",
              "representative region": "ANDHRA PRADESH",
              "representative hq": "Warangal",
              "representative area": "Warangal Town",
              "customer name": "StaySafe Meds",
              "customer pincode": "827482",
              "customer phone": "99529072323",
              "phone": "8723473737"
          }    
        ]
    }



app.get('/', (req, res) => {
    res.send(sampledata);
})


const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Listening to port ${port}`));