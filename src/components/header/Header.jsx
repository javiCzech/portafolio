import { TypedText } from "./TypedText";



export function Header() {
  
  return <>
  <header className="d-flex justify-content-center align-items-center container-fluid fondo" id="header">
        <section className="row ms-1">
            <div className="col-12">
              <div className="text1">Hola, mi nombre es</div>
              <h1 className="nombre">Javier Brizuela Czech</h1>
              {/* <div className="text2">Soy un <span className="typing">Desarollador FrontEnd</span></div> */}
              
              <TypedText/>

                
            </div>



        </section>



    </header>
    
  </>

  
    
}

