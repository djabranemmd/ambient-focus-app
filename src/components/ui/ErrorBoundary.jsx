import {
  Component,
} from "react";



class ErrorBoundary extends Component {


  constructor(props) {

    super(props);


    this.state = {

      hasError: false,

    };


  }





  static getDerivedStateFromError() {


    return {

      hasError: true,

    };


  }






  componentDidCatch(
    error,
    errorInfo
  ) {


    console.error(
      "Application error:",
      error,
      errorInfo
    );


  }







  handleReload = () => {


    window.location.reload();


  };








  render() {


    if (
      this.state.hasError
    ) {


      return (

        <main

          className="
            min-h-screen
            flex
            items-center
            justify-center
            p-6
            bg-black
            text-white
          "

        >


          <div

            className="
              max-w-md
              text-center
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              p-8
            "

          >


            <h1

              className="
                text-3xl
                font-bold
              "

            >

              Something went wrong

            </h1>




            <p

              className="
                text-gray-400
                mt-3
              "

            >

              The application encountered an unexpected error.

            </p>





            <button

              onClick={
                this.handleReload
              }

              className="
                mt-6
                px-5
                py-3
                rounded-xl
                bg-purple-600
                hover:bg-purple-500
                transition-all
              "

            >

              Reload App

            </button>



          </div>


        </main>

      );


    }





    return this.props.children;


  }


}



export default ErrorBoundary;