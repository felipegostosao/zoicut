import { toast } from "sonner";

export interface MediaUploadToastResult {
	uploadedCount: number;
	assetNames?: string[];
}

function getAssetLabel({ count }: { count: number }): string {
	return count === 1 ? "arquivo de mídia" : "arquivos de mídia";
}

function waitForNextPaint(): Promise<void> {
	return new Promise((resolve) => {
		requestAnimationFrame(() => {
			requestAnimationFrame(() => resolve());
		});
	});
}

export async function showMediaUploadToast<T extends MediaUploadToastResult>({
	filesCount,
	promise,
}: {
	filesCount: number;
	promise: Promise<T> | (() => Promise<T>);
}) {
	const run = typeof promise === "function" ? promise : () => promise;
	const toastPromise = toast.promise(async () => {
		await waitForNextPaint();
		return run();
	}, {
		loading: `Enviando ${getAssetLabel({ count: filesCount })}...`,
		success: ({ uploadedCount, assetNames }) => {
			if (uploadedCount === 1) {
				const assetName = assetNames?.[0];
				return assetName
					? `${assetName} foi enviado`
					: "1 arquivo de mídia foi enviado";
			}

			if (uploadedCount > 1) {
				return `${uploadedCount} arquivos de mídia foram enviados`;
			}

			return "Nenhum arquivo de mídia foi enviado";
		},
		error: `Falha ao enviar ${getAssetLabel({ count: filesCount })}`,
	});

	return toastPromise.unwrap();
}
