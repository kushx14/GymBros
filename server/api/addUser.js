const User = require('../model/User');

const addUser = async (req, res) => {
    const { userid, email, name} = req.body;
    if (!userid || !email) return res.status(400).json({ 'message': 'UserId and email are required.' });

    const duplicate = await User.findOne({ userid: userid }).exec();
    if (duplicate) return res.sendStatus(409);  

    try {
        const result = await User.create({
            "userid": userid,
            "email": email,
            "name" : name || "Unknown",
        });

        console.log(result);

        res.status(201).json({ 'success': `New user ${userid} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { addUser };