
// fetch API

fetch("data.json")
.then(function(response){
  return response.json();
}
)
.then(function(ind){
  console.log(ind);
  profile(ind,skills);
  skill(ind,skills);
  edu(ind,education);
})
