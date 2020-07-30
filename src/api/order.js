import { get, put, del } from "./axios";

const ORDER_BASE_URL = "/paidOrder";


export const getOrders = async() => {
    const { data } = await get(ORDER_BASE_URL)
    return data   
}

export const changeStatus = async(orderId, status) => {
    const { data } = await put(ORDER_BASE_URL + '/' + orderId, {
        "status" : status
    })
    return data
}

export const deleteOrder = async(orderId) => {
    const { data } = await del(ORDER_BASE_URL + '/' + orderId)
    return data   
}