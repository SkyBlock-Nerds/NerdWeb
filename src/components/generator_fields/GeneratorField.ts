import FieldType from "./FieldType.ts";

export class GeneratorField {
    Name: string;
    ApiPathVariable: boolean;
    QueryVariableName: string | undefined; // undefined if a path variable
    FieldType: FieldType;
    Description: string;
    AutoComplete: string | undefined; // the endpoint to call
    Required: boolean;

    constructor(Name: string, ApiPathVariable: boolean, QueryVariableName: string | undefined,  FieldType: FieldType, Description: string, Required: boolean = false, AutoComplete: string | undefined = undefined,) {
        this.Name = Name;
        this.ApiPathVariable = ApiPathVariable;
        this.QueryVariableName = QueryVariableName;
        this.FieldType = FieldType;
        this.AutoComplete = AutoComplete;
        this.Description = Description;
        this.Required = Required;
    }
}

export default GeneratorField;