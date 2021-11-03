const express = require('express'),
    cors = require('cors'),
    rateLimit = require('express-rate-limit'),
    helmet = require('helmet');
    
    app = express();

    app.use(helmet());
    const limiter = rateLimit({
    // depends on the nature of your api usage
    max: 100,
    // set time limit to 1hr
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, try again in an hour'
    });
    app.use('/currin', limiter);
    app.use(express.json({ limit: '10kb' }));
    app.use(express.urlencoded({ extended: true, limit: '10kb' }));
    app.use(cors());
    app.options('*', cors());

    app.use(`${process.env.BASE_NAME}/countries`, require('./routes/countriesRoutes.js'));

    app.all('*', (req, res, next)=>{
        // we create an error by initializing the Error class object


        //whenever we pass an argument into next() express always sees it as an error message, it will then skip all the other middlware/functions to be executed and pass the error to the global error handler making that error acessible to our default express error middleware
        const AppError = require('./error/ErrorModule.js');
        next(new AppError(`Can't find ${req.originalUrl}  on this server!! 😫`, 404));
    });

    // using express's error handling middleware

    app.use(require('./error/errorControls.js'));

    module.exports = app;



    
