import moment from "moment"

export const getDate = (timestamp: string) => {
    return moment(timestamp).startOf("seconds").fromNow()
}