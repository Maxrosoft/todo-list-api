import jwt from "jsonwebtoken";

export default function authenticateToken(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];

    if (token == null) {
        if (req.method === "PUT") {
            return res.status(403).send({
                message: "Forbidden",
            });
        }
        return res.status(401).send({
            message: "Unauthorized",
        });
    }

    jwt.verify(
        token,
        process.env.TOKEN_SECRET as string,
        (err: any, user: any) => {
            if (err) {
                console.log(err);
                return res.sendStatus(403);
            }

            req.user = user;

            next();
        }
    );
}
