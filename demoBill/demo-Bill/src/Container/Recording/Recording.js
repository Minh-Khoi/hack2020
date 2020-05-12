import SettingsVoiceIcon from "@material-ui/icons/SettingsVoice";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import SpeechRecognition from "react-speech-recognition";
import { Col, Row } from "reactstrap";
import { compose } from "redux";
import audio from "../../Img/audio.png";
import styles from "./Style";
import { Button } from "@material-ui/core";
const propTypes = {
	// Props injected by SpeechRecognition
	transcript: PropTypes.string,
	resetTranscript: PropTypes.func,
	browserSupportsSpeechRecognition: PropTypes.bool,
};

const Recording = ({
	transcript,
	resetTranscript,
	browserSupportsSpeechRecognition,
	startListening,
	stopListening,
	classes,
}) => {
	const [isRecording, setIsRecording] = useState(false);
	const [products, setProducts] = useState([]);
	if (!browserSupportsSpeechRecognition) {
		stopListening();
		return null;
	}

	const onSubmit = async () => {
		let backendApi = "http://localhost:8000/Project_Team/formAction.htm";
		// let backendApi = window.location.hostname+":" +window.location.port+ "/Project_Team/formAction.htm";
		console.log(backendApi);
		let form_data = new URLSearchParams();
		form_data.append("text", transcript);

		fetch(backendApi, {
			method: "POST",
			body: form_data,
			// mode: "no-cors",

		}).then((response) => {
			console.log(response);
			return response.text();
		})
			.then(res => {
				try {
					let result = (JSON.parse(res));
					let resArray = [];
					for (let i in result.getVoice) {
						resArray.push(result.getVoice[i]);
					}
					window.products = resArray;
					console.log(window.products);
					setProducts(resArray);
				} catch (e) {
					console.log(e);
				}
			});
	};

	const toggleRecording = () => {
		if (!isRecording) {
			startListening();
			setIsRecording(!isRecording);
		} else {
			stopListening();
			setIsRecording(!isRecording);
		}
	};
	//console.log('listening:', listening);

	return (
		<div className={`container-fluid text-center my-4 ${classes.recording}`}>
			<Row>
				<Col>
					<h2>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.{" "}
					</h2>
					<p className='text-muted'>
						Click on the microphone icon and begin speaking for as long as you
						like.
					</p>
					<div className={classes.wrap}>
						<span className={classes.btnRecording} onClick={toggleRecording}>
							<SettingsVoiceIcon fontSize='large' />
						</span>
						<div className={classes.circle} style={{ animationDelay: "0s" }} />
						<div className={classes.circle} style={{ animationDelay: "1s" }} />
						<div className={classes.circle} style={{ animationDelay: "2s" }} />
						<div className={classes.circle} style={{ animationDelay: "3s" }} />
						<textarea value={transcript} className={classes.textShow} />
						<div>
							<Button
								variant='contained'
								onClick={resetTranscript}>
								Reset
							</Button>
							<Button
								variant='contained'
								color='primary' onClick={onSubmit}>
								Submit
							</Button>
						</div>
					</div>

					<table border="1">
						<tr>
							<th>Tên Sản phẩm</th>
							<th>Giá</th>
							<th>Số Lượng </th>
						</tr>
						{
							products.map((pro, index) => {
								return (
									<tr>
										<td> {pro.name_product} </td>
										<td> {pro.price} </td>
										<td> {pro.quantity} </td>
									</tr>
								)
							})
						}
					</table>

					<div className='mt-5'>
						<Col md={8} xl={6}>
							<img className={classes.img} src={audio} alt='audio'></img>
						</Col>
					</div>
				</Col>
			</Row>
		</div>
	);
};

Recording.propTypes = propTypes;

export default compose(
	SpeechRecognition({ autoStart: false }),
	withStyles(styles)
)(Recording);

//export default SpeechRecognition({ autoStart: false })(Recording);
