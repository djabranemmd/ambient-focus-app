import Button from "../ui/Button";


function TimerTabs({
  mode,
  setMode,
}) {


  const tabs = [
    {
      id: "focus",
      label: "Focus",
    },

    {
      id: "pomodoro",
      label: "Pomodoro",
    },

  ];




  return (

    <div

      className="
        flex
        justify-center
        mb-8
      "

    >


      <div

        role="tablist"

        aria-label="
          Timer modes
        "


        className="
          bg-white/5
          p-2
          rounded-2xl
          flex
          gap-2
        "

      >


        {
          tabs.map((tab)=>{


            const active =
              mode === tab.id;



            return (

              <Button


                key={tab.id}



                type="button"



                variant={
                  active
                  ?
                  "primary"
                  :
                  "secondary"
                }



                role="tab"



                aria-selected={
                  active
                }



                onClick={() =>
                  setMode(
                    tab.id
                  )
                }


              >

                {tab.label}


              </Button>


            );


          })
        }



      </div>


    </div>

  );

}



export default TimerTabs;