let url=("https://kontests.net/api/v1/all")
let response=fetch(url)
response.then(value=>{
  return value.json()
}).then(contests=>{
  console.log(contests)
  ihtml=""
  for(item in contests){
  console.log(contests[item])
    ihtml+=`
     <div class="card my-2 mx-2" style="width: 20rem;">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-        TbKYjjAD6lbMS_6XyeW6_HpZH8oqdl1nws0-zYEA0ZQYslMg95RDipn6U8FBvbbWRR7fcuFse0&usqp=CAU&ec=48665701" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${contests[item].name}</h5>
        <p class="card-text">Status is ${contests[item].status} and site is ${contests[item].site} </p>
        <p class="card-text">In 24 Hours?${contests[item].in_24_hours}</p>
          <p>start at:${contests[item].start_time}
          <p>end at:${contests[item].end_time}
        <a href="${contests[item].url}" class="btn btn-primary my-4">Visit page</a>
      </div>
    </div>

    `
  }
 cardContainer.innerHTML=ihtml
})






// //  <!-- <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <!-- <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul> -->
//           <!-- </li> -->