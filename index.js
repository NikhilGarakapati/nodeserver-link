const express = require('express');
const { raw } = require('express');
const cors = require('cors');
const app = express();

const sampledata = 
    {
        "repdata": [
          {
              "id": "1",
              "name": "Nikhil Garakapati",
              "username": "Nikhil",
              "email": "nikhil@gmail.com",
              "representativeRegion": "ANDHRA PRADESH",
              "representativeHq": "Chittor",
              "representativeArea": "Chittor",
              "customerName": "VasaviMeds",
              "customerPincode": "4343434",
              "customerPhone": "11111111",
              "phone": "1212121212"
          },
          {
              "id": "2",
              "name": "Nikhil Garakapati",
              "username": "Nikhil",
              "email": "nikhil@gmail.com",
              "representativeRegion": "ANDHRA PRADESH",
              "representativeHq": "Chittor",
              "representativeArea": "Chittor",
              "customerName": "MegaMeds",
              "customerPincode": "4343434",
              "customerPhone": "22222222",
              "phone": "1212121212"
          },
          {
              "id": "3",
              "name": "Nikhil Garakapati",
              "username": "Nikhil",
              "email": "nikhil@gmail.com",
              "representativeRegion": "ANDHRA PRADESH",
              "representativeHq": "Chittor",
              "representativeArea": "Tirupati",
              "customerName": "SuperMeds",
              "customerPincode": "12121212",
              "customerPhone": "3333333",
              "phone": "1212121212"
          },
          {
              "id": "4",
              "name": "Rajesh Kumar",
              "username": "Rajesh",
              "email": "rajesh@gmail.com",
              "representativeRegion": "ANDHRA PRADESH",
              "representativeHq": "Anantapur",
              "representativeArea": "Anantapur",
              "customerName": "South Elvis Meds",
              "customerPincode": "76767676",
              "customerPhone": "44444444",
              "phone": "2323232"
          },
          {
              "id": "5",
              "name": "Rajesh Kumar",
              "username": "Rajesh",
              "email": "rajesh@gmail.com",
              "representativeRegion": "ANDHRA PRADESH",
              "representativeHq": "Anantapur",
              "representativeArea": "Dharmavaram",
              "customerName": "Balaji Meds",
              "customerPincode": "354355",
              "customerPhone": "55555555",
              "phone": "2323232"
          },
          {
              "id": "6",
              "name": "Suresh Singh",
              "username": "Suresh",
              "email": "suresh@gmail.com",
              "representativeRegion": "ANDHRA PRADESH",
              "representativeHq": "Kurnool",
              "representativeArea": "Kurnool",
              "customerName": "South Christy Meds",
              "customerPincode": "533434",
              "customerPhone": "6666666",
              "phone": "8723473737"
          },
          {
              "id": "7",
              "name": "Suresh Singh",
              "username": "Suresh",
              "email": "suresh@gmail.com",
              "representativeRegion": "ANDHRA PRADESH",
              "representativeHq": "Kurnool",
              "representativeArea": "Atamakur",
              "customerName": "Homewealth Meds",
              "customerPincode": "5454544",
              "customerPhone": "77777777",
              "phone": "8723473737"
          },
          {
              "id": "8",
              "name": "Suresh Singh",
              "username": "Suresh",
              "email": "suresh@gmail.com",
              "representativeRegion": "ANDHRA PRADESH",
              "representativeHq": "Kurnool",
              "representativeArea": "Kurnool",
              "customerName": "VijayaMeds",
              "customerPincode": "533434",
              "customerPhone": "8888888",
              "phone": "8723473737"
          },
          {
              "id": "9",
              "name": "Suresh Singh",
              "username": "Suresh",
              "email": "suresh@gmail.com",
              "representativeRegion": "ANDHRA PRADESH",
              "representativeHq": "Kurnool",
              "representativeArea": "Kurnool",
              "customerName": "Supriya Meds",
              "customerPincode": "533434",
              "customerPhone": "9999999",
              "phone": "8723473737"
          },
          {
              "id": "10",
              "name": "Aman Kumar",
              "username": "Aman",
              "email": "aman@gmail.com",
              "representativeRegion": "ANDHRA PRADESH",
              "representativeHq": "Warangal",
              "representativeArea": "Warangal Town",
              "customerName": "StaySafe Meds",
              "customerPincode": "827482",
              "customerPhone": "99529072323",
              "phone": "8723473737"
          }    
        ]
    }

    // var whitelist = ['http://localhost:5000/repdata','http://localhost:5000']
    // var corsOptions = {
    //   origin: function (origin, callback) {
    //     if (whitelist.indexOf(origin) !== -1) {
    //       callback(null, true)
    //     } else {
    //       callback(new Error('Not allowed by CORS'))
    //     }
    //   }
    // }
    
    // // Then pass them to cors:
    // app.use(cors(corsOptions));



app.get('/repdata', function(req, res, next) {
    res.send(sampledata['repdata']);
})

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Listening to port ${port}`));
