async function voteP1(id){
    const vote = {"username":"shrek","prompt_id":id,"player_vote":1};
    const response = await fetch(`/api/vote`, {
        method: 'POST',
        body: JSON.stringify(vote),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    if (response.ok) {
        document.location.replace('/vote/1');
    } else {
        alert('you already voted');
    }
};
async function voteP2(id){
    const vote = {"username":"shrek","prompt_id":id,"player_vote":2};
    const response = await fetch(`/api/vote`, {
        method: 'POST',
        body: JSON.stringify(vote),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    if (response.ok) {
        document.location.replace('/vote/1');
    } else {
        alert('you already voted');
    }
};

document.getElementById("voteP1Button").onclick = voteP1;
document.getElementById("voteP2Button").onclick = voteP2;

// async function update() {
//   const id = {"id":1}
//   const response = await fetch(`/api/prompt/P2`, {
//     method: 'GET',
//     body: JSON.stringify(id),
//     headers: {
//       'Content-Type': 'application/json',
//     },}
//   );
//   document.getElementById("P2Count").innerHTML = response.body;
// };

// update();