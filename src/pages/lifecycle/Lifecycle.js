/*
------------------------------------------------
------------------------------------------------
REACT - CLASES
------------------------------------------------
------------------------------------------------
Ciclos de Vida
------------------------------------------------
------------------------------------------------
Montaje:
------------------------------------------------
	render()
	componentDidMount()
------------------------------------------------
Actualización:
------------------------------------------------
	render()
	componentDidUpdate()
------------------------------------------------
Desmontaje:
------------------------------------------------
	componentWillMount()
------------------------------------------------
------------------------------------------------
*/
import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }

  render() {
    return <h3>{this.props.hour}</h3>;
  }
}

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El coponente se incializa , aún no esta en el DOM");

    this.state = {
      hour: new Date().toLocaleTimeString(),
      visible: false,
    };
    this.timer = null;
  }

  componentDidMount() {
    console.log(1, "El coponente se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props han cambiado");
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.timer = setInterval(() => {
      this.setState({ hour: new Date().toLocaleTimeString(), visible: true });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
  };

  detener = () => {
    clearInterval(this.timer);
    this.setState({ visible: false });
  };

  render() {
    console.log(4, "Renderizando el DOM");
    return (
      <div className="justify-content-center container-fluid">
        <h1 className="text-center">
          Ciclo de Vida de los Componentes de Clase
        </h1>
        <hr />
        {this.state.visible && <Clock hour={this.state.hour} />}

        <button onClick={this.iniciar} className="btn btn-outline-primary ">
          Iniciar
        </button>
        <button onClick={this.detener} className="btn btn-outline-success">
          Detener
        </button>
      </div>
    );
  }
}

export default Lifecycle;
