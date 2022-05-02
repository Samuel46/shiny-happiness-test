import { useCallback, useState } from "react";
import { DataFetchEnum, ErrorStatusEnum } from "../enums";
import { BallotsType, BallotsItemType } from "./types";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const ballotsUrl = `${baseUrl}/api/ballots`;

console.log(ballotsUrl);

const useBallotsGet = () => {
	const [ballots, setBallots] = useState<BallotsItemType[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const getBallots = useCallback(async () => {
		try {
			setIsLoading(true);
			setError(null);

			const response = await fetch(ballotsUrl);

			if (Object.values(ErrorStatusEnum).includes(response.status)) throw response;

			const data = (await response.json()) as BallotsType;

			setBallots(data?.items || []);

			return {
				message: DataFetchEnum.Success,
				data,
			};
		} catch (error) {
			setError(error as any);

			return {
				message: DataFetchEnum.Error,
				error,
			};
		} finally {
			setIsLoading(false);
		}
	}, []);

	const hasBallots = ballots.length !== 0;

	return {
		ballots,
		isLoadingBallot: isLoading,
		ballotsError: error,
		hasBallots,
		getBallots,
	};
};

export { useBallotsGet };
