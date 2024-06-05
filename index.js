
function Header() {
    return (
        <React.Fragment>
          
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">CoresPCS</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </React.Fragment>
    );
}
function Content() {
  return (
      <React.Fragment>
        <br></br>
        <article className="dflex">
        <div className="card" style={{ width: '18rem' }}>
              <img src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Imagen de ejemplo" />
              <div className="card-body">
                  <h5 className="card-title">Computadora</h5>
                  <p className="card-text">Especificaciones</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
              </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
              <img src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Imagen de ejemplo" />
              <div className="card-body">
                  <h5 className="card-title">Computadora</h5>
                  <p className="card-text">Especificaciones</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
              </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
              <img src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Imagen de ejemplo" />
              <div className="card-body">
                  <h5 className="card-title">Computadora</h5>
                  <p className="card-text">Especificaciones</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
              </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
              <img src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Imagen de ejemplo" />
              <div className="card-body">
                  <h5 className="card-title">Computadora</h5>
                  <p className="card-text">Especificaciones</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
              </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
              <img src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Imagen de ejemplo" />
              <div className="card-body">
                  <h5 className="card-title">Computadora</h5>
                  <p className="card-text">Especificaciones</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
              </div>
          </div>
        </article>
        <br></br>
        
      </React.Fragment>
  );
}


function Footer() {
  return (
      <React.Fragment>
        <br></br>
          <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Facebook</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">GitHub</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Instagram</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Información</a>
  </li>
</ul>
<br></br>
      </React.Fragment>
  );
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
    root.render(
        <>
        <Header/>
        <Content/>
        <Content/>
        <Footer/>
        </>
    );
