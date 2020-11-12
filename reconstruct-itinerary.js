// const findItinerary = function(tickets) {
//     let result = [];
//     let start = {};
//     for(let i = 0; i < tickets.length; i++){
//         if(tickets[i][0] === "JFK"){
//             if (Object.keys(start).length > 0) {
//                 if (start["arrival"] > tickets[i][1]){
//                     start["arrival"] = tickets[i][1]
//                     start["index"] = i
//                 }
//             } else {
//                 start["departure"] = (tickets[i][0]);
//                 start["arrival"] = (tickets[i][1]);
//                 start["index"] = i
//             }
//         }
//     }
    
//     function arrangeTickets(newTickets, prev){
//         if(newTickets.length === 0) {
//             result.push(prev["departure"])
//             result.push(prev["arrival"])
//             return
//         }
//         result.push(prev["departure"])
//         let next = {};
//         for (let i = 0; i < newTickets.length; i++){
//             if(newTickets[i][0] === prev["arrival"]){
//                 if (Object.keys(next).length > 0 ) {
//                     if (next["arrival"] > newTickets[i][1]){
//                         next["arrival"] = newTickets[i][1]
//                         next["index"] = i
//                     }
//                 } else {
//                     next["departure"] = (newTickets[i][0]);
//                     next["arrival"] = (newTickets[i][1]);
//                     next["index"] = i
//                 }
//             };
//         };
//         newTickets.splice(next["index"], 1)
//         arrangeTickets(newTickets, next)
//     };

//     tickets.splice(start["index"], 1)
//     arrangeTickets(tickets, start)
//     return console.log(result)
// };

var findItinerary = function(tickets) {
    const airports = {};
    let results = [];
    //Create a hashmap of departures -> destinations
        for(let i = 0; i < tickets.length; i++){
            let departure = tickets[i][0];
            let destination = tickets[i][1];
            !airports[departure] ? airports[departure] = [destination] : airports[departure].push(tickets[i][1])
        }
        //sort the destinations
        for(val in airports) {
            airports[val] = airports[val].sort();
        }
    //Recursive depth first search
    function dfs(departure){
        while(airports[departure] && !!airports[departure].length){
            // !!airports[departure].length means airports[departure].length > 0
            console.log(airports[departure]);
            dfs(airports[departure].shift());
        } 
        results.unshift(departure)
    }
    dfs("JFK")
    return results
};


let tickets = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]
findItinerary(tickets)

// node reconstruct-itinerary