import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
export default function WebSeries() {
  return (
    <div>
      <h1 style= {{textAlign:"center",color:"blue",margin:"30px",textTransform:"capitalize" }}>Welcome to my react web page</h1>
      <div className="container text-center">
  <div className="row">
    <div className="col">
      <div class="card">
  <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="350px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="google.com" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
      <div class="card">
  <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="350px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="google.com" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
      <div class="card">
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="350px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="google.com" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
    </div>
  )
}
