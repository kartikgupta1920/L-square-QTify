import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon} from "../../assets/search-icon.svg";
import { useAutocomplete } from '@mui/base/useAutocomplete';
import { useNavigate } from "react-router-dom";
// import { styled } from "@mui/system";
// import { truncate } from "../../helpers/helper";
// import { Tooltip } from "@mui/material";

function Search({searchData, placeholder}){
    const {
        getRootProps,
        getInputLabelProps,
        value,
        getInputProps,
        getListboxProps,
        getOptionProps,
    } = useAutocomplete({
        id: "use=auto-complete-demo",
        options: searchData || [],
        getOptionLabel: (option) => option.title,
    });
    const navigate = useNavigate();
    const onSubmit = (e, value)=> {
        e.preventDefault();
        console.log(value);
        navigate(`album/${value.slug}`);
    }
    return (
        <div style={{position: "relative"}}>
        <form className={styles.wrapper}
            onSubmit={(e) => {
                onSubmit(e, value);
            }}
            >
         <div {...getRootProps()}>
         <input
             name="album"
             className={styles.search}
             placeholder={placeholder}
             required
             {...getInputProps()}
            />
         </div>
         <div>
            <button className={styles.searchButton} type="submit"> <SearchIcon/></button>
         </div>
        </form>
        </div>
    )
}

export default Search;
