import { getTicketById } from "../services/ticketServices.js";

export async function authorizeOwnership(req, res, next){
    const ticketId = parseInt(req.params.id);
    const ticket = await getTicketById(ticketId);

    if(ticket.userId !== req.user.id){
        const error = new Error('Forbidden: insufficient permission');
        error.status = 403;
        return next(error);
    }
    return next();
}