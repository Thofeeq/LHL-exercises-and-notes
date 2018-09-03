# What's HTTP? 

Hypertext Transfer Protocol

Sent on the TCP / IP

Other protocols that often go on the TCP/IP 

* FTP - File Transfer Protocol
* SMTP - Simple Mail Transfer Protocol 
* POP(3) - Post Office Protocol

HTTP Messages generally have:

* Headers - Key-Value Pairs of info
* Body (Optional) - Block of data


HTTP is a request-response model
HTTP is stateless
  * No connection between any given request/reponse and previous req/res
HTTP is resource-based

### HTTP Requests

####HTTP Methods
  * GET - read-only
  * POST - for making changes
  * PUT - updates resources by replacing it (or some fields of it)
  * DELETE - deletes a resource
  * PATCH - updates a resource by defining changes ( no one can agree on what that means)

 for this week GET and POST will be the main focus  

#### URL 
ex: http://localhost/index.html
Protocol: 'http://'
Domain: localhost:1234
URI: /index.html

### HTTP Responses

#### HTTP Status Codes
  * 100 - Experimental / misc
  * 200 - Some sort of positive status: OK
  * 300 - Redirection
  * 400 - Errors - client side [ Bad request, Page not found, Unauthorized , etc..]
  * 500 - Errors - server side [Bad gateway, Internal server error, Service unavailable]

### DNS (Domain Name Server)










s




