// Backend = responsible for processing information and implementing application logic.
// DNS(Domain name system) = translates human readable domain names into numerical IP addresses.
// Ip address = without ip address website doesn't know where to send information and my device doesn't know where to send it requests .
// How does a computer know which part of an IP address represents the network and which part represents an individual device?
// using subnet mask 
// subnet mask classify it as host and network part of ip address.
// Network address: all host bits are 0.
// Broadcast address: all host bits are 1.
// First usable address: network address + 1.
// Last usable address: broadcast address - 1.
// port identify application end point 
// Http fundamentals
// Get retrieve data .
// Post = create or submit data .
// replace a resource  = PUT
// Patch partiall update a resource = 
// Delete = delete a resource 
// What is an http request 
// is a message sent by client to a server asking it to provide response .
// HTTP request has three main components or parts 
// Request line 
// GET /products HTTP/1.1 GET  = HTTP method /products = resource path and http/11 version.
// B. HTTP HEADERS 
// GET /products HTTP/1.1
// Host: example.com
// Accept: application/json
// Authorization: Bearer abc123
// User-Agent: Mozilla/5.0
// Header	Purpose
// Host	Identifies the target host
// Accept	Specifies acceptable response formats
// Authorization	Carries authentication credentials
// User-Agent	Identifies the client software
// Content-Type	Describes the request body format
// Request body = contains data the client sends to the server .
// HTTPS response = the response the data server gives.
// 1XX informational 
// 2xx = success 
// 3 xx redirection 
// 4 xx client error 
// 5 xx server error \
// JSON = javascript object notation = data format used to exchange information between application 
