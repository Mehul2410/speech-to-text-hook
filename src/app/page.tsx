"use client";
import SpeechToText from "@/core";
import { SpeechProvider } from "@speechly/react-client";

export default function Home() {
	return (
		<div>
			<main className='max-w-xl mx-auto mt-8'>
				<h1 className='text-3xl font-semibold mb-4'>Speech-to-Text App</h1>
				<SpeechProvider
					appId='6cd98f3f-8360-46ea-99e1-378afe915199'
					debug
					logSegments
				>
					<SpeechToText />
				</SpeechProvider>
			</main>
		</div>
	);
}
