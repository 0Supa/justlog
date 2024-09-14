import styled from "styled-components";
import InsightsIcon from '@mui/icons-material/Insights';
import { IconButton } from "@mui/material";
import "swagger-ui-react/swagger-ui.css"

const MetricsWrapper = styled.div`

`;

export function Metrics() {
    const handleClick = () => {
        window.open("https://metrics.supa.codes/d/rustlog/rustlog?orgId=1", "_blank")?.focus();
    }

    return <MetricsWrapper>
        <IconButton aria-controls="metrics" aria-haspopup="true" onClick={handleClick} size="small" color="default">
            <InsightsIcon />
        </IconButton>
    </MetricsWrapper>;
}
