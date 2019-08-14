# Back End Info

### Staging Server Link

https://labs-event-planner-staging.herokuapp.com/

### Production Server Link

https://labs-event-planner-production.herokuapp.com/

# User Routes - url/user

## POST a user

    send:
    {
        "username" : "string"
    }
    receive:
    {
        "id" : integer(user id),
        "username" : "string"
    }

## GET all users

    receive:
    [
        {
            "id" : integer(user id),
            "username" : "string"
        },
        {
            "id" : integer(user id),
            "username" : "string"
        }

    ]

## GET user by ID url/user/

    receive:
    {
        "id" : #,
        "username" : "string"
    }

## PUT user by ID url/user/

    send:
    {
        "username" : "string"
    }
    receive:
    {
        "id" : integer,
        "username" : "string"
    }

## DELETE User by ID url/user/

    receive:
    {
      "message" : "user deleted"
    }

# Event Routes url/event

## GET All Events

    receive:
    [
        {

        },
        {

        }
    ]

## GET Event by ID url/event/

    receive:
    {
        "id": integer,
        "title": "string",
        "location": "44.047752,-123.101961", (store address or lat lon cords)
        "event_time": "16:30:20", (hh:mm:ss)
        "event_date": "2019-10-15", (yyyy-mm-dd)
        "short_details": "string",
        "long_details": "long text format",
        "public": 1, (1 is true, 0 is false)
        "host_id": integer, (user_id)
        "created_at": "2019-08-01 20:16:03", (timestamp)
        "updated_at": "2019-08-01 20:16:03"  (timestamp)
    }

## PUT Event by ID url/event/

    send:
    {
        "id": integer,
        "title": "string",
        "location": "44.047752,-123.101961", (store address or lat lon cords)
        "event_time": "16:30:20", (hh:mm:ss)
        "event_date": "2019-10-15", (yyyy-mm-dd)
        "short_details": "string",
        "long_details": "long text format",
        "public": 1, (1 is true, 0 is false)
        "host_id": integer, (user_id)
    }
    receive:
    {
       "id": integer,
        "title": "string",
        "location": "44.047752,-123.101961", (store address or lat lon cords)
        "event_time": "16:30:20", (hh:mm:ss)
        "event_date": "2019-10-15", (yyyy-mm-dd)
        "short_details": "string",
        "long_details": "long text format",
        "public": 1, (1 is true, 0 is false)
        "host_id": integer, (user_id)
        "created_at": "2019-08-01 20:16:03", (timestamp)
        "updated_at": "2019-08-01 20:16:03"  (timestamp)
    }

## DELETE Event by ID url/event/

    receive:
    {
        "message" : "event deleted"
    }
