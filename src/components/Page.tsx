import React, { useContext } from "react";
import styled from "styled-components";
// import { store } from "../store";
import { Filters } from "./Filters";
import { LogContainer } from "./LogContainer";
// import { OptoutPanel } from "./Optout";

const PageContainer = styled.div`
	
`;

export function Page() {
	// const { state } = useContext(store);

	return <PageContainer>
		<Filters />
		<div style={{
			display: "flex",
			justifyContent: "center",
		}}>
			<a href="https://tv.supa.sh/" style={{
				backgroundImage: "linear-gradient( to right,#e50000,#ff8d00,#fe0,#028121,#004cff,#708 )",
				backgroundClip: "text",
				color: "transparent",
				fontWeight: "bold",
				fontSize: "20pt",
				fontFamily: "sans-serif",
				textShadow: "0 0 20px rgba(255,255,255,.5)",
			}}>tv.supa.sh</a>
		</div>
		<LogContainer />
	</PageContainer>;
}