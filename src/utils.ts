import { CLOSE_DAYS_BEFORE_EVENT, NEXT_EVENT } from "./consts";

export const eventIsClosed = (): boolean => {
    const today = new Date();
    const closeDate = new Date(NEXT_EVENT);
    closeDate.setDate(closeDate.getDate() - CLOSE_DAYS_BEFORE_EVENT);

    return today >= closeDate;
}