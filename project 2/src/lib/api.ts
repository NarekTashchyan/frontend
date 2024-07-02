import axios from "axios";
import { FilterTypes, IEvent } from "./types";

const URL = 'http://localhost:3004/events'
export const getAllEvents = async (type: FilterTypes = FilterTypes.all): Promise<IEvent[]> => {
    let temp = URL
    if (type != FilterTypes.all) {
        temp += '?type=' + type
    }
    const response = await axios.get(temp)
    return response.data
}
export const updateEvent = async (eventId: string, updatedEvent: IEvent): Promise<IEvent> => {
    const response = await axios.put(`${URL}/${eventId}`, updatedEvent);
    return response.data;
};