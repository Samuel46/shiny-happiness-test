import { useEffect, useState } from "react";
import { useBallotsGet } from "../useBallotsGet";

import { NomineeType } from "../useBallotsGet/types";
import { useDisclosure } from "../useDisclosure";

export type SelectedNomineeType = {
	categoryId: string;
	categoryTitle: string;
	nominee: NomineeType;
};

const GetState = () => {
	const [selectedNomineeData, setSelectedNomineeData] = useState<SelectedNomineeType[]>([]);

	const { ballots, isLoadingBallot, ballotsError, hasBallots, getBallots } = useBallotsGet();

	const { isOpen: isModalOpen, onClose: onCloseModal, onOpen: onOpenModal } = useDisclosure({});

	const onSelectNomineeCategory = (categoryId: string, categoryTitle: string) => (nominee: NomineeType) => {
		const nomineeData: SelectedNomineeType = {
			categoryId,
			categoryTitle,
			nominee,
		};

		const filteredSelections = selectedNomineeData.filter((item) => item.categoryId !== categoryId);

		setSelectedNomineeData([...filteredSelections, nomineeData]);
	};

	const onSubmitVote = () => {
		onOpenModal();
	};

	const hasSelectedNominees = selectedNomineeData.length !== 0;

	useEffect(() => {
		getBallots();
	}, [getBallots]);

	return {
		ballots,
		isLoadingBallot,
		ballotsError,
		hasBallots,
		onSelectNomineeCategory,
		hasSelectedNominees,
		selectedNomineeData,
		isModalOpen,
		onCloseModal,
		onSubmitVote,
	};
};
export { GetState };
