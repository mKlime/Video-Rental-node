exports.showUserList = (req, res, next) => {
    res.render('pages/user/list', {navLocation:'user'});
}

exports.showAddUserForm = (req, res, next) => {
    res.render('pages/user/form', {navLocation:'user'});
}

exports.showUserDetails = (req, res, next) => {
    res.render('pages/user/details', {navLocation:'user'});
}