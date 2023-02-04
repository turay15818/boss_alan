import GetVendor from '../model/GetVendorModel.js';

export const vendor = async (req, res) => {
    try {
        const response = await GetVendor.findAll({
            attributes: ['id', 'meterSerial', 'dateFrom', 'dateTo'],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
export const vendorById = async (req, res) => {
    try {
        const response = await GetVendor.findOne({
            where: {
                id: req.params.id
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


export const createVendor = async (req, res) => {
    const { meterSerial, dateFrom, dateTo } = req.body;
    try {
        await GetVendor.create({
            meterSerial: meterSerial,
            dateTo: dateTo,
            dateFrom: dateFrom,
        });
        res.status(201).json({ msg: "Register Successful" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateVendor = async (req, res) => {
    const vendor = await GetVendor.findOne({
        where: {
            id: req.params.id,
        }
    });
    if (!vendor) return res.status(404).json({ msg: "Data not Found" });
    const { meterSerial, dateFrom, dateTo } = req.body;
    try {
        await GetVendor.update({

            meterSerial: meterSerial,
            dateTo: dateTo,
            dateFrom: dateFrom,
        }, {
            where: {
                id: vendor.id
            }
        });
        res.status(200).json({ msg: "Successfully" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}







// TODO

