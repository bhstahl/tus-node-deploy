### tus
tus is a new open protocol for resumable uploads built on HTTP. This is an example container using the [tus protocol 1.0.0](http://tus.io/protocols/resumable-upload.html) node.js server implementation.


#### take a test drive

```sh
$ docker run -p 49160:8080 -d bhstahl/tus-node-deploy

$ curl -i -X POST $(docker-machine ip default):49160/files -H 'Tus-Resumable: 1.0.0' -H 'Upload-Length: 12345'
HTTP/1.1 201 Created
Tus-Resumable: 1.0.0
Location: http://192.168.99.100:49160/files/594b15beb1f3981f7668bf9525fd2442
Content-Length: 0
Access-Control-Expose-Headers: Upload-Offset, Location, Upload-Length, Tus-Version, Tus-Resumable, Tus-Max-Size, Tus-Extension, Upload-Metadata
Date: Wed, 01 Jun 2016 21:35:25 GMT
Connection: keep-alive
