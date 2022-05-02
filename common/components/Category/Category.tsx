import React, { VFC } from "react";

import styles from "../../../styles/Home.module.css";

import { BallotsItemType, NomineeType } from "../../hooks/useBallotsGet/types";

import { NomineeCard } from "../NomineeCard";
import { SelectedNomineeType } from "../../hooks/getState/getState";

type CategoryProps = {
	ballot: BallotsItemType;
	onSelectNominee: (nominee: NomineeType) => void;
	selectedNomineeCategory?: SelectedNomineeType;
};

const Category: VFC<CategoryProps> = (props) => (
	<section className={styles.categoryContainer}>
		<div className={styles.categoryTitleContainer}>
			<h3 className={styles.categoryTitle}>{props.ballot.title}</h3>
		</div>

		<div className={styles.categoryContent}>
			{props.ballot.items?.map((nominee) => (
				<div className={styles.nomineeCardContainer} key={nominee.id}>
					<NomineeCard
						nominee={nominee}
						onSelectNominee={() => props.onSelectNominee(nominee)}
						isSelected={props.selectedNomineeCategory?.nominee.id === nominee.id}
					/>
				</div>
			))}
		</div>
	</section>
);

export { Category };
