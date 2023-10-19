import React from "react"
import { Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n

const Dashboard = () => {
  //meta title
  document.title = "Дашбоард"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title={"Бүтээгдэхүүн"} breadcrumbItem={"Тайлан"} />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
