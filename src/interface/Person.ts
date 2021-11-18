import { IColumn } from "@fluentui/react";

export interface Person
{
    key:string;
    name:string;
    age:number;
}

export const items:Person[] = 
[
    {'key':'1', 'name':'test1', 'age':20},
    {'key':'2', 'name':'test2', 'age':30},
    {'key':'3', 'name':'test3', 'age':40},
    {'key':'4', 'name':'test4', 'age':50},
    {'key':'5', 'name':'test5', 'age':60},
    {'key':'6', 'name':'test6', 'age':70},
]

export const columns:IColumn[] =
[
    {'key':'1', name:'Key', fieldName:'', minWidth:48, maxWidth:48,currentWidth:48},
    {'key':'2', name:'Name', fieldName:'name', minWidth:80, maxWidth:80},
    {'key':'3', name:'Age', fieldName:'age', minWidth:80, maxWidth:80},
]