import passport from 'passport';
import express from 'express';
import { JsonResult } from '../@typings/JsonResult';
// const passport = require('passport');

export const authWithJwt = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    const strategy: string = 'jwt';
    const authenticateOptions: passport.AuthenticateOptions = {
        session: false,
    };

    passport.authenticate(strategy, authenticateOptions, (err, token, info) => {
        // if (info) {
        //     return res.status(400).json(
        //         new JsonResult({
        //             success: false,
        //             data: {
        //                 code: 'ERR-008',
        //                 message: info.message,
        //             },
        //             message: info.message,
        //         }),
        //     );
        // }

        if (err || !token) {
            const message = info.message || 'Please log in.';
            return res.status(401).json(
                new JsonResult({
                    success: false,
                    data: {
                        code: 'ERR-007',
                        message: message,
                    },
                    message: message,
                }),
            );
        }

        return next();
    })(req, res, next);
};
