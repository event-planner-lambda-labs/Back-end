# Back End Info

### Staging Server Link

https://labs-event-planner-staging.herokuapp.com/

### Production Server Link

https://labs-event-planner-production.herokuapp.com/

# User Routes - url/user

## POST a user

    send:
    "username" : "string"

    receive:
    "id" : integer(user id),
    "username" : "string"

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
