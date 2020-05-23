import React, {forwardRef, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
import {container} from "../styling/globalStyling";
import {getUsers} from "../ex1/ex1";
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import ViewColumn from '@material-ui/icons/ViewColumn';
import ProgressIndicator from "./ProgressIndicator";

// Icons used to indicate various table functions
const tableIcons = {
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


const styles = () => ({

    container: {
        ...container,
        elevation: "2",
        width: "82vw",
        position: "relative",
    },
    tableCell: {
        align: "center",
    },

});
const useStyles = makeStyles(styles);

const dataURI = "https://jsonplaceholder.typicode.com/users";

export default function UserTable() {
    const classes = useStyles();

    const [dataList, setDataList] = useState();

    const inProgress = () => {
        if (!dataList){
            return (
                <ProgressIndicator/>
            )
        }
    };

    useEffect(() => {
        const getData = async () => {
            if(!dataList) {
                setDataList(await getUsers(dataURI));
            }
        };

        // Setting timeout just to show there is a loading indicator
        setTimeout(getData, 2000)
    }, []);

    return (
        <Container className={classes.container}>
            {inProgress()}
            <MaterialTable title="Sortable & Filterable by each column" columns={[{title: "Name", field: "name"},
                {title: "Username", field: "username"},
                {title: "Email", field: "email"}, {title: "Phone", field: "phone"}]} data={dataList} options={{
                search: false,
                showTitle: true,
                filtering: true,
                showFirstLastPageButtons: false,
                paging: false,
                sorting: true,
                draggable: false
            }} icons={tableIcons}
            />
        </Container>
    )
};

