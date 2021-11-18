import { DetailsList, IColumn} from '@fluentui/react';

interface Person
{
  key?:string;
  name?:string;
  age?:number
}

const items:Person[] = [
  {'key':'1', 'name':'deng', 'age':10},
  {'key':'2', 'name':'zi', 'age':20},
  {'key':'3', 'name':'qi', 'age':30}
]

const columns:IColumn[] = [
  {'key':'column1', 'minWidth':80, maxWidth:120,  name:'Name', fieldName:'name', onColumnClick:(e, column)=>alert(column.name)},
  {'key':'column2', 'minWidth':80, maxWidth:120,name:'Age', fieldName:'age', onColumnClick:(e, column)=>alert(column.name)},  
]

const MyGrid = () => 
  <>
    <DetailsList viewport={{width:400, height:400}} styles={{root:{maxWidth:400, maxHeight:400}}} items={items} columns={columns}/>
  </>

export default MyGrid;
