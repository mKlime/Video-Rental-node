exports.showRentList = (req, res, next) => {
    res.render('pages/rent/list', {navLocation:'rent'});
}

exports.showAddRentForm = (req, res, next) => {
    res.render('pages/rent/form', {navLocation:'rent'});
}

exports.showRentDetails = (req, res, next) => {
    res.render('pages/rent/details', {navLocation:'rent'});
}