declare class SpeechRecognition {
	constructor();
	continuous: boolean;
	interimResults: boolean;
	lang: string;
	maxAlternatives: number;
	onaudiostart: ((this: SpeechRecognitionEvent, ev: Event) => any) | null;
	onaudioend: ((this: SpeechRecognitionEvent, ev: Event) => any) | null;
	onend: ((this: SpeechRecognitionEvent, ev: Event) => any) | null;
	onerror: ((this: SpeechRecognitionEvent, ev: Event) => any) | null;
	onnomatch: ((this: SpeechRecognitionEvent, ev: Event) => any) | null;
	onresult:
		| ((this: SpeechRecognitionEvent, ev: SpeechRecognitionEvent) => any)
		| null;
	onsoundstart: ((this: SpeechRecognitionEvent, ev: Event) => any) | null;
	onsoundend: ((this: SpeechRecognitionEvent, ev: Event) => any) | null;
	onstart: ((this: SpeechRecognitionEvent, ev: Event) => any) | null;
	start(): void;
	stop(): void;
	abort(): void;
}

interface SpeechRecognitionEvent extends Event {
	resultIndex: number;
	results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
	[index: number]: SpeechRecognitionResult;
	length: number;
}

interface SpeechRecognitionResult {
	[index: number]: SpeechRecognitionAlternative;
	length: number;
	isFinal: boolean;
}

interface SpeechRecognitionAlternative {
	transcript: string;
	confidence: number;
}

interface Window {
	SpeechRecognition: typeof SpeechRecognition;
}
