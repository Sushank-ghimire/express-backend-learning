# Server Request Status Methods and Response Status Codes

This documentation provides an overview of the HTTP request methods and response status codes used in our server.

## HTTP Request Methods

HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Here are the commonly used methods:

- **GET**: Requests a representation of the specified resource. Requests using GET should only retrieve data.
- **POST**: Submits data to be processed to a specified resource.
- **PUT**: Updates a current resource with new data.
- **DELETE**: Deletes the specified resource.
- **PATCH**: Applies partial modifications to a resource.
- **HEAD**: Asks for a response identical to that of a GET request, but without the response body.
- **OPTIONS**: Used to describe the communication options for the target resource.

## HTTP Response Status Codes

HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

### 1xx: Informational

- **100 Continue**: Indicates that the initial part of a request has been received and has not yet been rejected by the server.
- **101 Switching Protocols**: Indicates that the server understands and is willing to comply with the client's request for a change in the application protocol being used on this connection.

### 2xx: Success

- **200 OK**: The request has succeeded.
- **201 Created**: The request has been fulfilled, resulting in the creation of a new resource.
- **202 Accepted**: The request has been accepted for processing, but the processing has not been completed.
- **203 Non-Authoritative Information**: The server is a transforming proxy that received a 200 OK from its origin, but is returning a modified version of the origin's response.
- **204 No Content**: The server successfully processed the request, and is not returning any content.
- **205 Reset Content**: The server successfully processed the request, asks that the requester reset its document view, and is not returning any content.
- **206 Partial Content**: The server is delivering only part of the resource due to a range header sent by the client.

### 3xx: Redirection

- **300 Multiple Choices**: The request has more than one possible response.
- **301 Moved Permanently**: The URL of the requested resource has been changed permanently.
- **302 Found**: The URL of the requested resource has been changed temporarily.
- **303 See Other**: The server is redirecting to a different resource, as indicated by the Location header.
- **304 Not Modified**: The resource has not been modified since the version specified by the request headers.
- **305 Use Proxy**: The requested resource is available only through a proxy, as indicated by the Location header.
- **307 Temporary Redirect**: The request should be repeated with another URI, but future requests can still use the original URI.
- **308 Permanent Redirect**: The request and all future requests should be repeated using another URI.

### 4xx: Client Error

- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: The client must authenticate itself to get the requested response.
- **402 Payment Required**: Reserved for future use.
- **403 Forbidden**: The client does not have access rights to the content.
- **404 Not Found**: The server can not find the requested resource.
- **405 Method Not Allowed**: The request method is known by the server but has been disabled and cannot be used.
- **406 Not Acceptable**: The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers.
- **407 Proxy Authentication Required**: The client must first authenticate itself with the proxy.
- **408 Request Timeout**: The server would like to shut down this unused connection.
- **409 Conflict**: The request conflicts with the current state of the server.
- **410 Gone**: The requested content has been permanently deleted from the server, with no forwarding address.
- **411 Length Required**: The server refuses to accept the request without a defined Content-Length header.
- **412 Precondition Failed**: The client has indicated preconditions in its headers which the server does not meet.
- **413 Payload Too Large**: The request is larger than the server is willing or able to process.
- **414 URI Too Long**: The URI requested by the client is longer than the server is willing to interpret.
- **415 Unsupported Media Type**: The media format of the requested data is not supported by the server.
- **416 Range Not Satisfiable**: The range specified by the Range header field in the request cannot be fulfilled.
- **417 Expectation Failed**: The server cannot meet the requirements of the Expect request-header field.
- **418 I'm a teapot**: Defined in RFC 2324, an April Fools' joke. Not expected to be implemented by actual HTTP servers.
- **421 Misdirected Request**: The request was directed at a server that is not able to produce a response.
- **422 Unprocessable Entity**: The request was well-formed but was unable to be followed due to semantic errors.
- **423 Locked**: The resource that is being accessed is locked.
- **424 Failed Dependency**: The request failed due to failure of a previous request.
- **425 Too Early**: Indicates that the server is unwilling to risk processing a request that might be replayed.
- **426 Upgrade Required**: The client should switch to a different protocol.
- **428 Precondition Required**: The server requires the request to be conditional.
- **429 Too Many Requests**: The user has sent too many requests in a given amount of time ("rate limiting").
- **431 Request Header Fields Too Large**: The server is unwilling to process the request because its header fields are too large.
- **451 Unavailable For Legal Reasons**: The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.

### 5xx: Server Error

- **500 Internal Server Error**: The server has encountered a situation it does not know how to handle.
- **501 Not Implemented**: The request method is not supported by the server and cannot be handled.
- **502 Bad Gateway**: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
- **503 Service Unavailable**: The server is not ready to handle the request.
- **504 Gateway Timeout**: The server is acting as a gateway and cannot get a response in time.
- **505 HTTP Version Not Supported**: The HTTP version used in the request is not supported by the server.
- **506 Variant Also Negotiates**: Transparent content negotiation for the request results in a circular reference.
- **507 Insufficient Storage**: The server is unable to store the representation needed to complete the request.
- **508 Loop Detected**: The server detected an infinite loop while processing a request with "Depth: infinity".
- **510 Not Extended**: Further extensions to the request are required for the server to fulfill it.
- **511 Network Authentication Required**: The client needs to authenticate to gain network access.

## Usage

This documentation is intended for developers to understand the different HTTP request methods and response status codes. It is crucial to handle these status codes properly to create robust and user-friendly applications.

## License

This documentation is released under the MIT License.
