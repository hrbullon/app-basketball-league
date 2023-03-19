const io = require("../server");

io.on('connection', ( socket ) => {

    socket.on('connected', () => {
        console.log("Usuario Conectado");
    });
    
    socket.on('disconnect', () => {
        console.log("Usuario desconectado");
    });
    
    /* socket.on('newTicket', ( ticket ) => {
        console.log("Nuevo ticket creado: ", ticket.control );
    });
    
    socket.on('newTicketCreated', ( ticket ) => {
        io.emit("showNewTicket", (ticket))
    }); */
})