import { Response } from "express";
import { AuthRequest } from "../../users/controller/userAuthMiddleware.js";
import { prisma } from "../../lib/prisma.js";


const getAlerts = async (req: AuthRequest, res: Response) => {
    try {
        if (!req.user || !req.user.id) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        const alerts = await prisma.alert.findMany({
            where: {
                asset: {
                    ownerId: req.user.id
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.status(201).json({ message: "successfully fetched alerts", data: alerts });
    } catch (error) {
        console.error("Error while fetching alerts: ", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export {
    getAlerts
}