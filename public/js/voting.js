async function voteP1(id, username){
    const vote = {"username":username,"prompt_id":id,"player_vote":1};
    const response = await fetch(`/api/dish`, {
        method: 'POST',
        body: JSON.stringify(vote),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    if (response.ok) {
        document.location.replace('/vote');
    } else {
        alert('you already voted');
    }
};
async function voteP2(id, username){
    const vote = {"username":username,"prompt_id":id,"player_vote":2};
    const response = await fetch(`/api/dish`, {
        method: 'POST',
        body: JSON.stringify(vote),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    if (response.ok) {
        document.location.replace('/vote');
    } else {
        alert('you already voted');
    }
};

document.getElementById("voteP1Button").addEventListener("click", voteP1());
document.getElementById("voteP2Button").addEventListener("click", voteP2());