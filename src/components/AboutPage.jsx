import Button from "./shared/Button"
import React from "react"
import { Link } from "react-router-dom"
import Card from "./shared/Card"

const AboutPage = () => {
  return (
    <Card>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        pariatur a quae ad saepe mollitia cumque ut modi architecto perspiciatis
        repellendus laboriosam laborum id dolor illum exercitationem accusamus
        at aut. Ad repellendus blanditiis exercitationem ducimus at commodi
        tempora debitis eveniet eius dicta, sapiente repudiandae minus.
      </h4>
      <br />
      <br />
      <Link to="/">
        <Button version={"secondary"} className="btn">
          Back To Home
        </Button>
      </Link>
    </Card>
  )
}

export default AboutPage
