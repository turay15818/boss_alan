import VenShiftEnquiries from "../model/VenShitEnquiriesModel.js";


export const getVenShiftEnquiries = async (req, res) => {
    try {
        const response = await VenShiftEnquiries.findAll({
            attributes: ['id', 'paymentDate'],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
export const VenShiftEnquiriesById = async (req, res) => {
    try {
        const response = await VenShiftEnquiries.findOne({
            where: {
                id: req.params.id
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


export const createVenShiftEnquiries = async (req, res) => {
    const { paymentDate } = req.body;
    try {
        await VenShiftEnquiries.create({
            paymentDate: paymentDate,
            
        });
        res.status(201).json({ msg: "Created Successfully" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}


// TODO

