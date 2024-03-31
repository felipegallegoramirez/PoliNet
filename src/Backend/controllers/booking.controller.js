const Booking = require("../models/booking");

const BookingCtrl = {};





BookingCtrl.getBookings = async (req, res, next) => {
    try{
        const save = await Booking.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

const User = require("../models/user");
const { messageBoking } = require("../utils/emailprefabs/booking");
const Survey = require("../models/survey");

BookingCtrl.createBooking = async (req, res, next) => {
    try{
        const { profesional, service, day, month,hour,user} = req.body;
        const body = { profesional, service, day, month,hour,user};
        var user1= await User.findById(user);
        var user2= await User.findById(profesional);
        var save= await Booking.create(body);



        const survey1={
            title:'Mentor a Emprendedor',
            answers:[],
            idbooking:save._id,
            responsible:{
                _id:user2._id,
                name:user2.name
            },
            respondent:{
                _id:user1._id,
                name:user1.name
            },
            rating:0,
            state:false,
            hour:hour,
            day:day,
            month:month,
        }
        const survey2={
            title:'Emprendedor a mentor',
            answers:[],
            idbooking:save._id,
            respondent:{
                _id:user2._id,
                name:user2.name
            },
            responsible:{
                _id:user1._id,
                name:user1.name
            },
            rating:0,
            state:false,
            hour:hour,
            day:day,
            month:month,
        }

        var Msurvey1= await Survey.create(survey1);
        var Msurvey2= await Survey.create(survey2);

        messageBoking(user1.email, user1.name, `${day}/${month+1}/2024 a las ${hour}`,user2.name,save._id,Msurvey1._id)
        messageBoking(user2.email, user2.name, `${day}/${month+1}/2024 a las ${hour}`,user1.name,save._id,Msurvey2._id)

        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

BookingCtrl.getBookingDay = async (req, res, next) => {
    try{
        const { day,month,service,profesional } = req.params;
        if(profesional=="any"){
            const save = await Booking.find({day:day,month:month,service:service});
            const re= save.map(x=>({id:x["profesional"],hour:x["hour"]}))
            res.status(200).send(re)
        }
        else{
                const save = await Booking.find({day:day,month:month,service:service,profesional:profesional});
                const re= save.map(x=>({id:x["profesional"],hour:x["hour"]}))
                res.status(200).send(re)
        }
    }catch(err){
        res.status(400).send(err)

    }
};

BookingCtrl.getBookingDayPersonal = async (req, res, next) => {
    try{
            const { day,month,me } = req.params;
            const save = await Booking.find({day:day,month:month,$or:[{ user: me },{ profesional: me }]});
            const re=save.map(x=>({id:x["profesional"],hour:x["hour"]}))
            res.status(200).send(re)
    }catch(err){
        res.status(400).send(err)

    }
};

BookingCtrl.getBooking = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Booking.find({ email: id});
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

BookingCtrl.editBooking = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Booking.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
    res.status(400).send(err)
}

};

BookingCtrl.deleteBooking = async (req, res, next) => {
    try{
        await Booking.findByIdAndRemove(req.params.id);
        res.json({ status: "Booking Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};




module.exports = BookingCtrl;