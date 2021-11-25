import React from 'react'
import '../css/styles.css'
import imagen from '../css/imagen.jpg'
import thor from '../css/thor.jpg'
import {Videos} from './Videos'
function Body() {
    return (
        <div class="container clearfix">
            <div class="row">
                <section class="col-md-8">
                    <Videos/>
                    <article class="posts clearfix">
                        <h1 class="bdr-title">Ultimas series, peliculas o animes</h1>
                        <div class="post">
                            <div class="title">
                              
                                <h4>THOR</h4>   

                            </div>
                            <div class="thumb">
                                <img class= "img-responsive" src={imagen}></img>
                            </div>
                            <div class="sinopsis">
                                <p class="text-justify">
                                    sinopsis del anime que esta como meustra en la pagina
                                    sinopsis del anime que esta como meustra 
                                    

                                </p>
                            </div>
                        </div>
                        <div class="post">
                            <div class="title">
                              
                                <h4>THOR</h4>   

                            </div>
                            <div class="thumb">
                                <img class= "img-responsive" src={imagen}></img>
                            </div>
                            <div class="sinopsis">
                                <p class="text-justify">
                                    sinopsis del anime que esta como meustra en la pagina
                                    sinopsis del anime que esta como meustra 
                                    

                                </p>
                            </div>
                        </div>
                        <div class="post">
                            <div class="title">
                              
                                <h4>THOR</h4>   

                            </div>
                            <div class="thumb">
                                <img class= "img-responsive" src={imagen}></img>
                            </div>
                            <div class="sinopsis">
                                <p class="text-justify">
                                    sinopsis del anime que esta como meustra en la pagina
                                    sinopsis del anime que esta como meustra 
                                    

                                </p>
                            </div>
                        </div>
                    </article>
                </section>
                <aside class="col-md-4">
                    <div class="side-bar">
                        <h3 class="bdr-title">Pelicula del Dia</h3>
                        <div class="content-side">

                        </div>

                    </div>

                </aside>
            </div>


        <div>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
        </div>


            

        </div>


        
    )
}

export {Body}





