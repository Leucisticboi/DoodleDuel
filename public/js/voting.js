const Vote = require('../../controllers/api/voteRoutes');

async function voteP1(id, username){
    try {
        response = await Vote.post({ headers: {'content-type' : 'application/json'}, url: 'http://localhost:3001/api/vote/', body: {"username":username,"id":id,"player_vote":1}}, function(error, response, body){
            console.log(body);
            console.log(response);
        });
    } catch (error){
        console.log(error);
    }
};
async function voteP2(id, username){
    try {
        response = await Vote.post({ headers: {'content-type' : 'application/json'}, url: 'http://localhost:3001/api/vote/', body: {"username":username,"id":id,"player_vote":2}}, function(error, response, body){
            console.log(body);
            console.log(response);
        });
    } catch (error){
        console.log(error);
    }
};

document.getElementById("voteP1Button").addEventListener("click", voteP1());
document.getElementById("voteP2Button").addEventListener("click", voteP2());