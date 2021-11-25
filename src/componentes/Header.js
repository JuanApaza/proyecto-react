import React from 'react'

function Header() {
    return (
        <nav class="navbar static-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">EMIna</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav navbar-right">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Series</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Peliculas</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Acerca de...
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Noticias</a></li>
                            <li><a class="dropdown-item" href="#">Mangas</a></li>
                            <li><a class="dropdown-item" href="#">Algo mas</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
        </div>
      </nav>
    )
}

export {Header}





