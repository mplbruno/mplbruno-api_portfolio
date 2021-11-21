import React from "react";
import * as S from "./styled";
import RepositoryItem from "../repository-item";

const Repositories = () => {
    return (
    <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>                  
            </S.WrapperTabList>
            <S.WrapperTabPanel>
            <RepositoryItem 
            name="apiCatalogoJogos" 
            linkToRepo="https://github.com/mplbruno/apiCatalogoJogos"
            fullName="mplbruno/apiCatalogoJogos" 
                
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
            <RepositoryItem 
                name="Aulas" 
                linkToRepo="https://github.com/mplbruno/Aulas"
                fullName="mplbruno/Aulas"
             />
            </S.WrapperTabPanel>

    </S.WrapperTabs>
    );
}; 

export default Repositories;