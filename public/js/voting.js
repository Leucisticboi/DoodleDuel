function voteP1(id, username){
    const vote = {"username":username,"prompt_id":id,"player_vote":1};
    const response = fetch(`/api/vote`, {
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
function voteP2(id){
    const vote = {"username":"bobby","prompt_id":id,"player_vote":2};
    const response = fetch(`/api/vote`, {
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

document.getElementById("voteP1Button").onclick = voteP1;
document.getElementById("voteP2Button").onclick = voteP2;