import React, { useEffect, useState } from "react";
import { useSpeechContext } from "@speechly/react-client";

const SpeechToText: React.FC = () => {
	const { segment, listening, attachMicrophone, start, stop } =
		useSpeechContext();
	const [transcripts, setTranscripts] = useState<string[]>([]);
	const [tentative, setTentative] = useState<string>("");

	useEffect(() => {
		if (segment) {
			const transcript = segment.words.map((word) => word.value).join(" ");
			setTentative(transcript);
			if (segment.isFinal) {
				setTentative("");
				setTranscripts((current) => [...current, transcript]); // Store the transcript string, not the segment object
			}
		}
	}, [segment]);

	const handleClick = async () => {
		if (listening) {
			await stop();
		} else {
			await attachMicrophone();
			await start();
		}
	};

	return (
		<div className='App'>
			<button onClick={handleClick}>
				{listening ? "Stop" : "Start"} microphone
			</button>
			<div>
				{transcripts?.map((transcript, index) => (
					<p key={index}>{transcript}</p>
				))}
				<em>{tentative}</em>
			</div>
		</div>
	);
};

export default SpeechToText;
