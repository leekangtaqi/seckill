'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _restError = require('./rest-error');

var _restError2 = _interopRequireDefault(_restError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errors = {};

errors.BadRequestError = (0, _restError.register)('BadRequestError', 400, 'Bad Request');
errors.UnauthorizedError = (0, _restError.register)('UnauthorizedError', 401, 'Unauthorized');
errors.PaymentRequiredError = (0, _restError.register)('PaymentRequiredError', 402, 'Payment Required');
errors.ForbiddenError = (0, _restError.register)('ForbiddenError', 403, 'Forbidden');
errors.NotFoundError = (0, _restError.register)('NotFoundError', 404, 'Not Found');
errors.MethodNotAllowedError = (0, _restError.register)('MethodNotAllowedError', 405, 'Method Not Allowed');
errors.NotAcceptableError = (0, _restError.register)('NotAcceptableError', 406, 'Not Acceptable');
errors.ProxyAuthenticationRequiredError = (0, _restError.register)('ProxyAuthenticationRequiredError', 407, 'Proxy Authentication Required');
errors.RequestTimeoutError = (0, _restError.register)('RequestTimeoutError', 408, 'Request Time-out');
errors.ConflictError = (0, _restError.register)('ConflictError', 409, 'Conflict');
errors.GoneError = (0, _restError.register)('GoneError', 410, 'Gone');
errors.LengthRequiredError = (0, _restError.register)('LengthRequiredError', 411, 'Length Required');
errors.PreconditionFailedError = (0, _restError.register)('PreconditionFailedError', 412, 'Precondition Failed');
errors.RequestEntityTooLargeError = (0, _restError.register)('RequestEntityTooLargeError', 413, 'Request Entity Too Large');
errors.RequesturiTooLargeError = (0, _restError.register)('RequesturiTooLargeError', 414, 'Request-URI Too Large');
errors.UnsupportedMediaTypeError = (0, _restError.register)('UnsupportedMediaTypeError', 415, 'Unsupported Media Type');
errors.RequestedRangeNotSatisfiableError = (0, _restError.register)('RequestedRangeNotSatisfiableError', 416, 'Requested Range Not Satisfiable');
errors.ExpectationFailedError = (0, _restError.register)('ExpectationFailedError', 417, 'Expectation Failed');
errors.ImATeapotError = (0, _restError.register)('ImATeapotError', 418, 'I am a teapot');
errors.UnprocessableEntityError = (0, _restError.register)('UnprocessableEntityError', 422, 'Unprocessable Entity');
errors.LockedError = (0, _restError.register)('LockedError', 423, 'Locked');
errors.FailedDependencyError = (0, _restError.register)('FailedDependencyError', 424, 'Failed Dependency');
errors.UnorderedCollectionError = (0, _restError.register)('UnorderedCollectionError', 425, 'Unordered Collection');
errors.UpgradeRequiredError = (0, _restError.register)('UpgradeRequiredError', 426, 'Upgrade Required');
errors.PreconditionRequiredError = (0, _restError.register)('PreconditionRequiredError', 428, 'Precondition Required');
errors.TooManyRequestsError = (0, _restError.register)('TooManyRequestsError', 429, 'Too Many Requests');
errors.RequestHeaderFieldsTooLargeError = (0, _restError.register)('RequestHeaderFieldsTooLargeError', 431, 'Request Header Fields Too Large');
errors.InternalServerError = (0, _restError.register)('InternalServerError', 500, 'Internal Server Error');
errors.NotImplementedError = (0, _restError.register)('NotImplementedError', 501, 'Not Implemented');
errors.BadGatewayError = (0, _restError.register)('BadGatewayError', 502, 'Bad Gateway');
errors.ServiceUnavailableError = (0, _restError.register)('ServiceUnavailableError', 503, 'Service Unavailable');
errors.GatewayTimeoutError = (0, _restError.register)('GatewayTimeoutError', 504, 'Gateway Time-out');
errors.HttpVersionNotSupportedError = (0, _restError.register)('HttpVersionNotSupportedError', 505, 'HTTP Version Not Supported');
errors.VariantAlsoNegotiatesError = (0, _restError.register)('VariantAlsoNegotiatesError', 506, 'Variant Also Negotiates');
errors.InsufficientStorageError = (0, _restError.register)('InsufficientStorageError', 507, 'Insufficient Storage');
errors.BandwidthLimitExceededError = (0, _restError.register)('BandwidthLimitExceededError', 509, 'Bandwidth Limit Exceeded');
errors.NotExtendedError = (0, _restError.register)('NotExtendedError', 510, 'Not Extended');
errors.NetworkAuthenticationRequiredError = (0, _restError.register)('NetworkAuthenticationRequiredError', 511, 'Network Authentication Required');
errors.BadDigestError = (0, _restError.register)('BadDigestError', 400, 'Bad Request');
errors.BadMethodError = (0, _restError.register)('BadMethodError', 405, 'Method Not Allowed');
errors.InternalError = (0, _restError.register)('InternalError', 500, 'Internal Server Error');
errors.InvalidArgumentError = (0, _restError.register)('InvalidArgumentError', 409, 'Conflict');
errors.InvalidContentError = (0, _restError.register)('InvalidContentError', 400, 'Bad Request');
errors.InvalidCredentialsError = (0, _restError.register)('InvalidCredentialsError', 401, 'Unauthorized');
errors.InvalidHeaderError = (0, _restError.register)('InvalidHeaderError', 400, 'Bad Request');
errors.MissingParameterError = (0, _restError.register)('MissingParameterError', 409, 'Conflict');
errors.NotAuthorizedError = (0, _restError.register)('NotAuthorizedError', 403, 'Forbidden');
errors.RequestExpiredError = (0, _restError.register)('RequestExpiredError', 400, 'Bad Request');
errors.RequestThrottledError = (0, _restError.register)('RequestThrottledError', 429, 'Too Many Requests');
errors.WrongAcceptError = (0, _restError.register)('WrongAcceptError', 406, 'Not Acceptable');

exports.default = errors;