import {IDetailsList, DetailsList, Selection, DetailsRow, IDetailsRowProps, IDetailsCheckboxProps,IDetailsRowBaseProps, DetailsHeader, IDetailsHeaderProps, initializeIcons, Checkbox,IColumn, IDetailsColumnRenderTooltipProps, DetailsHeaderBase} from "@fluentui/react";
import { columns, items} from '../../interface/Person'
import { createRef } from "react";

const gridRef = createRef<IDetailsList>();

const selectoin = new Selection();

// const onRenderDetailsCheckbox = (props:IDetailsCheckboxProps | undefined) =>
// {
//     if(props)
//     {
//         <div>aaaa</div>
//     }

//     return null;
// }

const onRenderItemColumn = (item?: any, index?: number | undefined, column?: IColumn | undefined) =>
{
    if(item!== undefined)
    {
        if(column?.name !== 'Key')
        {
            return <div>aaaa</div>
        }
    }

    return null;
}

const onRenderCheck:IDetailsRowBaseProps['onRenderCheck'] = (props) =>
{
    return <Checkbox checked={props.selected}/>
}

const onRenderRow = (props:IDetailsRowProps | undefined) =>
{
    if(props)
    {
        return <DetailsRow {...props} onRenderItemColumn={onRenderItemColumn} onRenderCheck={onRenderCheck}/>
    }

    return null;
}

const onRenderColumnHeaderTooltip = (props: IDetailsColumnRenderTooltipProps | undefined) =>
{
    if(props)
    {
        // ヘッダーのカラムがcolumnsに渡されたものである時
        if(props.column !== undefined)
        {
            return <div>a</div>
        }
    }

    return null;
}

const onRenderDetailsHeader = (props:IDetailsHeaderProps | undefined) =>
{
    if(props)
    {
        return <DetailsHeader checkboxVisibility={2} {...props} onRenderDetailsCheckbox={undefined} onRenderColumnHeaderTooltip={onRenderColumnHeaderTooltip} />
    }

    return null;
}

initializeIcons();


export const Grid = () => ( <DetailsList componentRef={gridRef} items={items} columns={columns} selection={selectoin} onRenderDetailsHeader={onRenderDetailsHeader} onRenderRow={onRenderRow}/>)
