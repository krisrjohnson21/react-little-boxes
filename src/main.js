import React from "react"
import ReactDOM from "react-dom"
import style from "./styles/app.scss"
import Wrapper from "./components/Wrapper"

let wrapperParagraph =
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
    ullamcorper nibh, id efficitur eros. Suspendisse ultricies est ut mi
    volutpat, quis faucibus sem malesuada. Pellentesque pellentesque ex at
    posuere viverra. Nunc maximus massa nec lectus malesuada sodales. Lorem
    ipsum dolor sit amet, consectetur adipiscing elit. Cras eget malesuada
    tortor.
  </p>

ReactDOM.render(
  <div>
    <Wrapper
      header="I Am The Wrapper"
      paragraph={wrapperParagraph}
    />
  </div>,
  document.getElementById("app")
)
