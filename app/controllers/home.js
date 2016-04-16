var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Person = mongoose.model('Person');
    // Article = mongoose.model('Article');

module.exports = function (app) {
    app.use('/', router);
};

router.get('/', function (request, response, next) {
    Person.find().sort({lastName: 1}).exec(function (error, people) {
        if (error)
            return next(error);

        response.render('index', {
            title: 'HackDFW Bus Riders',
            people: people
        });
    });
});

router.post('/addrider', function (request, response, next) {
    var person = new Person(request.body);

    person.save(function (error, person) {
        if (error)
            return next(error);

        return response.redirect('/');
    });
});

router.post('/board', function (request, response, next) {
    Person.findById(request.body.personId, function (error, person) {
        if (error)
            return next(error);

        if (request.body.boardingType == 'home')
            person.boardedHome = true;
        else if (request.body.boardingType == 'remote')
            person.boardedRemote = true;

        person.save(function (error, person) {
            if (error)
                return next(error);

            return response.render('board', {
                person: person
            });
        });
    });
});

router.post('/confirm', function (request, response, next) {
    if (request.body.phoneNumber) {
        Person.findById(request.body.personId).exec(function (error, person) {
            if (error)
                return next(error);

            person.phoneNumber = request.body.phoneNumber;
            person.save(function (error) {
                if (error)
                    return next(error);

                response.redirect('/');
            });
        });
    }
    else
        response.redirect('/');
});