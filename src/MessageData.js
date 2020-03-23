// Example data from message database
const message = [
    {
        messageId: 1,
        messageText: "Hello, I have problem with system. Need help",
        ticketId: 1,
        userId: "user1@email.com",
        date: "03/23/2020"
    },
    {
        messageId: 2,
        messageText: "I have fixed problem for you",
        ticketId: 1,
        userId: "admin2@email.com",
        date: "03/23/2020"
    },
    {
        messageId: 3,
        messageText: "Thank you for your help",
        ticketId: 1,
        userId: "user1@email.com",
        date: "03/23/2020"
    },
    {
        messageId: 4,
        messageText: "I have problem getting it up and running",
        ticketId: 2,
        userId: "user2@email.com",
        date: "03/23/2020"
    },
    {
        messageId: 5,
        messageText: "Do x before doing y and problem should be fixed",
        ticketId: 2,
        userId: "admin1@email.com",
        date: "03/23/2020"
    },
    {
        messageId: 6,
        messageText: "I am having trouble with an an issue. Any idea how to fix",
        ticketId: 3,
        userId: "user3@email.com",
        date: "03/23/2020"
    },
    {
        messageId: 7,
        messageText: "This is a troubling issue. Let me have my boss take a look at it",
        ticketId: 3,
        userId: "admin3@email.com",
        date: "03/23/2020"
    },
    {
        messageId: 8,
        messageText: "Okay",
        ticketId: 3,
        userId: "user3@email.com",
        date: "03/23/2020"
    },
    {
        messageId: 9,
        messageText: "Issue has been resolved",
        ticketId: 3,
        userId: "admin1@email.com",
        date: "03/23/2020"
    },
    {
        messageId: 10,
        messageText: "Thank you much",
        ticketId: 3,
        userId: "user3@email.com",
        date: "03/23/2020"
    }
]

export default message