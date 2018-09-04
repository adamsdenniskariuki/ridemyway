# ridemyway

Carpooling App

- Allows drivers to create and accepts rides.
- Allows users to view and request for rides.

POST /auth/signup |	Register a user
POST /auth/login |	Login a user
GET /rides |	Fetch all available rides
GET /rides/<rideId>	| Fetch the details of a single ride
POST /rides/<rideId> | requests	Make a ride request
POST /rides |	Create a ride offer
GET /rides/<rideId>/requests |	Fetch all ride requests
PUT /rides/<rideId>/requests/<requestId> |	Accept or reject a ride request.


(c) 2018 Adams Dennis Kariuki
