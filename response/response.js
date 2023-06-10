import { HttpCode } from './httpcode.js'

export const response = {
  succes: function (req, res, message, status) {
    const statusCode = status || HttpCode.OK
    const statusMessage = message || 'OK'
    res.status(statusCode).send({
      request: req.method + ' ' + req.url,
      error: false,
      status: statusCode,
      body: statusMessage
    })
  },
  error: function (req, res, message, status) {
    const statusCode = status || HttpCode.INTERNAL_SERVER_ERROR
    const statusMessage = message || 'Internal Server Error'
    res.status(statusCode).send({
      request: req.method + ' ' + req.url,
      error: true,
      status: statusCode,
      body: statusMessage
    })
  }
}