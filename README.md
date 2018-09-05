# Ridemyway

[![Build Status](https://travis-ci.org/adamsdenniskariuki/ridemyway.svg?branch=develop)](https://travis-ci.org/adamsdenniskariuki/ridemyway) [![Coverage Status](https://coveralls.io/repos/github/adamsdenniskariuki/ridemyway/badge.svg?branch=develop)](https://coveralls.io/github/adamsdenniskariuki/ridemyway?branch=develop)

Carpooling App in nodeJS:

- Allows drivers to create and accepts rides.
- Allows users to view and request for rides.

Endpoints:

| Method | Summary |
| --- | --- |
|POST /auth/signup |	Register a user|
|POST /auth/login |	Login a user|
|GET /rides |	Fetch all available rides|
|GET /rides/:rideId	| Fetch the details of a single ride|
|POST /rides/:rideId | requests	Make a ride request|
|POST /rides |	Create a ride offer|
|GET /rides/:rideId/requests |	Fetch all ride requests|
|PUT /rides/:rideId/requests/:requestId |	Accept or reject a ride request.|


(c) 2018 Adams Dennis Kariuki
