// @desc Get all contacts
// @route Get /api/contacts
// @access public


const getContact = (req, res) => {
    res.status(200).json({ message: "Get all contacts!" });
}

// @desc Get all contacts
// @route Get /api/contacts
// @access public


const createContact = (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All Fields are mandatory");
    }
    res.status(201).json({ name, email, phone });
}


// @desc Get all contacts
// @route Get /api/contacts
// @access public

const updateContact = (req, res) => {
    res.status(200).json({ message: "Update Contact!" });
}


const deleteContact = (req, res) => {
    res.status(200).json({ message: "Delete Contact!" });
}


module.exports = { getContact, createContact, updateContact, deleteContact }