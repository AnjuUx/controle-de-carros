import styled from "styled-components";
import flex from "@/utils/flex";
import variables from "@/variables";

const StyledDiv = styled.div`
    ${flex('column', 'center', 'center')}
    height: 100%;
    background-color: ${variables.colors.lightBlue};

    img {
        width: 90%;
    }

`

export default StyledDiv