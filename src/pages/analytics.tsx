import withAuth from "@/hoc/withAuth";
import { GenericComponent } from "@/styles/styles";
import { Player } from "@lottiefiles/react-lottie-player";

function Analytics() {


  return (
    <GenericComponent>
      <Player
        autoplay
        loop
        src="https://lottie.host/83ce2dcc-a935-46cc-8077-cacf6d09cf22/we9dGzju51.json"
        style={{ height: "320px", width: "320px" }}
      />
    </GenericComponent>
  )
}

export default withAuth(Analytics);
