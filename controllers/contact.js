exports.getContactInfo = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
};

exports.postContactInfo  = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    res.redirect('/success?message=Form filled successfully');
};

