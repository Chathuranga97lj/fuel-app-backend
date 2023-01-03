const { expressjwt:expressJwt } = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;

    return expressJwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            `${api}/vehiown/register`,
            `${api}/shedown/register`,
            `${api}/vehiown/login`,
            `${api}/shedown/login`,

            `${api}/shed/list`,
            {url: /\/api\/shed(.*)/ , methods: ['PUT', 'OPTIONS'] },
        ]
    });
}

async function isRevoked(req, token) {
    if (!token.payload.isAdmin) {
        return true;
    }

    return false;
}

module.exports = authJwt;