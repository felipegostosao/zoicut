import type {
	TranscriptionModel,
	TranscriptionModelId,
} from "./types";

export const TRANSCRIPTION_MODELS: TranscriptionModel[] = [
	{
		id: "whisper-tiny",
		name: "Mínimo",
		huggingFaceId: "onnx-community/whisper-tiny",
		description: "Mais rápido, menor precisão",
	},
	{
		id: "whisper-small",
		name: "Pequeno",
		huggingFaceId: "onnx-community/whisper-small",
		description: "Bom equilíbrio entre velocidade e precisão",
	},
	{
		id: "whisper-medium",
		name: "Médio",
		huggingFaceId: "onnx-community/whisper-medium",
		description: "Maior precisão, mais lento",
	},
	{
		id: "whisper-large-v3-turbo",
		name: "Large v3 Turbo",
		huggingFaceId: "onnx-community/whisper-large-v3-turbo",
		description: "Melhor precisão, requer WebGPU para bom desempenho",
	},
];

export const DEFAULT_TRANSCRIPTION_MODEL: TranscriptionModelId =
	"whisper-small";
