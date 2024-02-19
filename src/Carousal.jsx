import React from 'react'

function Carousal() {
  return (
    <div className='mybox'>

<div id="demo" class="carousel slide" data-bs-ride="carousel">


  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.w3schools.com/bootstrap5/chicago.jpg" alt="Los Angeles" class="d-block" style={{width:"100%"}} />
    </div>
    <div class="carousel-item">
      <img src="https://www.w3schools.com/bootstrap5/ny.jpg" alt="Chicago" class="d-block" style={{width:"100%"}} />
    </div>
    <div class="carousel-item">
      <img src="https://www.w3schools.com/bootstrap5/ny.jpg" alt="New York" class="d-block" style={{width:"100%"}} />
    </div>
  </div>
  

  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>

<div class="container-fluid mt-3">
  <h3>Carousel Example</h3>
  <p>The following example shows how to create a basic carousel with indicators and controls.</p>
</div>

    </div>
  )
}

export default Carousal