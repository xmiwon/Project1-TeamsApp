const handleTime = (req, res, dayjs) => {
    const timeObj = {
        year: dayjs().year(),
        month: dayjs().month() + 1,
        day: dayjs().format('ddd'),
        hour: dayjs().hour(),
        minute: dayjs().minute(),
        second: dayjs().second()
    } 
    res.send(timeObj)
}

module.exports = {
    handleTime: handleTime
}