const Fitnessdata = require('../model/Fitnessdata');

const addfitnessdata = async(req,res) =>{
    try {
        const newFitnessData = new Fitnessdata(req.body);
        const savedData = await newFitnessData.save();
        res.status(201).json(savedData);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const getfitnessdata = async(req,res) =>{
    try {
        const { userid } = req.body;
        const fitnessData = await Fitnessdata.findOne({ userid }).exec();
        console.log(userid);
        if (!fitnessData) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(fitnessData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {addfitnessdata, getfitnessdata};