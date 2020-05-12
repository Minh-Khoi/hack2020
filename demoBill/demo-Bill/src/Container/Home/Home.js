import React from "react";
import { Row, Col } from "reactstrap";
import Bill1 from "../../Img/bill1.png";
import Bill2 from "../../Img/bill2.png";
const Home = () => {
	return (
		<div className='container-fluid my-4'>
			<h1 className='text-center'>Lorem Ipsum is simply dummy text of</h1>
			<Row>
				<Col lg={6} className='d-flex justify-content-center'>
					<img
						style={{ maxWidth: "100%", height: "auto" }}
						src={Bill1}
						alt='bill'></img>
				</Col>
				<Col lg={6} className='d-flex flex-column align-self-center'>
					<h3>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.{" "}
					</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</Col>
			</Row>
			<Row>
				<Col lg={6} className='d-flex flex-column align-self-center'>
					<h3>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.{" "}
					</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</Col>
				<Col lg={6} className='d-flex justify-content-center'>
					<img
						src={Bill2}
						alt='bill'
						style={{ maxWidth: "100%", height: "auto" }}></img>
				</Col>
			</Row>
		</div>
	);
};

export default Home;
